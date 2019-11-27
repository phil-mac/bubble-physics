import React, {useState, useEffect} from "react";
import PhotoCard from '../photoOfDayApp/PhotoCard';

import "../../App.css";
import ThreeOne from '../three/ThreeOne'

function HomePage() {
  const [photoState, setPhotosState] = useState({});

  useEffect(() =>{
    const fetchPhotos = () =>
       fetch(`https://api.nasa.gov/planetary/apod?api_key=H2cw3TrncbbEQ1QTS8rowEz3X0xnhhzqdQIWu15i`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPhotosState(data);
        })
        
    fetchPhotos();
  }, [])

  return (
    <div style={{margin:'30px'}}>
        <h1>Welcome to Bubble Physics, a fun place to learn physics. There's not much here yet...</h1>
        <div className="PhotoApp" style={{width:'15%', margin:'0 0 0 84%', background:'lightgrey'}}>
            <h1>NASA's Astronomy Photo of the Day</h1>
            <PhotoCard photoData={photoState}/>
        </div>
        <ThreeOne />

    </div>
    
  );
}

export default HomePage;
