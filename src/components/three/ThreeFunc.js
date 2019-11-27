import * as THREE from 'three';
export function cubeFunc (parentComp, width, height){

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 20, width/height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( width, height );


    // const threeOneDiv = useRef();

    parentComp.current.appendChild( renderer.domElement );

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    const pointLight =
    new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);

    camera.position.z = 50;

    // --------

    const geometry = new THREE.BoxGeometry( 1, 1, 1);
    const material = new THREE.MeshLambertMaterial( { color: 0x00ffff } );

    const cubeArray = [];

    let index = 0;

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            for (let k = 0; k < 2; k++){
                index++;
                cubeArray[index] = new THREE.Mesh( geometry, material );
                cubeArray[index].position.x = j*2 - (4.5*2) + 8*k;
                cubeArray[index].position.y = i*2 - 5 + 8*k;
                cubeArray[index].position.z = - k*30;
                scene.add( cubeArray[index] );
                cubeArray[index].addEventListener("click", () => console.log('clicked a cube'))
            }
        }
    }

    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    
    
    const animate = function () {
        requestAnimationFrame( animate );

        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        cubeArray.forEach(cube => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        })

        renderer.render( scene, camera );
    };
    animate();

    // const step = .5;

    // window.addEventListener('keydown', e => {
    //     if (e.code === 'KeyW') cube.position.y += step;
    //     if (e.code === 'KeyS') cube.position.y -= step;
    //     if (e.code === 'KeyA') cube.position.x -= step;
    //     if (e.code === 'KeyD') cube.position.x += step;
    // })

    // parentComp.current.style.width = '600px';
}