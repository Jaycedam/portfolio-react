import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import React, { useEffect } from 'react';
import './css/main.css';

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
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;