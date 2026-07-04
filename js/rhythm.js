export class RhythmEngine {

    constructor() {

        this.beat = 0;

        this.tempo = 60;

        this.time = 0;

        this.subscribers = [];

    }

    subscribe(callback) {

        this.subscribers.push(callback);

    }

    unsubscribe(callback) {

        this.subscribers =
            this.subscribers.filter(item => item !== callback);

    }

    update(delta) {

        this.time += delta;

        this.beat += delta * (this.tempo / 60);

        const pulse =
            (Math.sin(this.beat * Math.PI * 2) + 1) * 0.5;

        for (const callback of this.subscribers) {

            callback({

                delta,

                beat: this.beat,

                pulse,

                tempo: this.tempo,

                time: this.time

            });

        }

    }

    setTempo(value) {

        this.tempo = value;

    }

    pause() {

        this.tempo = 0;

    }

    resume() {

        if (this.tempo === 0) {

            this.tempo = 60;

        }

    }

}