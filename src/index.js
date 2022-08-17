
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
// import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js'
import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";
import playGame from "./scripts/playGame.js";
// import enterHome from "./scripts/enter_home.js";

window.addEventListener('DOMContentLoaded', () =>{
    window.GameView = GameView;

    // window.canvasEl = document.getElementById("game-canvas");
    // window.ctx = canvasEl.getContext("2d");
    // window.canvas

    const gameOptions = {
        dim: [1100,680]
    }

    const g = new GameView(gameOptions);
    g.titleMenu();

    const h = new Game(gameOptions);
    h.gameDisplay();

    const i = new playGame(gameOptions);
    i.displayPlayGameImg();

  
    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;

    const renderer = new THREE.WebGLRenderer({canvas: housecanvas, alpha: true, antialias: true}); //three.js uses renderer to allocate a space on a webpage where we can add/animate all 3d stuff
    renderer.shadowMap.enabled = true; 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(1100, 680) //set the size of our window 
    renderer.setPixelRatio(window.devicePixelRatio);
    const selectContainer = document.querySelector(".canvas-container");
    selectContainer.appendChild(renderer.domElement); //important



    const scene = new THREE.Scene(); //important

    
    const fieldOfView = 5;
    const aspecRatio = WIDTH/HEIGHT;
    const nearPlane = 0.1;
    const farPlane = 200;

    const camera = new THREE.PerspectiveCamera( //important
        fieldOfView,
        aspecRatio,
        nearPlane,
        farPlane
    );
    // camera.position.z = 800;
    // camera.position.y = 0;
    camera.lookAt(new THREE.Vector3(0,0,0));
    const windowHalfX = WIDTH/2;
    const windowHalfY = HEIGHT/2;
    window.addEventListener('resize', onWindowResize,false);

    scene.add(camera);

 
    function onWindowResize(){
        HEIGHT = 1100;
        WIDTH = 680
        windowHalfX = WIDTH/2;
        windowHalfY = HEIGHT/2;
        renderer.setSize(WIDTH,HEIGHT);
        camera.aspect = WIDTH/HEIGHT;
        camera.updateProjectionMatrix();
    }


    camera.position.set(50,10,50);
    let light = new THREE.HemisphereLight(0xffffff,0xffffff,.5)
    let shadowLight = new THREE.DirectionalLight(0xFFFFFF, .8);
    shadowLight.position.set(200,200,200);
    shadowLight.castShadow = true;
    shadowLight.shadowDarkness = .02;

    let backLight = new THREE.DirectionalLight(0xffffff, .4);
    backLight.position.set(-100,200,50);
    backLight.shadowDarkness = .1;
    backLight.castShadow = true;


    scene.add(light);
    scene.add(backLight);
    scene.add(shadowLight);


    const controls = new OrbitControls(camera,renderer.domElement);
    controls.target.set(0,1,0);
    controls.enableZoom = false;
    // controls.enableDamping = true;
    controls.enablePan = false;
    controls.update;

    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        './src/resources/purple1.jpeg',
        './src/resources/purple1.jpeg',
        './src/resources/purple1.jpeg',
        './src/resources/purple1.jpeg',
        './src/resources/purple1.jpeg',
        './src/resources/purple1.jpeg',
    ]);

    scene.background = texture; 

    // const plane = new THREE.Mesh(
    //     new THREE.PlaneBufferGeometry(50,50),
    //     new THREE.MeshStandardMaterial({color: 0xebe5e7,}));
    
    // plane.rotation.x = -Math.PI/2;
    // plane.position.y = -100;
    // plane.receiveShadow = true;
    // scene.add(plane);

    // const box = new THREE.Mesh(
    //     new THREE.BoxGeometry(2,2,2),
    //     new THREE.MeshStandardMaterial({
    //         color: 0xFFFFFF,
    //     }));

    // box.position.set(0,1,0);
    // box.castShadow = true;
    // box.receiveShadow = true;
    // scene.add(box);

    const mixers = [];
    const _previousRAF = null;



    // function _loadAnimatedModel(){
    //     const loader = new FBXLoader();
    //     loader.setPath('./src/animation/');
    //     loader.load('mixamo_testing_still.fbx',(fbx) => {
    //         fbx.scale.setScalar(0,1);
    //         fbx.traverse( c => {
    //             c.castShadow = true;
    //         });

    //         const params = {
    //             target: fbx,
    //             camera: camera,
    //         }

    //         // const _controls = new BasicCharacterControls(params)
    //         const animateMoving = new FBXLoader();
    //         animateMoving.setPath('./src/animation/');
    //         animateMoving.load('mixamo_testing_moving.fbx', (anim) => {
    //             const m = new THREE.AnimationMixer(fbx);
    //             mixers.push(m);
    //             const idle = m.clipAction(anim.animations[0]);
    //             idle.play();
    //         });
    //         scene.add(fbx);
    //     });
    // }

    function _loadModel(){
        const loader = new GLTFLoader();
        loader.load('./src/models/sunnyUpdated2.glb',(gltf)=>{
            gltf.scene.traverse( c=>{
                c.castShadow = true;
            });
            scene.add(gltf.scene);
     
        });
        
        const loader2 = new GLTFLoader();
        loader2.load('./src/models/Boko_2.glb',(gltf2)=>{
            gltf2.scene.traverse( e=>{
                e.castShadow = true;
            });
            scene.add(gltf2.scene);
        });

    }


    function _RAF(){
        requestAnimationFrame(()=>{
            renderer.render(scene,camera);
            _RAF();
        })
    }

    _RAF();
    // _loadAnimatedModel();
    _loadModel();

    //*****load model****
    

    




    
    // const light = new THREE.DirectionalLight( 0xFFFFFF );
    // const helper = new THREE.DirectionalLightHelper( light, 5 );
    // scene.add( helper ); 

    // renderer.setClearColor(0xA3A3A3);
    // const orbit = new OrbitControls(camera,renderer.domElement);
    // orbit.update();

    // const grid = new THREE.GridHelper(30,30)
    // scene.add(grid);

    // camera.position.set(10,10,10); 
    // renderer.render(scene,camera);


    // const pointLight = new THREE.AmbientLight(0xffffff,1)
    // pointLight.position.x = 10;
    // pointLight.position.y = 10;
    // pointLight.position.z = 10;
    // scene.add(pointLight);
 

    // const gltfLoader = new GLTFLoader();
    // //rendering sunny
    // gltfLoader.load('./src/models/Boko_example3.glb', (gltf) => {
    //     scene.add(gltf.scene);
    // })

    // const boxGeometry = new THREE.BoxGeometry(1,1,1)
    // const material = new THREE.MeshBasicMaterial({color:0xFFFFFF})
    // const mesh = new THREE.Mesh(boxGeometry,material) 

    // camera.position.z = 5

    // function animate(){
    //     requestAnimationFrame(animate) 
    //     renderer.render(scene,camera)
    //     // mesh.rotation.x += 0.01
    //     // mesh.rotation.y += 0.01
    // }

    // animate()


    
    
})
