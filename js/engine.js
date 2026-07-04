import { Timeline } from "./timeline.js";
import { Typography } from "./typography.js";
import { Camera } from "./camera.js";
import { Atmosphere } from "./atmosphere.js";
import { AudioEngine } from "./audio.js";

export class Engine {

    constructor() {

        this.typography = new Typography();

        this.camera = new Camera();

        this.atmosphere = new Atmosphere();

        this.audio = new AudioEngine();

        this.timeline = Timeline;

        this.current = 0;

        this.running = false;

    }

    start() {

        this.audio.start();

        this.audio.chapterOne();

        this.running = true;

        this.play();

    }

    play() {

        if (this.current >= this.timeline.length) {

            return;

        }

        const moment = this.timeline[this.current];

        if (moment.camera) {

            if (typeof this.camera[moment.camera] === "function") {

                this.camera[moment.camera]();

            }

        }

        this.typography.show(

            moment.text,

            moment.actor

        );

    }

    next() {

        if (!this.running) return;

        this.current++;

        this.play();

    }

    update(delta) {

        this.camera.update(delta);

        this.atmosphere.update(delta);

        this.audio.update(delta);

    }

}