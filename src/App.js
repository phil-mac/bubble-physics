import React, {useState} from 'react';

import Navigation from './components/navigation/Navigation';
import HomePage from './components/homePage/HomePage';
import PhotoOfDayApp from './components/photoOfDayApp/PhotoOfDayApp';
import EarthDataApp from './components/earthDataApp/EarthDataApp';
import ThreeOne from './components/three/ThreeOne';
import Box from './components/box/Box';



import './App.css';

function App() {
  const [appIndex, setAppIndex] = useState(4);

  return (
    <div className="App">
      <Navigation selectAppIndex={setAppIndex}/>
      {(appIndex === 0 && <HomePage />)}
      {(appIndex === 1 && <PhotoOfDayApp />)}
      {(appIndex === 2 && <EarthDataApp />)}
      {(appIndex === 3 && <ThreeOne />)}
      {(appIndex === 4 && <Box />)}

    </div>
  );
}

export default App;
