import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createGround } from "./components/ground.js";
import { createSphere } from "./components/sphere.js";
import { createGui } from "./systems/gui.js";

let camera;
let scene;
let renderer;
let loop;

let controls;

let ground;
let cube;
let sphere;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    controls = createControls(camera, renderer.domElement);

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    ground = createGround();
    cube = createCube();
    sphere = createSphere();

    let { ambientLight, mainLight, mainLightHelper } = createLights();
    loop.updatables.push(controls);

    const gui = createGui(mainLight, controls, cube, sphere, ground);

    scene.add(ambientLight, mainLight, mainLightHelper, ground, cube, sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
