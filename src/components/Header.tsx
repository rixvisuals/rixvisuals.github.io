import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showDashboard?: boolean;
  setShowDashboard?: (show: boolean) => void;
  inboxCount?: number;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  isSearchOpen?: boolean;
  setIsSearchOpen?: (isOpen: boolean) => void;
  printRequestsCount: number;
  onOpenCartInfo: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  showDashboard = false,
  setShowDashboard,
  printRequestsCount,
  onOpenCartInfo
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', action: 'home' },
    { id: 'portfolio', label: 'Portfolio', action: 'portfolio' },
    { id: 'contact', label: 'Contact', action: 'contact' }
  ];

  const handleTabClick = (tab: { id: string; label: string; action: string }) => {
    setMobileMenuOpen(false);
    if (setShowDashboard) setShowDashboard(false);

    setActiveTab(tab.action);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-all border-b border-neutral-100 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Hamburger Trigger (Animated) */}
        <div className="flex md:hidden items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-black focus:outline-none rounded-lg bg-neutral-50 border border-neutral-100 shadow-xs"
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} className="text-red-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Brand signature on mobile */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab('home');
              if (setShowDashboard) setShowDashboard(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-sans text-xs font-black tracking-[0.3em] text-black uppercase"
          >
            RIXVISUALS
          </motion.button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {tabs.map((tab) => {
            const isTabActive = activeTab === tab.action && !showDashboard;

            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTabClick(tab)}
                className={`font-sans text-xs tracking-[0.2em] uppercase font-semibold transition-colors hover:text-black relative py-2 ${
                  isTabActive
                    ? 'text-black font-black'
                    : 'text-neutral-400'
                }`}
              >
                {tab.label}
                {isTabActive && (
                  <motion.span
                    layoutId="headerActiveTab"
                    className="absolute left-0 right-0 -bottom-1 h-[2.5px] bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Right Side: Instagram (Pink/Red/Yellow gradient) & Shopping Bag */}
        <div className="flex items-center space-x-5 text-neutral-700">
          
          {/* Instagram Logo with Pink, Red & Yellowish Gradient */}
          <motion.a
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.85 }}
            href="https://instagram.com/_rix.visuals_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 relative inline-flex items-center justify-center transition-transform cursor-pointer"
            aria-label="Visit real Instagram feed"
            title="Real Instagram Feed"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="realInstaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#realInstaGrad)" strokeWidth="2.4"/>
              <circle cx="12" cy="12" r="4.2" stroke="url(#realInstaGrad)" strokeWidth="2.4"/>
              <circle cx="17.5" cy="6.5" r="1.3" fill="url(#realInstaGrad)"/>
            </svg>
          </motion.a>

          {/* Shopping Bag Icon -> Active Print Requests */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onOpenCartInfo}
            className="hover:text-black transition-colors p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 relative cursor-pointer"
            aria-label="Active print requests list"
          >
            <ShoppingBag size={19} strokeWidth={2} />
            {printRequestsCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-gradient-to-tr from-red-600 to-pink-600 text-white text-[10px] font-mono rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md animate-bounce"
              >
                {printRequestsCount}
              </motion.span>
            )}
          </motion.button>

        </div>
      </div>

      {/* Upgraded Mobile Drawer Menu List with Smooth Dynamic Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-2xl px-6 py-6 absolute left-0 right-0 top-full shadow-2xl z-40 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {tabs.map((tab, idx) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.35, ease: "easeOut" }}
                  whileHover={{ x: 8, backgroundColor: "rgba(0,0,0,0.04)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTabClick(tab)}
                  className={`text-left font-sans text-xs font-black tracking-[0.25em] py-3.5 px-4 rounded-xl transition-all uppercase flex items-center justify-between border ${
                    activeTab === tab.action ? 'border-neutral-300 bg-neutral-100 text-black shadow-xs' : 'border-transparent text-neutral-600'
                  }`}
                >
                  <span>{tab.label}</span>
                  {activeTab === tab.action && (
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 animate-ping" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
