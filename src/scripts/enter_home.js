// import Menu from "./menu.js";
// import GameView from "./game_view.js";

// import * as THREE from 'three'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
// import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// function EnterHome () {

//     const renderer = new THREE.WebGLRenderer({canvas: house-canvas}); //three.js uses renderer to allocate a space on a webpage where we can add/animate all 3d stuff
//     renderer.setSize(1100, 680) //important
//     renderer.setPixelRatio(devicePixelRatio);
//     document.body.appendChild(renderer.domElement); //important

//     const scene = new THREE.Scene(); //important
//     const camera = new THREE.PerspectiveCamera( //important
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//     ) ;

//     // const light = new THREE.DirectionalLight( 0xFFFFFF );
//     // const helper = new THREE.DirectionalLightHelper( light, 5 );
//     // scene.add( helper ); 

//     renderer.setClearColor(0xA3A3A3);
//     const orbit = new OrbitControls(camera,renderer.domElement);
//     orbit.update();

//     const grid = new THREE.GridHelper(30,30)
//     scene.add(grid);

//     camera.position.set(10,10,10); 
//     renderer.render(scene,camera);


//     const pointLight = new THREE.AmbientLight(0xffffff,1)
//     pointLight.position.x = 10;
//     pointLight.position.y = 10;
//     pointLight.position.z = 10;
//     scene.add(pointLight);
 

//     const gltfLoader = new GLTFLoader();
//     //rendering sunny
//     gltfLoader.load('./src/models/sunnyUpdated2.glb', (gltf) => {
//         scene.add(gltf.scene);
//     })

//     // const boxGeometry = new THREE.BoxGeometry(1,1,1)
//     // const material = new THREE.MeshBasicMaterial({color:0xFFFFFF})
//     // const mesh = new THREE.Mesh(boxGeometry,material) 

//     camera.position.z = 5

//     function animate(){
//         requestAnimationFrame(animate) 
//         renderer.render(scene,camera)
//         // mesh.rotation.x += 0.01
//         // mesh.rotation.y += 0.01
//     }

//     animate()



// }

// module.exports = EnterHome;
