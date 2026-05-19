import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="grid-bg min-h-screen">
        <div className="noise-overlay" aria-hidden />
        <div className="site-content">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
