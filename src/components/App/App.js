import Hero from '../Hero/Hero';
import Projects from '../Proyects/Projects';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import React from 'react';
import './css/app.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;