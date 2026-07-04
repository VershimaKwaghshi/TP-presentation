import * as THREE from 'three';
import { World } from './render/world.js';
import { Director } from './director.js';
import { RhythmEngine } from './rhythm.js';

class App {

    constructor() {

        this.clock = new THREE.Clock();

        this.world = new World();

        this.rhythm = new RhythmEngine();

        this.director = new Director(
            this.world,
            this.rhythm
        );

        this.bindRhythm();

        this.animate();

    }

    bindRhythm() {

        this.rhythm.subscribe((state) => {

            document.body.style.backgroundPosition =
                `${Math.sin(state.time * 0.2) * 30}px ${Math.cos(state.time * 0.15) * 30}px`;

            const glow =
                0.12 + state.pulse * 0.08;

            document.documentElement.style.setProperty(
                "--pulse",
                glow
            );

        });

    }

    animate() {

        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        this.rhythm.update(delta);

        this.director.update(delta);

        this.world.update(delta);

        this.world.render();

    }

}

window.addEventListener("load", () => {

    new App();

});