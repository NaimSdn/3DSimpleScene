import { WebGLRenderer } from "three";

window.canvas.width = innerWidth;
window.canvas.height = innerHeight;
window.innerWidth = innerWidth;
window.innerHeight = innerHeight;

function createRenderer() {
  const renderer = new WebGLRenderer({ canvas });

  return renderer;
}

export { createRenderer };
