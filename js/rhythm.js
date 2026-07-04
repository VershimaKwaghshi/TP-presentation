export class RhythmEngine {
    constructor() {
        this.beat = 0;
        this.tempo = 60; // BPM
    }

    update(delta) {
        this.beat += delta * (this.tempo / 60);
    }
    
    setTempo(bpm) {
        this.tempo = bpm;
    }
}

