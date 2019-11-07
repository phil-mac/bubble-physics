import React, {useState, useEffect} from "react";
import PhotoCard from './PhotoCard';
import Controls from './Controls';

import "../../App.css";

function PhotoApp() {
  const [dateState, setDateState] = useState('2019-11-6');
  const [photoState, setPhotosState] = useState({});

  useEffect(() =>{
    const fetchPhotos = () =>
       fetch(`https://api.nasa.gov/planetary/apod?api_key=H2cw3TrncbbEQ1QTS8rowEz3X0xnhhzqdQIWu15i&date=${dateState}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPhotosState(data);
        })
        
    fetchPhotos();
  }, [dateState])

  return (
    <div className="PhotoApp">
      <h1>Astronomy Photo of the Day</h1>
      <Controls setDate={setDateState}/>
      <PhotoCard photoData={photoState}/>
    </div>
  );
}

export default PhotoApp;
