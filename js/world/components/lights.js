import {
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
} from "three";

function createLights() {
  const ambientLight = new HemisphereLight("white", "dimgray", 0.9);

  const mainLight = new DirectionalLight("white", 2);
  mainLight.position.set(0, 25, 35);
  mainLight.castShadow = true;

  const dimension = 50;

  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 10;
  mainLight.shadow.camera.far = 500;

  mainLight.shadow.camera.left = dimension;
  mainLight.shadow.camera.right = -dimension;
  mainLight.shadow.camera.top = dimension;
  mainLight.shadow.camera.bottom = -dimension;

  const mainLightHelper = new DirectionalLightHelper(mainLight, 5);
  //const mainLightShadowHelper = new CameraHelper(mainLight.shadow.camera);

  return { ambientLight, mainLight, mainLightHelper };
}

export { createLights };
