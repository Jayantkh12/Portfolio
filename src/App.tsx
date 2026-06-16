import { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { GitHubStats } from '@/components/sections/GitHubStats';
import { CodingProfiles } from '@/components/sections/CodingProfiles';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Testimonials } from '@/components/sections/Testimonials';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* Global overlays */}
          <CustomCursor />
          <ScrollProgressBar />
          <ParticleBackground />

          {/* Layout */}
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <GitHubStats />
            <CodingProfiles />
            <Experience />
            <Certifications />
            <Testimonials />
            <Resume />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
