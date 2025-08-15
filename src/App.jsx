import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
       <Education /> 
      <Skills />
            <Projects />
                  <Experience/>

      <Contact />
      <Footer />
    </>
  );
}
