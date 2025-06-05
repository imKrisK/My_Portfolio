import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section */}
      <div className="relative overflow-hidden">
        <Projects />
      </div>
      
      {/* Skills Section */}
      <div className="relative overflow-hidden">
        <Skills />
      </div>
      
      {/* About Section */}
      <div className="relative overflow-hidden">
        <About />
      </div>
      
      {/* Contact Section */}
      <div className="relative">
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}