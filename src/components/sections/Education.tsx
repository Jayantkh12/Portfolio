import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { educationList } from '@/data/education';

export const Education = () => {
  return (
    <section id="education" className="section-padding relative z-10" aria-label="Education section">
      <div className="container-custom">
        <SectionHeader
          title="My Education"
          subtitle="Academic journey and the foundations that shape my engineering mindset."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass rounded-2xl p-7 relative overflow-hidden group"
              >
                {/* Gradient accent stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary via-secondary to-accent" />

                {/* Current badge */}
                {edu.current && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Currently Enrolled</span>
                  </div>
                )}

                <div className="flex items-start gap-5 pl-4">
                  {/* Icon */}
                  <div className="text-4xl flex-shrink-0 mt-1">{edu.icon}</div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-white mb-1 pr-28">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-0.5">{edu.institution}</p>
                    <p className="text-text-muted text-xs mb-3">
                      {edu.location} &nbsp;·&nbsp; {edu.period}
                    </p>

                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Score badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/25">
                      <span className="text-text-muted text-xs">{edu.scoreLabel}:</span>
                      <span className="text-primary font-bold text-sm">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievements row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Academic <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              { icon: '🏆', title: 'JEE Mains', value: '99.40 Percentile', color: '#F59E0B' },
              { icon: '🏅', title: 'JEE Advanced', value: 'AIR 10,091', color: '#8B5CF6' },
              { icon: '💻', title: 'LeetCode', value: 'Rating 1643', color: '#6366F1' },
              { icon: '🚀', title: 'Projects', value: '3 Built', color: '#06B6D4' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-sm mb-0.5" style={{ color: item.color }}>
                  {item.value}
                </div>
                <div className="text-text-muted text-xs">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
