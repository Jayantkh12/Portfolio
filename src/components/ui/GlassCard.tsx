import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({ children, className = '', hover = false, glow = false, onClick }: GlassCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        glass rounded-2xl p-6
        ${glow ? 'glow-primary' : ''}
        ${hover ? 'cursor-pointer project-card' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
