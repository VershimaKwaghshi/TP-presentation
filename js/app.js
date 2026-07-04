import * as THREE from 'three';
import { World } from './render/world.js';
import { Director } from './director.js';
import { RhythmEngine } from './rhythm.js';

class App {
    constructor() {
        this.world = new World();
        this.rhythm = new RhythmEngine();
        this.director = new Director(this.world, this.rhythm);
        this.clock = new THREE.Clock();

        this.init();
    }

    init() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const delta = this.clock.getDelta();
        
        this.rhythm.update(delta);
        this.world.update(delta);
        this.director.update(delta);
        
        this.world.render();
    }
}

new App();

