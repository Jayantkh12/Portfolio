import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';

const allCategories = ['All', 'Frontend', 'Backend', 'Fullstack', 'AI/ML'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative z-10" aria-label="Projects section">
      <div className="container-custom">
        <SectionHeader
          title="My Projects"
          subtitle="A collection of projects I've built — from full-stack apps to tools and open-source contributions."
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              id={`project-filter-${cat.toLowerCase()}`}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-primary text-white glow-primary'
                  : 'glass text-text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
                aria-label={`Project: ${project.title}`}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-primary/20 select-none group-hover:scale-110 transition-transform duration-500">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  {/* Category badges */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {project.category.map(cat => (
                      <span key={cat} className="px-2 py-0.5 rounded-md bg-black/50 text-white text-xs backdrop-blur-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 text-text-muted text-xs">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-github-${project.id}`}
                      className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 rounded-xl glass border border-white/10 hover:border-primary/40 text-text-muted hover:text-primary transition-all text-sm font-medium"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub size={15} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-live-${project.id}`}
                      className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all text-sm font-medium"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FiExternalLink size={15} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-16">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};
