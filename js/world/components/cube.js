import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load("/assets/textures/uv-test-bw.jpg");

  const material = new MeshStandardMaterial({ map: texture });
  return material;
}

function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);

  const material = createMaterial();

  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
