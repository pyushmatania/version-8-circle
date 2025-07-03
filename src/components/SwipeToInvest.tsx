import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SwipeToInvestProps {
  amount: number;
  onConfirm: () => void;
}

const SwipeToInvest: React.FC<SwipeToInvestProps> = ({ amount, onConfirm }) => {
  const x = useMotionValue(0);
  const progress = useTransform(x, [0, 250], [0, 100]);
  const [completed, setCompleted] = useState(false);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 200) {
      setCompleted(true);
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.6 } });
      onConfirm();
      setTimeout(() => {
        setCompleted(false);
        x.set(0);
      }, 1500);
    } else {
      x.set(0);
    }
  };

  return (
    <motion.div className="swipe-button select-none">
      <motion.div className="absolute inset-0 bg-white/20" style={{ width: progress }} />
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 250 }}
        dragElastic={0}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="relative z-10 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence mode="wait" initial={false}>
          {completed ? (
            <motion.span
              key="done"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-2"
            >
              <Check className="w-5 h-5" /> Invested!
            </motion.span>
          ) : (
            <motion.span key="label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              ➡️ Swipe to Invest ₹{amount.toLocaleString()}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SwipeToInvest;
