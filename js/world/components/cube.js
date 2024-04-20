import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";

function createCube(){
    const geometry = new BoxGeometry(1, 1, 1);

    const material = new MeshPhongMaterial({ color: 0xffffff });

    const cube = new Mesh(geometry, material);

    return cube;
}

export { createCube };