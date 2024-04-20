import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createLight } from "./components/light.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";

let camera;
let scene;
let renderer;

let cube;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    cube = createCube();
    scene.add(cube);

    const light = createLight();
    scene.add(light);
  }

  render() {

    const loop = () =>{
      requestAnimationFrame(loop);
      cube.rotation.y += Math.random()/100;
      cube.rotation.x += Math.random()/100;
      renderer.render(scene, camera);
    }

    loop();
  }
}

export { World };
