import { Timeline } from "./timeline.js";
import { Typography } from "./typography.js";
import { Camera } from "./camera.js";
import { Atmosphere } from "./atmosphere.js";
import { AudioEngine } from "./audio.js";
import { ChapterTwo } from "./chapterTwo.js";
import { Lighting } from "./lighting.js";
import { FilmGrain } from "./filmGrain.js";
import { Bloom } from "./bloom.js";

export class Engine {

    constructor() {

        this.typography = new Typography();

        this.camera = new Camera();

        this.atmosphere = new Atmosphere();

        this.lighting = new Lighting();

        this.filmGrain = new FilmGrain();

        this.bloom = new Bloom();

        this.audio = new AudioEngine();

        this.chapterTwo = new ChapterTwo();

        this.timeline = Timeline;

        this.current = 0;

        this.running = false;

        this.readyForNext = true;

    }

    start() {

        this.audio.start();

        this.audio.chapterOne();

        this.running = true;

        this.play();

    }

    play() {

        if(this.current >= this.timeline.length){

            return;

        }

        const moment = this.timeline[this.current];

        if(moment.chapter === 2){

            this.chapterTwo.start();

            return;

        }

        if(moment.camera){

            if(typeof this.camera[moment.camera] === "function"){

                this.camera[moment.camera]();

            }

        }

        if(moment.world){

            this.lighting.setMood(moment.world);

        }

        this.typography.show(

            moment.text,

            moment.actor

        );

    }

    next(){

        if(!this.running) return;

        this.current++;

        this.play();

    }

    update(delta){

        this.camera.update(delta);

        this.atmosphere.update(delta);

        this.lighting.update(delta);

        this.bloom.update(delta);

        this.filmGrain.update(delta);

        this.audio.update(delta);

        this.chapterTwo.update(delta);

    }

}