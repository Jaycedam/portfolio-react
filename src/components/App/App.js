import Hero from '../Hero/Hero';
import Projects from '../Proyects/Projects';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import React from 'react';
import './assets/css/app.css';

function App() {

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