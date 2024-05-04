import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(70, 1, 0.1, 200);

  camera.position.set(0, 25, 50);
  camera.rotation.x -= 0.5;

  return camera;
}

export { createCamera };
