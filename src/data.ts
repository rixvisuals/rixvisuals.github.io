import { Photo, GearItem, Album } from './types';

export const samplePhotos: Photo[] = [
  {
    id: 'porsche_gt3_1',
    title: 'PORSCHE 911 GT3 RS',
    category: 'automotive',
    tagline: 'HIGH SPEED APEX',
    date: 'OCTOBER 2025',
    location: 'PHILLIP ISLAND CIRCUIT',
    imageUrl: '/src/assets/images/green_car_misty_1782210470106.jpg',
    specs: { camera: 'Sony Alpha 7R V', lens: '70-200mm f/2.8 GM', shutter: '1/2000s', aperture: 'f/2.8', iso: '100' },
    story: 'Captured mid-corner at 180km/h through the misty morning track fog.'
  },
  {
    id: 'cockpit_night_1',
    title: 'TOKYO COCKPIT PERSPECTIVE',
    category: 'automotive',
    tagline: 'LIFE THROUGH OPTICS',
    date: 'DECEMBER 2025',
    location: 'SHIBUYA EXPRESSWAY',
    imageUrl: '/src/assets/images/driver_cockpit_view_1782210484649.jpg',
    specs: { camera: 'Leica M11', lens: 'Summicron-M 35mm f/2', shutter: '1/60s', aperture: 'f/2.0', iso: '800' },
    story: 'First person perspective steering through the neon lit tollways of midnight Tokyo.'
  },
  {
    id: 'hero_igor_1',
    title: 'LEAD DIRECTOR PORTRAIT',
    category: 'automotive',
    tagline: 'CREATIVE DIRECTION',
    date: 'JANUARY 2026',
    location: 'MELBOURNE STUDIO',
    imageUrl: '/src/assets/images/igor_photographer_1782210450713.jpg',
    specs: { camera: 'Hasselblad 907X', lens: 'XCD 80mm f/1.9', shutter: '1/250s', aperture: 'f/1.9', iso: '100' },
    story: 'Behind the scenes at Rixvisuals headquarters.'
  },
  {
    id: 'm4_gt3_apex',
    title: 'BMW M4 GT3 APEX',
    category: 'automotive',
    tagline: 'TRACKSIDE PRECISION',
    date: 'FEBRUARY 2026',
    location: 'KYALAMI GRAND PRIX CIRCUIT',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    specs: { camera: 'Sony Alpha 7R V', lens: '400mm f/2.8 GM', shutter: '1/3200s', aperture: 'f/2.8', iso: '100' },
    story: 'Slicing through the hairpins during golden hour practice sessions.'
  },
  {
    id: 'ferrari_f40_dusk',
    title: 'FERRARI F40 LEGACY',
    category: 'automotive',
    tagline: 'ANALOG SPEED',
    date: 'JANUARY 2026',
    location: 'STELLENBOSCH MOUNTAIN PASS',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    specs: { camera: 'Leica M11', lens: 'Noctilux 50mm f/0.95', shutter: '1/1000s', aperture: 'f/1.2', iso: '50' },
    story: 'Iconic twin-turbo supercar carved through sunset Cape mountain roads.'
  },
  {
    id: 'porsche_classic_911',
    title: 'PORSCHE 911 AIRCOOLED',
    category: 'automotive',
    tagline: 'HERITAGE SHUTTER',
    date: 'NOVEMBER 2025',
    location: 'FRANSCHHOEK PASS',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    specs: { camera: 'Hasselblad 907X', lens: 'XCD 38mm f/2.5', shutter: '1/500s', aperture: 'f/4.0', iso: '100' },
    story: 'Vintage air-cooled silhouette set against dramatic mountain horizons.'
  },
  {
    id: 'supercar_track_sprint',
    title: 'SUPERCAR TRACK SPRINT',
    category: 'automotive',
    tagline: 'HIGH SPEED MOTION',
    date: 'MARCH 2026',
    location: 'KILLARNEY RACEWAY',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    specs: { camera: 'Sony Alpha 7R V', lens: '70-200mm f/2.8 GM', shutter: '1/1600s', aperture: 'f/2.8', iso: '200' },
    story: 'Raw speed and aerodynamic tension captured at apex clipping points.'
  },
  {
    id: 'mclaren_night_express',
    title: 'MCLAREN 720S MIDNIGHT',
    category: 'automotive',
    tagline: 'AERODYNAMIC OPTICS',
    date: 'FEBRUARY 2026',
    location: 'CAPE TOWN COASTAL ROUTE',
    imageUrl: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    specs: { camera: 'Leica M11', lens: 'Summicron 35mm f/2', shutter: '1/125s', aperture: 'f/2.0', iso: '400' },
    story: 'Sculpted carbon fibre bodywork reflecting coastal streetlights.'
  },
  {
    id: 'classic_m3_heritage',
    title: 'BMW E30 M3 SPORT EVOLUTION',
    category: 'automotive',
    tagline: 'MOTORSPORT ICON',
    date: 'DECEMBER 2025',
    location: 'STELLENBOSCH PADDOCK',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    specs: { camera: 'Hasselblad 907X', lens: 'XCD 80mm f/1.9', shutter: '1/800s', aperture: 'f/2.8', iso: '100' },
    story: 'The legendary homologation racer in pristine original condition.'
  }
];

export const photosData: Photo[] = samplePhotos;

export const albumsData: Album[] = [
  {
    id: 'album_porsche',
    title: 'PORSCHE CIRCUIT ARCHIVES',
    folderCode: 'DIR_PORSCHE_CIRCUIT',
    coverImageUrl: '/src/assets/images/green_car_misty_1782210470106.jpg',
    date: 'OCT 2025',
    location: 'PHILLIP ISLAND',
    photos: [samplePhotos[0], samplePhotos[3], samplePhotos[5]]
  },
  {
    id: 'album_tokyo',
    title: 'MIDNIGHT EXPRESSWAY',
    folderCode: 'DIR_TOKYO_NIGHTS',
    coverImageUrl: '/src/assets/images/driver_cockpit_view_1782210484649.jpg',
    date: 'DEC 2025',
    location: 'TOKYO, JAPAN',
    photos: [samplePhotos[1], samplePhotos[4], samplePhotos[7]]
  },
  {
    id: 'album_studio',
    title: 'BESPOKE STUDIO & TRACK SESSIONS',
    folderCode: 'DIR_STUDIO_WORKS',
    coverImageUrl: '/src/assets/images/igor_photographer_1782210450713.jpg',
    date: 'JAN 2026',
    location: 'STELLENBOSCH, ZA',
    photos: [samplePhotos[2], samplePhotos[6], samplePhotos[8]]
  }
];

export const gearBag: GearItem[] = [
  { name: 'Leica M11 Rangefinder', type: 'Camera Body', description: '61MP full-frame color sensor. Simple rangefinder focusing for slow, deliberate, masterpiece framing.' },
  { name: 'Leica M11 Monochrom', type: 'Camera Body', description: 'Dedicated monochrome sensor captures raw lightness values, organic detail, and unparalleled high-ISO performance.' },
  { name: 'Sony Alpha 7R V', type: 'Camera Body', description: 'Superb 61MP workhorse with rapid deep-learning AI tracking. Used for dynamic, fast-speed car-to-car motion shots.' },
  { name: 'Hasselblad 907X 50C', type: 'Medium Format', description: 'Retro medium-format aesthetic. Offers extraordinary latitude, rich natural colors, and iconic square compositions.' },
  { name: 'Noctilux-M 50mm f/0.95 ASPH', type: 'Leica Lens', description: 'The absolute king of depth of field. Soft organic falloff with razor-sharp center details.' },
  { name: 'Apo-Summicron-M 50mm f/2 ASPH', type: 'Leica Lens', description: 'The sharpest standard lens ever made. Clinical precision, superb micro-contrast, zero chromatic aberration.' },
  { name: 'Sony FE 24-70mm f/2.8 GM II', type: 'Sony Lens', description: 'Extremely sharp zoom lens, essential for composition adjustability from support car tracking boots.' },
  { name: 'Sony FE 85mm f/1.4 GM', type: 'Sony Lens', description: 'Dreamy portrait and compression lens. Flattens race cars beautifully into dramatic landscapes.' }
];

export const aboutContent = {
  heroHeading: "Hi, I'm Igor - a photographer and content creator with a huge passion for cars.",
  storyTitle: "Who Is RixVisuals?",
  paragraphs: [
    "I'm a student from Maties with a deep passion for photography and motorsports. Combining my academic journey at Stellenbosch University with an unyielding love for high-speed racing and visual storytelling, I created Rixvisuals to capture the raw energy, mechanical emotion, and design precision of automotive culture through my lens."
  ],
  avatarUrl: '/src/assets/images/igor_photographer_1782210450713.jpg',
  portfolioOwnerPhotoLeft: '/src/assets/images/green_car_misty_1782210470106.jpg',
  portfolioOwnerPhotoRight: '/src/assets/images/driver_cockpit_view_1782210484649.jpg'
};
