import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { FiCode, FiTrendingUp, FiStar, FiAward, FiRefreshCw } from 'react-icons/fi';
import { useCodingStats, cfRatingColor, formatRank } from '@/hooks/useCodingStats';

// ─── Skeleton pulse ───────────────────────────────────────────────────────────
const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse rounded-lg bg-white/5 ${className}`} />
);

// ─── Stat mini-card ───────────────────────────────────────────────────────────
interface MiniCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  loading?: boolean;
}

const MiniCard = ({ label, value, icon: Icon, color, loading }: MiniCardProps) => (
  <div
    className="p-4 rounded-xl text-center"
    style={{ background: `${color}10`, border: `1px solid ${color}20` }}
  >
    <Icon size={18} style={{ color }} className="mx-auto mb-2" />
    {loading ? (
      <Skeleton className="h-6 w-16 mx-auto mb-1" />
    ) : (
      <div className="font-bold text-white text-lg">{value}</div>
    )}
    <div className="text-text-muted text-xs">{label}</div>
  </div>
);

// ─── Difficulty progress bar ──────────────────────────────────────────────────
interface BarProps {
  label: string;
  solved: number;
  total: number;
  color: string;
  loading?: boolean;
}

const DiffBar = ({ label, solved, total, color, loading }: BarProps) => (
  <div>
    <div className="flex justify-between text-xs mb-1">
      <span style={{ color }}>{label}</span>
      {loading ? (
        <Skeleton className="h-3 w-12" />
      ) : (
        <span className="text-text-muted">{solved}/{total}</span>
      )}
    </div>
    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
      {loading ? (
        <div className="h-full w-1/3 animate-pulse rounded-full" style={{ background: color }} />
      ) : (
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: total > 0 ? `${(solved / total) * 100}%` : '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      )}
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
export const CodingProfiles = () => {
  const {
    leetcode, codeforces,
    leetcodeLoading, codeforcesLoading,
    leetcodeError, codeforcesError,
    lastUpdated,
  } = useCodingStats();

  const lcColor = '#FFA116';
  const cfColor = '#1F8ACB';

  /* Derived totals */
  const lcTotal = leetcode
    ? leetcode.totalEasy + leetcode.totalMedium + leetcode.totalHard
    : 0;

  const cfRankColor = codeforces ? cfRatingColor(codeforces.maxRating) : cfColor;

  return (
    <section id="coding" className="section-padding relative z-10" aria-label="Coding profiles section">
      <div className="container-custom">
        <SectionHeader
          title="Coding Profiles"
          subtitle="Live competitive programming statistics — auto-updated from public APIs."
        />

        {/* Last-updated badge */}
        {lastUpdated && (
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs text-text-muted">
              <FiRefreshCw size={11} className="text-primary" />
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 mb-12">

          {/* ── LeetCode ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center">
                  <SiLeetcode size={28} className="text-[#FFA116]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">LeetCode</h3>
                  <a
                    href="https://leetcode.com/u/Jayantchoudhary29"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="leetcode-profile-link"
                    className="text-[#FFA116] text-sm hover:underline"
                  >
                    @Jayantchoudhary29
                  </a>
                </div>
                {leetcodeError && (
                  <span className="ml-auto text-xs text-red-400 border border-red-400/30 rounded-full px-2 py-0.5">
                    API unavailable
                  </span>
                )}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <MiniCard label="Problems Solved" value={leetcode?.totalSolved ?? '—'} icon={FiCode} color={lcColor} loading={leetcodeLoading} />
                <MiniCard label="Acceptance Rate" value={leetcode ? `${leetcode.acceptanceRate}%` : '—'} icon={FiTrendingUp} color={lcColor} loading={leetcodeLoading} />
                <MiniCard label="Easy Solved" value={leetcode?.easySolved ?? '—'} icon={FiStar} color="#22C55E" loading={leetcodeLoading} />
                <MiniCard label="Global Rank" value={leetcode ? `#${leetcode.ranking.toLocaleString()}` : '—'} icon={FiAward} color={lcColor} loading={leetcodeLoading} />
              </div>

              {/* Difficulty breakdown */}
              <div className="space-y-3">
                <p className="text-text-muted text-sm font-medium mb-3">Problem Breakdown</p>
                <DiffBar label="Easy"   solved={leetcode?.easySolved   ?? 0} total={leetcode?.totalEasy   ?? 100} color="#22C55E" loading={leetcodeLoading} />
                <DiffBar label="Medium" solved={leetcode?.mediumSolved ?? 0} total={leetcode?.totalMedium ?? 100} color="#F59E0B" loading={leetcodeLoading} />
                <DiffBar label="Hard"   solved={leetcode?.hardSolved   ?? 0} total={leetcode?.totalHard   ?? 100} color="#EF4444" loading={leetcodeLoading} />
              </div>

              {/* Total bar */}
              {!leetcodeLoading && leetcode && (
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-muted">
                  <span>Total questions on platform</span>
                  <span className="text-white font-medium">{lcTotal.toLocaleString()}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* ── Codeforces ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#1F8ACB]/10 border border-[#1F8ACB]/30 flex items-center justify-center">
                  <SiCodeforces size={28} className="text-[#1F8ACB]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Codeforces</h3>
                  <a
                    href="https://codeforces.com/profile/Jayantchoudhary29"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="codeforces-profile-link"
                    className="text-[#1F8ACB] text-sm hover:underline"
                  >
                    @Jayantchoudhary29
                  </a>
                </div>
                {codeforcesError && (
                  <span className="ml-auto text-xs text-red-400 border border-red-400/30 rounded-full px-2 py-0.5">
                    API unavailable
                  </span>
                )}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <MiniCard label="Current Rating" value={codeforcesLoading ? '—' : (codeforces?.rating || 'Unrated')} icon={FiTrendingUp} color={cfColor} loading={codeforcesLoading} />
                <MiniCard label="Max Rating" value={codeforcesLoading ? '—' : (codeforces?.maxRating || '—')} icon={FiStar} color={cfColor} loading={codeforcesLoading} />
                <MiniCard label="Current Rank" value={codeforcesLoading ? '—' : (codeforces ? formatRank(codeforces.rank) : '—')} icon={FiAward} color={cfColor} loading={codeforcesLoading} />
                <MiniCard label="Max Rank" value={codeforcesLoading ? '—' : (codeforces ? formatRank(codeforces.maxRank) : '—')} icon={FiCode} color={cfColor} loading={codeforcesLoading} />
              </div>

              {/* Rating visual */}
              <div
                className="p-5 rounded-xl text-center"
                style={{ background: `${cfRankColor}08`, border: `1px solid ${cfRankColor}25` }}
              >
                <p className="text-text-muted text-xs mb-2">Peak Performance</p>
                {codeforcesLoading ? (
                  <>
                    <Skeleton className="h-9 w-32 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto" />
                  </>
                ) : (
                  <>
                    <p
                      className="font-display text-3xl font-bold"
                      style={{ color: cfRankColor }}
                    >
                      {codeforces ? formatRank(codeforces.maxRank) : 'Unrated'}
                    </p>
                    <p className="text-text-muted text-xs mt-1">
                      Max Rating: <span className="font-semibold" style={{ color: cfRankColor }}>
                        {codeforces?.maxRating ?? '—'}
                      </span>
                    </p>
                    {codeforces && (
                      <div className="mt-3 flex justify-center">
                        {/* Rating progress bar */}
                        <div className="w-full max-w-xs">
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                width: `${Math.min((codeforces.maxRating / 3000) * 100, 100)}%`,
                                background: cfRankColor,
                              }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-text-muted mt-1">
                            <span>0</span>
                            <span>3000</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom summary badges ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              label: 'Total Solved (LC)',
              value: leetcodeLoading ? '…' : (leetcode ? `${leetcode.totalSolved}` : '—'),
              icon: '🧩',
              color: '#6366F1',
            },
            {
              label: 'LeetCode Rank',
              value: leetcodeLoading ? '…' : (leetcode ? `#${leetcode.ranking.toLocaleString()}` : '—'),
              icon: '🏅',
              color: '#FFA116',
            },
            {
              label: 'CF Rating',
              value: codeforcesLoading ? '…' : (codeforces?.rating ? String(codeforces.rating) : 'Unrated'),
              icon: '⚡',
              color: cfRankColor,
            },
            {
              label: 'CF Max Rank',
              value: codeforcesLoading ? '…' : (codeforces ? formatRank(codeforces.maxRank) : '—'),
              icon: '🧠',
              color: '#06B6D4',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="glass rounded-2xl p-5 text-center hover:scale-105 transition-transform cursor-default"
                style={{ borderColor: `${item.color}20` }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-lg mb-1" style={{ color: item.color }}>
                  {item.value === '…' ? <Skeleton className="h-6 w-16 mx-auto" /> : item.value}
                </div>
                <div className="text-text-muted text-sm">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
