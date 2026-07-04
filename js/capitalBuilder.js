export class CapitalBuilder {

    constructor() {

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.capital = [];

        this.running = false;

        window.addEventListener("resize", () => this.resize());

    }

    resize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

    }

    start() {

        this.running = true;

        this.capital = [];

        for(let i = 0; i < 120; i++){

            this.capital.push({

                x: Math.random() * this.width,

                y: this.height + Math.random() * 500,

                radius: 2 + Math.random() * 3,

                speed: 0.3 + Math.random(),

                alpha: 0.2 + Math.random() * 0.8

            });

        }

    }

    stop(){

        this.running = false;

    }

    update(){

        if(!this.running) return;

        this.ctx.clearRect(0,0,this.width,this.height);

        for(const dot of this.capital){

            dot.y -= dot.speed;

            if(dot.y < -20){

                dot.y = this.height + 20;

                dot.x = Math.random() * this.width;

            }

            this.ctx.beginPath();

            this.ctx.arc(dot.x,dot.y,dot.radius,0,Math.PI*2);

            this.ctx.fillStyle = `rgba(255,255,255,${dot.alpha})`;

            this.ctx.fill();

        }

    }

}