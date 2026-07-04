import { Engine } from "./engine.js";

class App {

    constructor() {

        this.engine = new Engine();

        this.lastFrame = performance.now();

        this.started = false;

        this.animate();

        document.body.addEventListener("pointerdown", () => {

            if (!this.started) {

                this.started = true;

                this.engine.start();

                return;

            }

            this.engine.next();

        });

    }

    animate() {

        const now = performance.now();

        const delta = (now - this.lastFrame) / 1000;

        this.lastFrame = now;

        this.engine.update(delta);

        requestAnimationFrame(() => this.animate());

    }

}

new App();
