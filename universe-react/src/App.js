import './App.css';
import Header from './components/Header';
import MapMission from './components/MissionsSpace';
import UniverseMap from './components/UniversePlanet';
import PlanetsH1 from './components/SectionPlanet';

function App() {
  return (
    <div>
      <Header />      
      <MapMission />
      <PlanetsH1 />
      <UniverseMap />
    </div>
  )   
}

export default App;
