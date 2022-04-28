import logo from './logo.svg';
import './App.css';
import Nabvar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <Nabvar/>
      <Hero/>
      <ProjectList/>
    </div>
  );
}

export default App;
