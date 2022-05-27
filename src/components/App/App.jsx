import Hero from '../Hero/Hero';
import Projects from '../Proyects/Projects';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './app.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // get and apply system theme or override from user in local storage
    var storedTheme = localStorage.getItem('theme')
      || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
  }, [])
  
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}

export default App;