import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const Resume = () => {
  return (
    <section id="resume" className="section-padding relative z-10" aria-label="Resume section">
      <div className="container-custom">
        <SectionHeader
          title="My Resume"
          subtitle="Download or view my full professional resume."
        />

        <div className="max-w-4xl mx-auto">
          {/* Resume preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden mb-8"
          >
            {/* Resume mock */}
            <div className="bg-gradient-to-br from-surface-1 to-surface-2 p-8 min-h-96 relative">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="font-display text-9xl font-black text-primary">JC</span>
              </div>

              {/* Resume header mock */}
              <div className="relative space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-display text-3xl font-bold gradient-text">Jayant Choudhary</h3>
                      <p className="text-text-muted mt-1">Full Stack Developer · Bangalore, India</p>
                      <p className="text-text-muted text-sm">jayantkumar2901@gmail.com · github.com/Jayantkh12</p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                      <span className="text-white font-bold text-xl">JC</span>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-50 mb-6" />
                </div>

                {/* Summary */}
                <div>
                  <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider mb-2">Summary</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Passionate Full Stack Developer with 2+ years building scalable web applications.
                    Proficient in React, Node.js, TypeScript, and cloud technologies. Strong background
                    in competitive programming and open-source contributions.
                  </p>
                </div>

                {/* Skills preview */}
                <div>
                  <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider mb-3">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'].map(skill => (
                      <span key={skill} className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience preview */}
                <div>
                  <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider mb-3">Experience</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between items-center">
                        <p className="text-white text-sm font-medium">Full Stack Developer — TechNova Solutions</p>
                        <p className="text-text-muted text-xs">Jan 2024 – Present</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <p className="text-white text-sm font-medium">Frontend Developer Intern — Innovatech Labs</p>
                        <p className="text-text-muted text-xs">Jun – Dec 2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blur overlay hint */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface-1 to-transparent flex items-end justify-center pb-4">
                  <p className="text-text-muted text-xs">Download for full details →</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/Jayant_Resume.pdf"
              download="Jayant_Resume.pdf"
              id="resume-download-btn"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-secondary transition-colors text-white font-semibold glow-primary"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
            <a
              href="/Jayant_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resume-view-btn"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass border border-white/20 hover:border-primary/40 text-white font-semibold hover:text-primary transition-all"
            >
              <FiEye size={18} />
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
