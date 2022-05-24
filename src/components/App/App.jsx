import { useState } from 'react';
import Hero from '../Hero/Hero';
import Projects from '../Proyects/Projects';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import './app.css';
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(() => {
    return true;
  });

  return (
    <AnimatePresence>
      {
        loading ?
            <Loader key={loading} setLoading={setLoading} />
          :
          <>
            <Navbar />
            <Hero />
            <Projects />
            <Footer />
          </>
      }
    </AnimatePresence>
  )
}

export default App;