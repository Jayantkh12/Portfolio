import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillCategories } from '@/data/skills';
import {
  SiCplusplus, SiPython, SiJavascript, SiMysql,
  SiHtml5, SiCss, SiNodedotjs, SiExpress,
  SiGit, SiGithub, SiPostman, SiLinux,
} from 'react-icons/si';
import { FiCode, FiCpu, FiGlobe, FiServer, FiTool, FiDatabase } from 'react-icons/fi';

// Map icon names → components (with fallbacks for anything not in react-icons/si)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  SiCplusplus,
  SiC: SiCplusplus,           // C uses C++ icon as fallback
  SiPython,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss3: SiCss,              // mapped alias
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiJsonwebtokens: FiServer,  // REST APIs
  SiResponsively: FiGlobe,   // Responsive Design
  SiBinarycode: FiCode,       // DSA
  SiCodepen: FiCpu,           // OOP
  SiCisco: FiDatabase,        // Computer Networks
  SiVscode: FiTool,           // VS Code
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const activeCategory = skillCategories.find(c => c.id === activeTab)!;

  return (
    <section id="skills" className="section-padding relative z-10" aria-label="Skills section">
      <div className="container-custom">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I work with to bring ideas to life."
        />

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              id={`skill-tab-${cat.id}`}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-primary text-white glow-primary'
                  : 'glass text-text-muted hover:text-white hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategory.skills.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                      style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
                    >
                      {Icon ? (
                        <Icon size={22} style={{ color: skill.color }} />
                      ) : (
                        <span className="text-lg font-bold" style={{ color: skill.color }}>
                          {skill.name.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <span className="text-text-muted text-xs font-mono">{skill.level}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="skill-bar">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
