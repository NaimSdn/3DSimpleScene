import { GUI } from "dat.gui";

const gui = new GUI({ autoPlace: false });
document.getElementById('gui').appendChild(gui.domElement);

function createGui(mainLight, controls, cube, sphere, ground) {
  createMainLightGui(mainLight);
  createControlsGui(controls);
  createCubeGui(cube);
  createSphereGui(sphere);
  createGroundGui(ground);

  return gui;
}

function createMainLightGui(mainLight){
  const mainLightFolder = gui.addFolder('Main light');
}

function createControlsGui(controls){
  const controlsFolder = gui.addFolder('Controls');
}

function createCubeGui(cube) {
  const cubeFolder = gui.addFolder('Cube');

  const rotationFolder = cubeFolder.addFolder("Rotation");
  rotationFolder.add(cube.rotation, "x", 0, Math.PI, 0.1).name("Rotation X");
  rotationFolder.add(cube.rotation, "y", 0, Math.PI, 0.1).name("Rotation Y");
  rotationFolder.add(cube.rotation, "z", 0, Math.PI, 0.1).name("Rotation Z");

  const positionFolder = cubeFolder.addFolder("Position");
  positionFolder.add(cube.position, "x", -20, 20, 0.1).name("Position X");
  positionFolder.add(cube.position, "y", -20, 20, 0.1).name("Position Y");
  positionFolder.add(cube.position, "z", -20, 20, 0.1).name("Position Z");
}

function createSphereGui(sphere){
  const sphereFolder = gui.addFolder('Sphere');

  const rotationFolder = sphereFolder.addFolder("Rotation");
  rotationFolder.add(sphere.rotation, "x", 0, Math.PI, 0.1).name("Rotation X");
  rotationFolder.add(sphere.rotation, "y", 0, Math.PI, 0.1).name("Rotation Y");
  rotationFolder.add(sphere.rotation, "z", 0, Math.PI, 0.1).name("Rotation Z");

  const positionFolder = sphereFolder.addFolder("Position");
  positionFolder.add(sphere.position, "x", -20, 20, 0.1).name("Position X");
  positionFolder.add(sphere.position, "y", -20, 20, 0.1).name("Position Y");
  positionFolder.add(sphere.position, "z", -20, 20, 0.1).name("Position Z");
}

function createGroundGui(ground){
  const groundFolder = gui.addFolder('Ground');
}

export { createGui };
