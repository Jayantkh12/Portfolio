import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { certifications } from '@/data/certifications';

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative z-10" aria-label="Certifications section">
      <div className="container-custom">
        <SectionHeader
          title="Certifications"
          subtitle="Professional certifications validating my expertise in various technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 group cursor-pointer"
            >
              {/* Logo + issuer */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl text-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  {cert.logo}
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium">{cert.issuer}</p>
                  <p className="text-text-muted text-xs">{cert.date}</p>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-display text-base font-bold text-white mb-3 leading-snug group-hover:transition-colors"
                style={{ color: undefined }}
              >
                {cert.title}
              </h3>

              {/* Credential */}
              <p className="text-text-muted text-xs font-mono mb-5">
                ID: {cert.credentialId}
              </p>

              {/* View button */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`cert-view-${cert.id}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: `${cert.color}10`,
                  border: `1px solid ${cert.color}30`,
                  color: cert.color,
                }}
              >
                <FiExternalLink size={14} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
