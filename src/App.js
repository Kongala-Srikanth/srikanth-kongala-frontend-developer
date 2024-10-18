import OurFeatures from './components/OurFeatures'
import Home from './components/Home'
import About from './components/About';
import Roadmap from './components/Roadmap';
import FaQ from './components/FaQ'
import ExploreOurdApp from './components/ExploreOurdApp'
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className='background-color'>
      <Home />
      <OurFeatures />
      <About />
      <Roadmap />
      <FaQ />
      <ExploreOurdApp />
      <Footer />
    </div>
  );
}

export default App;
