import { PointLight } from "three";

function createLight(){
    const light = new PointLight(0xeeeeee);

    light.position.set(0, 0, 2);

    return light;

}

export { createLight };