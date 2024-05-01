import { DirectionalLight } from "three";

function createLight() {
  const light = new DirectionalLight("white", 8);

  light.position.set(0, 0, 2);

  return light;
}

export { createLight };
