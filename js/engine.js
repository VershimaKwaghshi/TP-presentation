import { Timeline } from "./timeline.js";
import { Typography } from "./typography.js";
import { AudioEngine } from "./audio.js";

export class Engine {

    constructor() {

        this.typography = new Typography();

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

        if (this.current >= this.timeline.length) return;

        const moment = this.timeline[this.current];

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

        this.audio.update(delta);

    }

}
