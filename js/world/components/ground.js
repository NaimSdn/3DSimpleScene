import {
  TextureLoader,
  PlaneGeometry,
  Mesh,
  MeshStandardMaterial,
  DoubleSide,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/assets/textures/ground.jpg");
  const material = new MeshStandardMaterial({ map: texture, side: DoubleSide });

  return material;
}

function createGround() {
  const geometry = new PlaneGeometry(100, 100);
  const material = createMaterial();
  const ground = new Mesh(geometry, material);

  ground.rotation.x += Math.PI / 2;

  return ground;
}

export { createGround };
