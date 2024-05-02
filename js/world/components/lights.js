import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  const ambientLight = new HemisphereLight("white", "dimgray", "2.5");

  const mainLight = new DirectionalLight("white", 5);

  mainLight.position.set(2, 2, 5);

  return { ambientLight, mainLight };
}

export { createLights };
