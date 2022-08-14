import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTF.Loader.js'
import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
document.addEventListener("DOMContentLoaded",() =>{

    const renderer = new THREE.WebGLRenderer(); //three.js uses renderer to allocate a space on a webpage where we can add/animate all 3d stuff
    renderer.setSize(window.innerWidth, window.innerHeight) //important
    renderer.setPixelRatio(devicePixelRatio);
    document.body.appendChild(renderer.domElement); //important

    const scene = new THREE.Scene(); //important
    const camera = new THREE.PerspectiveCamera( //important
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    ) ;

    renderer.setClearColor(0xA3A3A3);
    const orbit = new OrbitControls(camera,renderer.domElement);
    orbit.update();

    const grid = new THREE.GridHelper(30,30)
    scene.add(grid);

    camera.position.set(10,10,10); 
    renderer.render(scene,camera);



    const gltfLoader = new GLTFLoader();
    //rendering sunny
    gltfLoader.load('./sunnyUpdated.glb', (gltf) => {
        scene.add(gltf.scene);
    })

    // const boxGeometry = new THREE.BoxGeometry(1,1,1)
    // const material = new THREE.MeshBasicMaterial({color:0xFFFFFF})
    // const mesh = new THREE.Mesh(boxGeometry,material) 


    camera.position.z = 5

    function animate(){
        requestAnimationFrame(animate) 
        renderer.render(scene,camera)
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01

    }

    animate()

})