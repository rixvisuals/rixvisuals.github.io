import { useState, useEffect } from 'react';
import { samplePhotos } from '../data';

export interface RandomPhotoPair {
  leftImg: string;
  leftTitle: string;
  rightImg: string;
  rightTitle: string;
}

export function useRandomDrivePhotos() {
  const [pair, setPair] = useState<RandomPhotoPair | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    let shuffleInterval: NodeJS.Timeout | null = null;

    function pickRandomPair(pool: Array<{ title: string; imageUrl?: string; url?: string }>): RandomPhotoPair {
      if (!pool || pool.length === 0) {
        return {
          leftImg: '',
          leftTitle: '',
          rightImg: '',
          rightTitle: '',
        };
      }
      if (pool.length === 1) {
        const url = pool[0].url || pool[0].imageUrl || '';
        return {
          leftImg: url,
          leftTitle: pool[0].title,
          rightImg: url,
          rightTitle: pool[0].title,
        };
      }
      const idx1 = Math.floor(Math.random() * pool.length);
      let idx2 = Math.floor(Math.random() * pool.length);
      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * pool.length);
      }
      return {
        leftImg: pool[idx1].url || pool[idx1].imageUrl || '',
        leftTitle: pool[idx1].title,
        rightImg: pool[idx2].url || pool[idx2].imageUrl || '',
        rightTitle: pool[idx2].title,
      };
    }

    async function initPhotos() {
      let pool: Array<{ title: string; url?: string; imageUrl?: string }> = [];

      try {
        const configRes = await fetch('/api/cloud/config');
        if (configRes.ok) {
          const config = await configRes.json();
          const googleDriveId = config.googleDriveId || '1gCtc33qagMNyQQgnZBIuI47tqTRpFgID';

          const subfoldersRes = await fetch(`/api/drive/subfolders/${googleDriveId}`);
          if (subfoldersRes.ok) {
            const subfoldersData = await subfoldersRes.json();
            const driveImages: Array<{ title: string; url: string }> = [];

            if (subfoldersData.folders && subfoldersData.folders.length > 0) {
              const folderPromises = subfoldersData.folders.map((folder: { id: string }) =>
                fetch(`/api/drive/folder/${folder.id}`)
                  .then((res) => (res.ok ? res.json() : null))
                  .catch(() => null)
              );

              const results = await Promise.all(folderPromises);
              for (const resData of results) {
                if (resData && resData.files) {
                  for (const file of resData.files) {
                    const title = file.name
                      ? file.name.replace(/\.[^/.]+$/, '').toUpperCase()
                      : 'DRIVE CAPTURE';
                    driveImages.push({
                      title,
                      url: `/api/drive/image/${file.id}`,
                    });
                  }
                }
              }
            } else {
              const filesRes = await fetch(`/api/drive/folder/${googleDriveId}`);
              if (filesRes.ok) {
                const filesData = await filesRes.json();
                if (filesData.files) {
                  for (const file of filesData.files) {
                    const title = file.name
                      ? file.name.replace(/\.[^/.]+$/, '').toUpperCase()
                      : 'DRIVE CAPTURE';
                    driveImages.push({
                      title,
                      url: `/api/drive/image/${file.id}`,
                    });
                  }
                }
              }
            }

            if (driveImages.length > 0) {
              pool = driveImages;
            }
          }
        }
      } catch (err) {
        console.error('Error fetching Google Drive photos:', err);
      }

      // Fallback to sample portfolio photos if drive photos are empty or unavailable
      if (pool.length === 0) {
        pool = samplePhotos;
      }

      if (isMounted) {
        setPair(pickRandomPair(pool));
        setLoading(false);

        // Shuffle every 5 seconds (5000 ms)
        shuffleInterval = setInterval(() => {
          if (isMounted) {
            setPair(pickRandomPair(pool));
          }
        }, 5000);
      }
    }

    initPhotos();

    return () => {
      isMounted = false;
      if (shuffleInterval) clearInterval(shuffleInterval);
    };
  }, []);

  return { pair, loading };
}
