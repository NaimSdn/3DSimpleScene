import { Color, Scene } from "three";

function createScene() {
  const scene = new Scene();

  scene.background = new Color(0x895ee6);

  return scene;
}

export { createScene };
