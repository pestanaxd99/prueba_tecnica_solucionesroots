import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer;
//initialization for the loader 
const loader = new GLTFLoader();

export function init() {

    //This initialization for the animation 3d
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 2;
    camera.position.y = 0.52;
    camera.position.x = 0;
    camera.rotation.z = 0;

    //make the scene for the animation 3d
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    //this function load the file in the DOM
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 20, 10);
    scene.add(dirLight);

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
    mesh.rotation.x = - Math.PI / 2;
    scene.add(mesh);

    loader.load("/models/robot_expressive/RobotExpressive.glb", (gltf) => {
        let model = gltf.scene
        model.scale.set(.1, .1, .1);
         //Add the scene to the DOM
        scene.add(model);    
    })
    
    //RENDER THE SCENE IN THE DOM
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    renderer.setClearColor(0x272727, 1);
    document.body.appendChild(renderer.domElement);


    //ASSIGN A WIDHT AUTOMATICALLI ABOUT THE SIZE OF THE WINDOW
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function animation() {
    renderer.render(scene, camera);
}
