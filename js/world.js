export class World{

    constructor(){

        this.canvas =
        document.getElementById("world");

        this.scene =
        document.getElementById("scene");

        this.audio =
        document.getElementById("ambient");

        this.current = 0;

        this.script=[

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

        this.scene.style.opacity=0;

        setTimeout(()=>{

            this.scene.innerHTML=this.script[this.current];

            this.scene.style.opacity=1;

        },400);

    }

    next(){

        if(this.current>=this.script.length-1){

            return;

        }

        this.current++;

        this.showScene();

    }

}