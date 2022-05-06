import Hero from '../Hero/Hero';
import Projects from '../Proyects/Projects';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import React, { useEffect } from 'react';
import './assets/css/app.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".observer")
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle("show", entry.isIntersecting)
          if (entry.isIntersecting) observer.unobserve(entry.target)
        })
      },
      {
        threshold: .4
      }
    )

    sections.forEach(section => {
      observer.observe(section)
    })
  }, []);


  return (
    <>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Footer />

    </>
  );
}

export default App;