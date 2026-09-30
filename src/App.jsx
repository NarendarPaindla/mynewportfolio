import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Training from "./components/Training";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
function App({ Component, pageProps }) {
  return (
    <>
     <Component {...pageProps} />
      <Analytics />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Training />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;