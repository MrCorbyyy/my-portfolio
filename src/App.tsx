import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        {/* Navigation */}
        <Navbar />

        {/* Main page wrapper */}
        <main
          id="main-content"
          role="main"
          className="main-content"
        >
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
