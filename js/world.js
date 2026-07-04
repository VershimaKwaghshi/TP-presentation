import { ChapterTwo } from "./chapterTwo.js";

export class World {

    constructor(){

        this.canvas =
        document.getElementById("world");

        this.scene =
        document.getElementById("scene");

        this.audio =
        document.getElementById("ambient");

        this.current = 0;

        this.chapterTwo =
        new ChapterTwo();

        this.chapterStarted = false;

        this.script = [

            "Every day.",

            "Someone discovers trading.",

            "People dream.",

            "Millions enter the market with hope.",

            "Most never return.",

            "Not because they lack intelligence.",

            "Because no human was built to remain rational under financial pressure.",

            "What if emotion never touched capital?",

            "TAKE PROFIT"

        ];

    }

    start(){

        this.showScene();

        document.body.addEventListener("click",()=>{

            if(this.audio.paused){

                this.audio.play().catch(()=>{});

            }

            this.next();

        });

    }

    showScene(){

        this.scene.style.opacity = 0;

        setTimeout(()=>{

            this.scene.innerHTML = this.script[this.current];

            this.scene.style.opacity = 1;

        },400);

    }

    next(){

        if(this.current < this.script.length - 1){

            this.current++;

            this.showScene();

            return;

        }

        if(!this.chapterStarted){

            this.chapterStarted = true;

            this.beginChapterTwo();

        }

    }

    beginChapterTwo(){

        this.scene.style.opacity = 0;

        document.getElementById("hint").style.opacity = 0;

        setTimeout(()=>{

            this.scene.style.display = "none";

            this.chapterTwo.start();

        },1200);

    }

    update(){

        this.chapterTwo.update();

    }

    render(){

    }

}
