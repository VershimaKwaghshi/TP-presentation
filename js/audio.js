export class AudioEngine {

    constructor() {

        this.ambient = document.getElementById("ambient");

        this.volume = 0;

        this.targetVolume = 0.35;

        this.master = 1;

        this.enabled = false;

        this.speed = 0.001;

    }

    start() {

        if(this.enabled) return;

        this.enabled = true;

        this.ambient.volume = 0;

        this.ambient.play().catch(()=>{});

    }

    stop() {

        this.enabled = false;

        this.ambient.pause();

    }

    fadeIn(seconds = 4) {

        this.targetVolume = 0.35;

        this.speed = this.targetVolume / (seconds * 60);

    }

    fadeOut(seconds = 3) {

        this.targetVolume = 0;

        this.speed = 0.35 / (seconds * 60);

    }

    silence() {

        this.targetVolume = 0;

        this.volume = 0;

        this.ambient.volume = 0;

    }

    chapterOne() {

        this.targetVolume = 0.30;

        this.fadeIn(4);

    }

    chapterTwo() {

        this.targetVolume = 0.18;

        this.fadeIn(4);

    }

    reveal() {

        this.fadeOut(2);

    }

    restore() {

        this.fadeIn(5);

    }

    update() {

        if(!this.enabled) return;

        if(this.volume < this.targetVolume){

            this.volume += this.speed;

            if(this.volume > this.targetVolume){

                this.volume = this.targetVolume;

            }

        }

        if(this.volume > this.targetVolume){

            this.volume -= this.speed;

            if(this.volume < this.targetVolume){

                this.volume = this.targetVolume;

            }

        }

        this.ambient.volume = Math.max(

            0,

            Math.min(

                this.volume * this.master,

                1

            )

        );

    }

}
