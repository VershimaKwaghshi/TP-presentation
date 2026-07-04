export class Director {

    constructor(world, rhythm) {

        this.world = world;
        this.rhythm = rhythm;

        this.started = false;

        this.fade = 0;

        this.world.start();

        this.started = true;

    }

    update(delta) {

        if (!this.started) return;

        this.fade += delta;

        const glow = 0.65 + Math.sin(this.fade * 0.7) * 0.08;

        this.world.scene.style.opacity = glow;

        this.world.scene.style.transition =
            "opacity 1200ms ease, transform 1600ms cubic-bezier(.22,1,.36,1), filter 1600ms ease";

        const scale = 1 + Math.sin(this.fade * 0.25) * 0.006;

        this.world.scene.style.transform =
            `translateY(0px) scale(${scale})`;

    }

}