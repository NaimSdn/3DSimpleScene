import {
  MathUtils,
  MeshStandardMaterial,
  SphereGeometry,
  TextureLoader,
  Mesh,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/assets/textures/sphere.png");
  const material = new MeshStandardMaterial({ map: texture });

  return material;
}

function createSphere() {
  const geometry = new SphereGeometry(5,32,16);
  const material = createMaterial();
  const sphere = new Mesh(geometry, material);

  sphere.position.x += 12.5;
  sphere.position.y += 5.5;

  const radiansPerSecond = MathUtils.degToRad(30);

  sphere.tick = (delta) => {
    sphere.rotation.x += radiansPerSecond * delta;
    sphere.rotation.y += radiansPerSecond * delta;
    sphere.rotation.z += radiansPerSecond * delta;
  };

  return sphere;
}

export { createSphere };
