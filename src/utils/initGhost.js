import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

let camera, scene, renderer;
//initialization for the loader 
const loader = new GLTFLoader();

export function init() {
    //This initialization for the animation 3d
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 2;
    camera.rotation.z = 2;

    //make the scene for the animation 3d
    scene = new THREE.Scene();

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    //this function load the file in the DOM
    loader.load("/models/simple_ghost/scene.gltf", (gltf) => {
        let model = gltf.scene
        model.scale.set(.1, .1, .1)

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        scene.add(mesh);
        //Define an position into camara
        gsap.to(camera.position, {
            z: 1,
            duration: 4,
            ease: "back.out(1.9)"
        })
        gsap.to(camera.rotation, {
            z: 0,
            duration: 1
        })

        gsap.to(model.scale, {
            delay: 1,
            duration: 1,
            x: 5,
            y: 5,
            z: 5
        })

        //Add the scene to the DOM
        scene.add(model)
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