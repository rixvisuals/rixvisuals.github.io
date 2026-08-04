import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Trash2, ExternalLink } from 'lucide-react';

interface PrintCartItem {
  title: string;
  imageUrl?: string;
}

interface PrintInquiryProps {
  cartItems: PrintCartItem[];
  onRemoveItem: (title: string) => void;
  onNavigateToPortfolio: () => void;
}

export default function PrintInquiry({
  cartItems,
  onRemoveItem,
  onNavigateToPortfolio
}: PrintInquiryProps) {
  // WhatsApp configuration
  const WHATSAPP_NUMBER = "27619280584"; // Igor's South African WhatsApp number

  const getWhatsAppSingleUrl = (item: PrintCartItem) => {
    const [folderName, imageName] = item.title.split(' — ');
    const text = `Hi Igor,\n\nI would like to order the digital file for this shot:\n\n📁 Folder: ${folderName || 'General'}\n📸 Image: ${imageName || item.title}\n\nPrice: R50 (Digital High-Res File)`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppAllUrl = () => {
    const itemsText = cartItems.map((item, index) => {
      const [folderName, imageName] = item.title.split(' — ');
      return `[${index + 1}] Folder: ${folderName || 'General'}\n    Image: ${imageName || item.title}`;
    }).join('\n\n');

    const totalCost = cartItems.length * 50;
    const text = `Hi Igor,\n\nI would like to order digital files for these shots:\n\n${itemsText}\n\nTotal price: R${totalCost} (${cartItems.length} digital high-res shots @ R50 each)`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 bg-white" id="print-inquiry-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] text-pink-600 block uppercase mb-1 font-semibold">
            DIGITAL DELIVERABLE SYSTEM • NO PHYSICAL PRINTS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 font-sans uppercase">
            DIGITAL SHOT ORDER
          </h2>
          <p className="text-xs text-neutral-400 font-mono tracking-widest mt-2 uppercase">
            Full Resolution Digital Files • Direct to WhatsApp
          </p>
          <div className="w-12 h-0.5 bg-black mx-auto mt-4" />
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50 p-8">
            <ShoppingBag className="w-8 h-8 mx-auto text-neutral-300 mb-4" />
            <h3 className="font-sans text-sm font-bold tracking-wider text-neutral-800 uppercase">
              Your digital selection is empty
            </h3>
            <p className="text-xs text-neutral-500 font-light mt-2 max-w-md mx-auto leading-relaxed">
              Explore our gallery collections, inspect your favorite captures, and add them to your digital order stack.
            </p>
            <button
              onClick={onNavigateToPortfolio}
              className="mt-6 font-mono text-[10px] tracking-widest bg-black text-white hover:bg-neutral-800 px-6 py-3 transition-colors uppercase inline-flex items-center gap-2 rounded font-medium"
            >
              EXPLORE PORTFOLIO <ArrowRight size={12} />
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-neutral-50 border border-neutral-100 p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-sans text-xs font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                  <span>Direct WhatsApp Order</span>
                  <span className="text-[9px] font-mono bg-neutral-900 text-white px-2 py-0.5 rounded font-normal">DIGITAL ONLY</span>
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1">
                  Each shot you order is delivered digitally in original high resolution for R50. Click order to message Igor directly on WhatsApp.
                </p>
              </div>
              {cartItems.length > 1 && (
                <a
                  href={getWhatsAppAllUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-white font-mono text-[10px] tracking-widest px-6 py-3.5 hover:bg-neutral-800 transition-colors uppercase font-bold flex items-center justify-center gap-2 rounded whitespace-nowrap shadow-xs"
                >
                  ORDER ALL ({cartItems.length} SHOTS) <ExternalLink size={12} />
                </a>
              )}
            </div>

            <div className="border border-neutral-100 rounded-2xl divide-y divide-neutral-100 overflow-hidden bg-white shadow-xs">
              {cartItems.map((item) => {
                const [folderName, imageName] = item.title.split(' — ');
                return (
                  <div key={item.title} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-neutral-50/40 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      {item.imageUrl && (
                        <div className="w-20 h-14 bg-neutral-100 border border-neutral-200 rounded overflow-hidden flex-shrink-0 relative select-none">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover animate-fade-in"
                          />
                          <div className="absolute inset-0 bg-neutral-950/5 flex items-center justify-center opacity-40">
                            <span className="font-mono text-[6px] tracking-widest text-black -rotate-12 uppercase">PROOF</span>
                          </div>
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-[8px] font-mono tracking-[0.25em] text-pink-500 font-semibold uppercase block mb-1">
                          FOLDER: {folderName || 'GENERAL'}
                        </span>
                        <h4 className="font-sans text-sm font-bold text-neutral-900 uppercase truncate">
                          {imageName || item.title}
                        </h4>
                        <p className="text-[10px] text-neutral-400 font-mono tracking-wider mt-1 uppercase">
                          FULL HIGH-RESOLUTION DIGITAL FILE
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => onRemoveItem(item.title)}
                        className="p-2.5 text-neutral-400 hover:text-red-500 transition-colors border border-neutral-100 hover:border-red-100 bg-neutral-50 hover:bg-red-50/30 rounded"
                        title="Remove from selection"
                      >
                        <Trash2 size={14} />
                      </button>
                      <a
                        href={getWhatsAppSingleUrl(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none font-mono text-[10px] tracking-widest text-center bg-white border border-neutral-300 hover:border-black text-neutral-800 hover:text-black py-2.5 px-5 transition-colors uppercase font-medium flex items-center justify-center gap-1.5 rounded"
                      >
                        ORDER DIGITAL SHOT (R50) <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
