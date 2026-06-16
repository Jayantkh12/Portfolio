import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp, FiMail } from 'react-icons/fi';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const socials = [
  { icon: FiGithub, href: 'https://github.com/Jayantkh12', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jayant-choudhary-7b01a5339/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/Jayantkh12', label: 'Twitter' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Jayantchoudhary29', label: 'LeetCode' },
  { icon: SiCodeforces, href: 'https://codeforces.com/profile/Jayantchoudhary29', label: 'Codeforces' },
  { icon: FiMail, href: 'mailto:jayantkumar2901@gmail.com', label: 'Email' },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-surface-1/50 backdrop-blur-sm">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                <span className="text-white font-bold text-sm">JC</span>
              </div>
              <span className="font-display font-bold text-xl gradient-text">Jayant Choudhary</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Full Stack Developer passionate about building beautiful, performant web experiences and solving complex engineering challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-text-muted text-sm mb-4">
              Open to freelance opportunities, collaborations, and full-time roles.
            </p>
            <a
              href="mailto:jayantkumar2901@gmail.com"
              id="footer-email-link"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all"
            >
              <FiMail size={14} />
              jayantkumar2901@gmail.com
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Jayant Choudhary. Built with{' '}
            <span className="text-primary">♥</span> using React & TypeScript.
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Back to top"
            id="back-to-top-btn"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
