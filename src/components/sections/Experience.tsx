import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experiences } from '@/data/experience';

const typeColors: Record<string, string> = {
  'Full-time': '#22C55E',
  'Internship': '#6366F1',
  'Freelance': '#F59E0B',
  'Contract': '#06B6D4',
};

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative z-10" aria-label="Experience section">
      <div className="container-custom">
        <SectionHeader
          title="My Experience"
          subtitle="My professional journey — the roles, companies, and impact I've made along the way."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -ml-px timeline-line opacity-50" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-14 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 mt-2 glow-primary" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                {/* Card — shifted to avoid the dot */}
                <div className="flex-1 ml-10 md:ml-0 md:max-w-[calc(50%-2rem)]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-6"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">{exp.role}</h3>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                        <p className="text-text-muted text-xs">{exp.location}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                          style={{
                            background: `${typeColors[exp.type]}20`,
                            color: typeColors[exp.type],
                            border: `1px solid ${typeColors[exp.type]}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                        <p className="text-text-muted text-xs mt-1.5">
                          {exp.startDate} – {exp.current ? <span className="text-green-400">Present</span> : exp.endDate}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.description.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-text-muted text-sm">
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
