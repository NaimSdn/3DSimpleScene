import { World } from "./world/World.js";

function main() {
  const container = document.querySelector("#canvas");

  const world = new World(container);

  world.start();
}

main();
