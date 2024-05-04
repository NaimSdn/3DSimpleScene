import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

function createControls(camera, canvas) {
  const controls = new PointerLockControls(camera, canvas);

  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let moveUp = false;
  let moveDown = false;
  let moveSpeed = 0.2;

  addEventListener("keydown", (event) => {
    if (!controls.isLocked) {
      controls.lock();
    }
    switch (event.code) {
      case "KeyW":
        moveForward = true;
        break;
      case "KeyS":
        moveBackward = true;
        break;
      case "KeyA":
        moveLeft = true;
        break;
      case "KeyD":
        moveRight = true;
        break;
      case "Space":
        moveUp = true;
        break;
      case "ShiftLeft":
        moveDown = true;
        break;
    }
  });

  addEventListener("keyup", (event) => {
    switch (event.code) {
      case "KeyW":
        moveForward = false;
        break;
      case "KeyS":
        moveBackward = false;
        break;
      case "KeyA":
        moveLeft = false;
        break;
      case "KeyD":
        moveRight = false;
        break;
      case "Space":
        moveUp = false;
        break;
      case "ShiftLeft":
        moveDown = false;
        break;
    }
  });

  controls.tick = (delta) => {
    if (moveForward) {
      controls.moveForward(moveSpeed);
    }

    if (moveBackward) {
      controls.moveForward(-moveSpeed);
    }

    if (moveLeft) {
      controls.moveRight(-moveSpeed);
    }

    if (moveRight) {
      controls.moveRight(moveSpeed);
    }

    if (moveUp) {
      controls.getObject().position.y += moveSpeed;
    }

    if (moveDown) {
      controls.getObject().position.y -= moveSpeed;
    }
  };

  return controls;
}

export { createControls };
