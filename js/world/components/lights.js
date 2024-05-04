import {
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
} from "three";

function createLights() {
  const ambientLight = new HemisphereLight("white", "dimgray", 0.9);

  const mainLight = new DirectionalLight("white", 2);
  mainLight.position.set(0, 25, 35);

  const mainLightHelper = new DirectionalLightHelper(mainLight, 5);

  return { ambientLight, mainLight, mainLightHelper };
}

export { createLights };
