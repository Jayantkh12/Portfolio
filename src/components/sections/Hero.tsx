import { motion, type Variants } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { GradientText } from '@/components/ui/GradientText';

const roles = ['Full Stack Developer', 'Competitive Programmer', 'Problem Solver', 'Open Source Enthusiast'];

const socials = [
  { icon: FiGithub, href: 'https://github.com/Jayantkh12', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jayant-choudhary-7b01a5339/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/Jayantkh12', label: 'Twitter' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Jayantchoudhary29', label: 'LeetCode' },
  { icon: SiCodeforces, href: 'https://codeforces.com/profile/Jayantchoudhary29', label: 'Codeforces' },
];

const techBadges = ['C++', 'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'Git'];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Hero = () => {
  const { displayText } = useTypingEffect({ words: roles });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Gradient radial bg */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none z-0" />

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={size}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.03, 1] }}
            transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full border border-primary/10"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <GradientText>Jayant</GradientText>
              <br />
              <GradientText>Choudhary</GradientText>
            </motion.h1>

            {/* Typing effect */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <span className="text-text-muted text-xl font-mono">{'>'}</span>
              <span className="text-primary font-mono text-xl font-semibold min-w-[280px] text-left">
                {displayText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-muted text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
            >
              Computer Science student at <strong className="text-white">Delhi Technological University (DTU)</strong>{' '}
              with a passion for software engineering, web development, and algorithms. I enjoy building scalable
              applications and solving real-world problems through clean, efficient code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => scrollTo('projects')}
                id="hero-view-projects-btn"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-secondary transition-colors text-white font-semibold glow-primary group"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/resume.pdf"
                download="Jayant_Resume.pdf"
                id="hero-download-resume-btn"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/20 hover:border-primary/40 text-white font-semibold hover:text-primary transition-all"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                id="hero-contact-btn"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all font-semibold"
              >
                <FiMail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110 animate-pulse-glow" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              style={{ borderRadius: '50%' }}
            />

            {/* Avatar container */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/40 glow-primary">
              <img
                src="/photo.jpg"
                alt="Jayant Choudhary"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if photo not found
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="font-display text-7xl lg:text-9xl font-bold gradient-text select-none">JC</span>
              </div>
            </div>

            {/* Tech badges orbiting */}
            <div className="absolute inset-0 pointer-events-none">
              {techBadges.map((badge, i) => {
                const angle = (i / techBadges.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const r = 175;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <motion.div
                    key={badge}
                    className="absolute px-2.5 py-1 rounded-full glass text-xs font-mono text-primary border border-primary/30 whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {badge}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Scroll down"
        >
          <span className="text-text-muted text-xs font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
