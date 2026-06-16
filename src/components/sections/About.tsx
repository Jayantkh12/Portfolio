import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { label: 'JEE Mains Percentile', value: 99, suffix: '.40', icon: '🏆', color: '#F59E0B' },
  { label: 'LeetCode Rating', value: 1643, suffix: '', icon: '💻', color: '#6366F1' },
  { label: 'Projects Built', value: 3, suffix: '+', icon: '🚀', color: '#06B6D4' },
  { label: 'CGPA at DTU', value: 8, suffix: '.0', icon: '🎓', color: '#8B5CF6' },
];

const achievements = [
  { icon: '🏆', title: 'JEE Mains', value: '99.40 Percentile', color: '#F59E0B' },
  { icon: '🏅', title: 'JEE Advanced', value: 'AIR 10,091', color: '#8B5CF6' },
  { icon: '💻', title: 'LeetCode Rating', value: '1643', color: '#6366F1' },
  { icon: '🎓', title: 'DTU CGPA', value: '8.0 / 10.0', color: '#06B6D4' },
];

const StatCard = ({ label, value, suffix, icon, color }: typeof stats[0]) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, inView);

  return (
    <GlassCard hover className="text-center" glow={false}>
      <div ref={ref}>
        <div className="text-4xl mb-3">{icon}</div>
        <div className="font-display text-4xl font-bold mb-1" style={{ color }}>
          {count}{suffix}
        </div>
        <div className="text-text-muted text-sm">{label}</div>
      </div>
    </GlassCard>
  );
};

export const About = () => {
  return (
    <section id="about" className="section-padding relative z-10" aria-label="About me section">
      <div className="container-custom">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me — my journey, passion, and what drives me every day."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Visual — Code block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-sm" />
              <div className="relative glass rounded-3xl p-8 flex flex-col gap-4 h-full">
                <div className="font-mono text-xs text-text-muted space-y-1.5">
                  <p><span className="text-secondary">const</span> <span className="text-accent">developer</span> <span className="text-white">=</span> {'{'}</p>
                  <p className="pl-4"><span className="text-primary">name</span>: <span className="text-green-400">"Jayant Choudhary"</span>,</p>
                  <p className="pl-4"><span className="text-primary">university</span>: <span className="text-green-400">"DTU, New Delhi"</span>,</p>
                  <p className="pl-4"><span className="text-primary">degree</span>: <span className="text-green-400">"B.Tech CSE (2024–28)"</span>,</p>
                  <p className="pl-4"><span className="text-primary">cgpa</span>: <span className="text-yellow-400">8.0</span>,</p>
                  <p className="pl-4"><span className="text-primary">languages</span>: [</p>
                  <p className="pl-8"><span className="text-green-400">"C++"</span>, <span className="text-green-400">"Python"</span>,</p>
                  <p className="pl-8"><span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"SQL"</span></p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-primary">leetcode</span>: <span className="text-yellow-400">1643</span>,</p>
                  <p className="pl-4"><span className="text-primary">available</span>: <span className="text-green-400">true</span>,</p>
                  <p>{'}'}</p>
                </div>

                <div className="mt-auto flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/30 w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Open to internships</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl font-bold text-white">
              Turning <span className="gradient-text">ideas</span> into{' '}
              <span className="gradient-text">reality</span>
            </h3>

            <p className="text-text-muted leading-relaxed">
              I'm <strong className="text-white">Jayant Choudhary</strong>, a Computer Science student at{' '}
              <strong className="text-white">Delhi Technological University (DTU)</strong> with a passion for software engineering,
              web development, and algorithms. I enjoy building scalable applications and solving real-world problems through clean,
              efficient code.
            </p>

            <p className="text-text-muted leading-relaxed">
              My journey started with competitive programming — cracking JEE Advanced (AIR 10,091) and JEE Mains
              (99.40 percentile) sharpened my algorithmic thinking. Today, I channel that mindset into crafting
              impactful software, from AI resume evaluators to e-commerce platforms.
            </p>

            <p className="text-text-muted leading-relaxed">
              I'm actively looking for{' '}
              <strong className="text-white">internships, collaborations, and freelance opportunities</strong>{' '}
              where I can apply my skills, learn from industry professionals, and contribute to meaningful projects.
            </p>

            {/* Achievement badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {achievements.map(a => (
                <div
                  key={a.title}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl glass"
                  style={{ borderColor: `${a.color}30` }}
                >
                  <span className="text-xl">{a.icon}</span>
                  <div>
                    <p className="text-xs text-text-muted">{a.title}</p>
                    <p className="text-sm font-bold" style={{ color: a.color }}>{a.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="/resume.pdf"
                download="Jayant_Resume.pdf"
                id="about-download-resume-btn"
                className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary transition-colors text-white font-semibold text-sm"
              >
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                id="about-contact-btn"
                className="px-6 py-3 rounded-xl glass border border-white/20 hover:border-primary/40 text-white text-sm font-semibold hover:text-primary transition-all"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(stat => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
