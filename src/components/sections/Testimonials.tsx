import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, [current, paused]);

  return (
    <section id="testimonials" className="section-padding relative z-10" aria-label="Testimonials section">
      <div className="container-custom">
        <SectionHeader
          title="Testimonials"
          subtitle="What colleagues, mentors, and clients say about working with me."
        />

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Visible cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map(offset => {
              const idx = (current + offset) % testimonials.length;
              const testimonial = testimonials[idx];
              return (
                <motion.div
                  key={`${current}-${offset}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                  className={`glass rounded-2xl p-6 ${offset === 0 ? 'border border-primary/30' : ''}`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FiStar key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-text-muted text-sm leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-text-muted text-xs">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              id={`testimonial-dot-${i}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-8' : 'bg-white/20 w-2'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
