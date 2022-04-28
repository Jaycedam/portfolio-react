import Nabvar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App" id='home'>
      <Nabvar/>
      <Hero/>
      <About/>
      <ProjectList/>
      <Footer/>
    </div>
  );
}

export default App;
