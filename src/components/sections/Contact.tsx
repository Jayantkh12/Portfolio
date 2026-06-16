import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'jayantkumar2901@gmail.com', href: 'mailto:jayantkumar2901@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 78500 78064', href: 'tel:+917850078064' },
  { icon: FiMapPin, label: 'Location', value: 'Delhi Technological University, Delhi 🇮🇳', href: '#' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/Jayantkh12', label: 'GitHub', color: '#ffffff' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jayant-choudhary-7b01a5339/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FiTwitter, href: 'https://twitter.com/Jayantkh12', label: 'Twitter', color: '#1DA1F2' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/Jayantchoudhary29', label: 'LeetCode', color: '#FFA116' },
  { icon: SiCodeforces, href: 'https://codeforces.com/profile/Jayantchoudhary29', label: 'Codeforces', color: '#1F8ACB' },
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setSubmitError(false);
    try {
      const response = await fetch("https://formsubmit.co/ajax/jayantkumar2901@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `New Portfolio Message: ${data.subject}`,
          message: data.message,
        })
      });
      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    }
  };

  return (
    <section id="contact" className="section-padding relative z-10" aria-label="Contact section">
      <div className="container-custom">
        <SectionHeader
          title="Get In Touch"
          subtitle="Open to internships, collaborations, and freelance opportunities. Let's connect!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Let's build something <span className="gradient-text">amazing</span> together
              </h3>
              <p className="text-text-muted leading-relaxed">
                I'm a Computer Science student at DTU, actively looking for internships,
                project collaborations, and freelance work. Whether you have a project idea
                or just want to connect — feel free to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/40 transition-all group"
                  id={`contact-${label.toLowerCase()}-link`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-text-muted text-xs">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-text-muted text-sm mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-muted hover:text-primary transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.name ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
                  })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.email ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Internship Opportunity / Collaboration"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.subject ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters required' } })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="contact-submit-btn"
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition-all ${submitted ? 'bg-green-600' : 'bg-primary hover:bg-secondary glow-primary'} disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                ) : submitted ? (
                  <><FiCheck size={18} />Message Sent!</>
                ) : (
                  <><FiSend size={18} />Send Message</>
                )}
              </motion.button>
              {submitError && (
                <p className="text-red-400 text-xs text-center mt-2">
                  Failed to send message. Please try again or email me directly at jayantkumar2901@gmail.com
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
