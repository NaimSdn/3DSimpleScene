import { BoxGeometry, MathUtils, Mesh, MeshStandardMaterial } from "three";



function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);

  const material = new MeshStandardMaterial({ color: "green" });

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
