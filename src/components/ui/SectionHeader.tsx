import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({ title, subtitle, centered = true }: SectionHeaderProps) => {
  const [before, highlight, after] = extractHighlight(title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
        {before}
        <span className="gradient-text">{highlight}</span>
        {after}
      </h2>
      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-1 w-24 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mt-2 ${centered ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p className="text-text-muted text-lg mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

// Helper: wrap the last word in the title with gradient
function extractHighlight(title: string): [string, string, string] {
  const parts = title.trim().split(' ');
  if (parts.length <= 1) return ['', title, ''];
  const highlight = parts[parts.length - 1];
  const before = parts.slice(0, -1).join(' ') + ' ';
  return [before, highlight, ''];
}
