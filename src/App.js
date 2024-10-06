import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cities from './componenets/Cities/Cities';
import ClimateStories from "./componenets/ClimateStories/ClimateStories";
import Header from "./componenets/Header/Header";
import HeroSection from "./componenets/HeroSection/HeroSection";
import MeltingArctic from './componenets/MeltingArtic/MeltingArtic';
import NewYork from './componenets/Nyc/Nyc';
import NYCPolution from './componenets/Nyc/Pollution';
import SeaLevel from './componenets/SeaLevels/SeaLevels';
import Wildfires from './componenets/wildfire/wilfdfire';
import Bankong from './componenets/bankong/bankong'
import BankongPollution from './componenets/bankong/Pollution'
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={
            <>
              <HeroSection />
              <Cities/>
              <ClimateStories/>
            </>
          }
          />
          <Route path="/SeaLevel" element={<SeaLevel/>} />
          <Route path="/wildfires" element={<Wildfires/>} />
          <Route path="/melting-arctic" element={<MeltingArctic/>} />
          <Route path="/NewYork" element={<NewYork/>} />
          <Route path="/NewYork-Pollution" element={<NYCPolution/>} />
          <Route path="/Bangkok" element={<Bankong/>} />
          <Route path="/Bangkok-Pollution" element={<BankongPollution/>} />


          <Route path="/rising-sea-levels" element={ClimateStories} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
