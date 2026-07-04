export class Director {
    constructor(world, rhythm) {
        this.world = world;
        this.rhythm = rhythm;
        this.queue = [];
        this.currentMoment = null;
    }

    cue(moment) {
        this.currentMoment = moment;
        // Logic for triggering World/Camera/Type states
    }

    update(delta) {
        // Orchestration logic
    }
}

