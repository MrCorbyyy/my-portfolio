import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div style={{ background: '#f1f5f9' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main page wrapper — white card */}
      <main
        id="main-content"
        role="main"
        style={{
          background: '#ffffff',
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
