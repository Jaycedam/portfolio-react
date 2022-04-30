import './css/main.css';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className='main-container'>
        <ProjectList/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
