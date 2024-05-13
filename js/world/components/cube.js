import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/assets/textures/cube.jpg");
  const material = new MeshStandardMaterial({ map: texture });

  return material;
}

function createCube() {
  const geometry = new BoxGeometry(5, 5, 5);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  cube.position.x -= 12.5;
  cube.position.y += 5;

  cube.castShadow = true;
  cube.receiveShadow = false;

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
