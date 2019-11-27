import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import * as THREE from 'three';

import {cubeFunc} from './ThreeFunc';

export default () => {
    const threeOneDiv = useRef(null);

    const height = 500;
    const width = 700;

    useEffect(() => {
        cubeFunc(threeOneDiv, width, height);
    },[])

    return(
        <div style={{border: '1px solid grey', width: `${width +10}px`, textAlign: 'center'}}>
            <h4 >Three.js test</h4>
            <div ref={threeOneDiv} style={{border: '5px solid orange', height: `${height}px`, width: `${width}px`}} ></div>
        </div>
    )
}