export class Director {

    constructor(world, rhythm) {

        this.world = world;

        this.rhythm = rhythm;

        this.started = false;

        this.lastScene = -1;

        this.tempo = [

            40,

            42,

            44,

            46,

            48,

            42,

            36,

            28,

            0

        ];

    }

    update(delta) {

        if (!this.started) {

            this.started = true;

            this.world.start();

        }

        if (this.world.current !== this.lastScene) {

            this.lastScene = this.world.current;

            this.rhythm.setTempo(

                this.tempo[this.world.current] || 60

            );

            this.applyMood();

        }

    }

    applyMood() {

        const body = document.body;

        switch (this.world.current) {

            case 0:

                body.style.background =
                "radial-gradient(circle,#171717 0%,#080808 45%,#000 100%)";

                break;

            case 1:

                body.style.background =
                "radial-gradient(circle,#151515 0%,#070707 45%,#000 100%)";

                break;

            case 2:

                body.style.background =
                "radial-gradient(circle,#131313 0%,#060606 45%,#000 100%)";

                break;

            case 3:

                body.style.background =
                "radial-gradient(circle,#101010 0%,#050505 45%,#000 100%)";

                break;

            case 4:

                body.style.background =
                "radial-gradient(circle,#0d0d0d 0%,#040404 45%,#000 100%)";

                break;

            case 5:

                body.style.background =
                "radial-gradient(circle,#090909 0%,#030303 45%,#000 100%)";

                break;

            case 6:

                body.style.background =
                "radial-gradient(circle,#050505 0%,#010101 45%,#000 100%)";

                break;

            case 7:

                body.style.background =
                "radial-gradient(circle,#111111 0%,#040404 45%,#000 100%)";

                break;

            case 8:

                body.style.background =
                "radial-gradient(circle,#202020 0%,#070707 45%,#000 100%)";

                break;

        }

    }

}