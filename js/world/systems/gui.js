import { GUI } from "dat.gui";
import { BoxGeometry, SphereGeometry, PlaneGeometry } from "three";
import { updateMoveSpeed, controlValues } from "./controls";

const gui = new GUI({ autoPlace: false });
document.getElementById("gui").appendChild(gui.domElement);

function createGui(ambientLight, mainLight, controls, cube, sphere, ground) {
  createLightGui(ambientLight, mainLight);
  createControlsGui(controls);
  createCubeGui(cube);
  createSphereGui(sphere);
  createGroundGui(ground);

  return gui;
}

function createLightGui(ambientLight, mainLight) {
  const lightFolder = gui.addFolder("Lights");

  const mainLightFolder = lightFolder.addFolder("Main Light");

  const propertyMainLightFolder = mainLightFolder.addFolder("Property");
  propertyMainLightFolder
    .add(mainLight, "intensity", 0, 5, 0.1)
    .name("Intensity");

  const positionFolder = mainLightFolder.addFolder("Position");
  positionFolder
    .add(mainLight.position, "x", -100, 100, 0.1)
    .name("Position X");
  positionFolder.add(mainLight.position, "y", -50, 50, 0.1).name("Position Y");
  positionFolder
    .add(mainLight.position, "z", -100, 100, 0.1)
    .name("Position Z");

  const ambientLightFolder = lightFolder.addFolder("Ambient Light");

  const propertyAmbientLightFolder = ambientLightFolder.addFolder("Property");
  propertyAmbientLightFolder
    .add(ambientLight, "intensity", 0, 2, 0.05)
    .name("Intensity");
}

function createControlsGui(controls) {
  const controlsFolder = gui.addFolder("Controls");

  const propertyFolder = controlsFolder.addFolder("Property");
  propertyFolder
    .add(controlValues, "moveSpeed", 0, 2, 0.01)
    .name("Move Speed")
    .onChange(updateMoveSpeed);
}

function createCubeGui(cube) {
  const cubeFolder = gui.addFolder("Cube");

  const propertyFolder = cubeFolder.addFolder("Property");
  propertyFolder.add(cube.material, "wireframe").name("Wireframe");
  propertyFolder
    .add(cube.geometry.parameters, "width", 0, 20, 0.1)
    .name("Width")
    .onChange(function (value) {
      cube.geometry.parameters.width = value;
      cube.geometry = new BoxGeometry(
        value,
        cube.geometry.parameters.height,
        cube.geometry.parameters.depth,
        cube.geometry.parameters.widthSegments,
        cube.geometry.parameters.heightSegments,
        cube.geometry.parameters.depthSegments
      );
    });

  propertyFolder
    .add(cube.geometry.parameters, "height", 0, 20, 0.1)
    .name("Height")
    .onChange(function (value) {
      cube.geometry.parameters.height = value;
      cube.geometry = new BoxGeometry(
        cube.geometry.parameters.width,
        value,
        cube.geometry.parameters.depth,
        cube.geometry.parameters.widthSegments,
        cube.geometry.parameters.heightSegments,
        cube.geometry.parameters.depthSegments
      );
    });

  propertyFolder
    .add(cube.geometry.parameters, "depth", 0, 20, 0.1)
    .name("Depth")
    .onChange(function (value) {
      cube.geometry.parameters.depth = value;
      cube.geometry = new BoxGeometry(
        cube.geometry.parameters.width,
        cube.geometry.parameters.height,
        value,
        cube.geometry.parameters.widthSegments,
        cube.geometry.parameters.heightSegments,
        cube.geometry.parameters.depthSegments
      );
    });

  propertyFolder
    .add(cube.geometry.parameters, "widthSegments", 0, 20, 0.1)
    .name("Width Segments")
    .onChange(function (value) {
      cube.geometry.parameters.widthSegments = value;
      cube.geometry = new BoxGeometry(
        cube.geometry.parameters.width,
        cube.geometry.parameters.height,
        cube.geometry.parameters.depth,
        value,
        cube.geometry.parameters.heightSegments,
        cube.geometry.parameters.depthSegments
      );
    });

  propertyFolder
    .add(cube.geometry.parameters, "heightSegments", 0, 20, 0.1)
    .name("Height Segments")
    .onChange(function (value) {
      cube.geometry.parameters.heightSegments = value;
      cube.geometry = new BoxGeometry(
        cube.geometry.parameters.width,
        cube.geometry.parameters.height,
        cube.geometry.parameters.depth,
        cube.geometry.parameters.widthSegments,
        value,
        cube.geometry.parameters.depthSegments
      );
    });

  propertyFolder
    .add(cube.geometry.parameters, "depthSegments", 0, 20, 0.1)
    .name("Depth Segments")
    .onChange(function (value) {
      cube.geometry.parameters.depthSegments = value;
      cube.geometry = new BoxGeometry(
        cube.geometry.parameters.width,
        cube.geometry.parameters.height,
        cube.geometry.parameters.depth,
        cube.geometry.parameters.widthSegments,
        cube.geometry.parameters.heightSegments,
        value
      );
    });

  const rotationFolder = cubeFolder.addFolder("Rotation");
  rotationFolder.add(cube.rotation, "x", 0, Math.PI, 0.1).name("Rotation X");
  rotationFolder.add(cube.rotation, "y", 0, Math.PI, 0.1).name("Rotation Y");
  rotationFolder.add(cube.rotation, "z", 0, Math.PI, 0.1).name("Rotation Z");

  const positionFolder = cubeFolder.addFolder("Position");
  positionFolder.add(cube.position, "x", -20, 20, 0.1).name("Position X");
  positionFolder.add(cube.position, "y", -20, 20, 0.1).name("Position Y");
  positionFolder.add(cube.position, "z", -20, 20, 0.1).name("Position Z");
}

function createSphereGui(sphere) {
  const sphereFolder = gui.addFolder("Sphere");

  const propertyFolder = sphereFolder.addFolder("Property");
  propertyFolder.add(sphere.material, "wireframe").name("Wireframe");
  propertyFolder
    .add(sphere.geometry.parameters, "radius", 0, 20, 0.1)
    .name("Radius")
    .onChange(function (value) {
      sphere.geometry.parameters.radius = value;
      sphere.geometry = new SphereGeometry(
        value,
        sphere.geometry.parameters.widthSegments,
        sphere.geometry.parameters.heightSegments
      );
    });

  propertyFolder
    .add(sphere.geometry.parameters, "widthSegments", 0, 50, 0.1)
    .name("Width Segments")
    .onChange(function (value) {
      sphere.geometry.parameters.widthSegments = value;
      sphere.geometry = new SphereGeometry(
        sphere.geometry.parameters.radius,
        value,
        sphere.geometry.parameters.heightSegments
      );
    });

  propertyFolder
    .add(sphere.geometry.parameters, "heightSegments", 0, 50, 0.1)
    .name("Height Segments")
    .onChange(function (value) {
      sphere.geometry.parameters.heightSegments = value;
      sphere.geometry = new SphereGeometry(
        sphere.geometry.parameters.radius,
        sphere.geometry.parameters.widthSegments,
        value
      );
    });

  const rotationFolder = sphereFolder.addFolder("Rotation");
  rotationFolder.add(sphere.rotation, "x", 0, Math.PI, 0.1).name("Rotation X");
  rotationFolder.add(sphere.rotation, "y", 0, Math.PI, 0.1).name("Rotation Y");
  rotationFolder.add(sphere.rotation, "z", 0, Math.PI, 0.1).name("Rotation Z");

  const positionFolder = sphereFolder.addFolder("Position");
  positionFolder.add(sphere.position, "x", -20, 20, 0.1).name("Position X");
  positionFolder.add(sphere.position, "y", -20, 20, 0.1).name("Position Y");
  positionFolder.add(sphere.position, "z", -20, 20, 0.1).name("Position Z");
}

function createGroundGui(ground) {
  const groundFolder = gui.addFolder("Ground");

  const propertyFolder = groundFolder.addFolder("Property");
  propertyFolder.add(ground.material, "wireframe").name("Wireframe");

  propertyFolder
    .add(ground.geometry.parameters, "width", 0, 200, 0.1)
    .name("Width")
    .onChange(function (value) {
      ground.geometry.parameters.width = value;
      ground.geometry = new PlaneGeometry(
        value,
        ground.geometry.parameters.height,
        ground.geometry.parameters.widthSegments,
        ground.geometry.parameters.heightSegments
      );
    });

  propertyFolder
    .add(ground.geometry.parameters, "height", 0, 200, 0.1)
    .name("Height")
    .onChange(function (value) {
      ground.geometry.parameters.height = value;
      ground.geometry = new PlaneGeometry(
        ground.geometry.parameters.width,
        value,
        ground.geometry.parameters.widthSegments,
        ground.geometry.parameters.heightSegments
      );
    });

  propertyFolder
    .add(ground.geometry.parameters, "widthSegments", 0, 20, 0.1)
    .name("Width Segments")
    .onChange(function (value) {
      ground.geometry.parameters.widthSegments = value;
      ground.geometry = new PlaneGeometry(
        ground.geometry.parameters.width,
        ground.geometry.parameters.height,
        value,
        ground.geometry.parameters.heightSegments
      );
    });

  propertyFolder
    .add(ground.geometry.parameters, "heightSegments", 0, 20, 0.1)
    .name("Height Segments")
    .onChange(function (value) {
      ground.geometry.parameters.heightSegments = value;
      ground.geometry = new PlaneGeometry(
        ground.geometry.parameters.width,
        ground.geometry.parameters.height,
        ground.geometry.parameters.widthSegments,
        value
      );
    });
}

export { createGui };
