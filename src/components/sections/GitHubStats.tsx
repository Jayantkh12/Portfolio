import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { FiRefreshCw } from 'react-icons/fi';
import { useGitHubStats } from '@/hooks/useGitHubStats';
import { useCountUp } from '@/hooks/useCountUp';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const GITHUB_USERNAME = 'Jayantkh12';

// ── Skeleton pulse ────────────────────────────────────────────────────────────
const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse rounded-lg bg-white/5 ${className}`} />
);

// ── Animated stat card ────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: number;
  icon: string;
  color: string;
  suffix?: string;
  loading: boolean;
  delay: number;
}

const StatCard = ({ label, value, icon, color, suffix = '', loading, delay }: StatCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 1500, inView && !loading);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <GlassCard hover className="text-center">
        <div className="text-3xl mb-2">{icon}</div>
        {loading ? (
          <Skeleton className="h-9 w-20 mx-auto mb-1" />
        ) : (
          <div className="font-display text-3xl font-bold mb-1" style={{ color }}>
            {count}{suffix}
          </div>
        )}
        <div className="text-text-muted text-sm">{label}</div>
      </GlassCard>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
export const GitHubStats = () => {
  const { stats, loading, error, lastUpdated } = useGitHubStats();

  const statItems = [
    {
      label: 'Public Repos',
      value: stats?.publicRepos ?? 0,
      icon: '📦',
      color: '#6366F1',
      suffix: '',
    },
    {
      label: 'Total Stars',
      value: stats?.totalStars ?? 0,
      icon: '⭐',
      color: '#F59E0B',
      suffix: '',
    },
    {
      label: 'Total Forks',
      value: stats?.totalForks ?? 0,
      icon: '🍴',
      color: '#8B5CF6',
      suffix: '',
    },
    {
      label: 'PRs Merged',
      value: stats?.mergedPRs ?? 0,
      icon: '🔀',
      color: '#06B6D4',
      suffix: '',
    },
  ];

  return (
    <section id="github" className="section-padding relative z-10" aria-label="GitHub statistics section">
      <div className="container-custom">
        <SectionHeader
          title="GitHub Stats"
          subtitle="Live open-source activity and contribution data — fetched directly from GitHub."
        />

        {/* Live badge */}
        <div className="flex justify-center mb-8 gap-3 flex-wrap">
          {lastUpdated && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs text-text-muted">
              <FiRefreshCw size={11} className="text-primary" />
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          {error && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 text-xs text-yellow-400">
              ⚠ GitHub API rate limited — showing cached data
            </span>
          )}
        </div>

        {/* Stats images row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&bg_color=0D1117&border_color=30363D&icon_color=6366F1&title_color=6366F1&text_color=C9D1D9&hide_border=false&count_private=true`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-4 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&bg_color=0D1117&border_color=30363D&title_color=6366F1&text_color=C9D1D9&hide_border=false&langs_count=8`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Streak stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-4 mb-8 overflow-hidden"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&background=0D1117&border=30363D&ring=6366F1&fire=8B5CF6&currStreakLabel=06B6D4&sideLabels=C9D1D9&currStreakNum=ffffff&sideNums=C9D1D9&dates=C9D1D9`}
            alt="GitHub Streak"
            className="w-full max-w-2xl mx-auto rounded-xl block"
            loading="lazy"
          />
        </motion.div>

        {/* Live activity highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, i) => (
            <StatCard
              key={item.label}
              {...item}
              loading={loading}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
