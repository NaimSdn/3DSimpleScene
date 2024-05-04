import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(70, 1, 0.1, 100);

  camera.position.set(0, 15, 15);

  return camera;
}

export { createCamera };
