import React from 'react';
import "../../App.css";

function Navigation(props){
    return(
        <div className='nav' style={{background:'lightgrey', height:'50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <button onClick={() => props.selectAppIndex(0)} style={{margin:'0 50px'}}>Home</button>
            <button onClick={() => props.selectAppIndex(1)} style={{margin:'0 50px'}}>Photo of the Day</button>
            <button onClick={() => props.selectAppIndex(2)} style={{margin:'0 50px'}}>Earth Satellite Viewer</button>
            <button onClick={() => props.selectAppIndex(3)} style={{margin:'0 50px'}}>Three</button>
            <button onClick={() => props.selectAppIndex(4)} style={{margin:'0 50px'}}>Box</button>

        </div>
    );
}

export default Navigation;