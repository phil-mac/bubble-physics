import React, {useState} from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation/Navigation';
import HomePage from './components/homePage/HomePage';

import PhotoOfDayApp from './components/photoOfDayApp/PhotoOfDayApp';
import EarthDataApp from './components/earthDataApp/EarthDataApp';


import './App.css';

function App() {
  const [appIndex, setAppIndex] = useState(0);

  return (
    <div className="App">
      <Navigation selectAppIndex={setAppIndex}/>
      {(appIndex === 0 && <HomePage />)}
      {(appIndex === 1 && <PhotoOfDayApp />)}
      {(appIndex === 2 && <EarthDataApp />)}
    </div>
  );
}

export default App;
