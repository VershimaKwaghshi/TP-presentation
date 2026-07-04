export class RhythmEngine {

    constructor() {

        this.time = 0;

        this.tempo = 40;

        this.pulse = 0;

        this.subscribers = [];

    }

    subscribe(callback) {

        this.subscribers.push(callback);

    }

    setTempo(value) {

        this.tempo = value;

    }

    update(delta) {

        this.time += delta;

        const speed = this.tempo / 60;

        this.pulse += delta * speed;

        const state = {

            time: this.time,

            pulse: (Math.sin(this.pulse * Math.PI * 2) + 1) * 0.5,

            tempo: this.tempo

        };

        this.subscribers.forEach(callback => callback(state));

    }

}