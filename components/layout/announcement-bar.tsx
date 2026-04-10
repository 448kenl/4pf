'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { announcementMessages } from '@/data/store';

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % announcementMessages.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="border-b border-white/10 bg-zinc-950 py-2 text-center text-xs tracking-[0.2em] text-bone">
      <AnimatePresence mode="wait">
        <motion.p key={index} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.25 }}>
          {announcementMessages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
