export class Restitution {

    constructor() {

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.running = false;

        this.nodes = [];

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

        this.nodes = [];

        for(let i = 0; i < 60; i++){

            this.nodes.push({

                x: this.width * 0.5,

                y: this.height * 0.5,

                targetX: Math.random() * this.width,

                targetY: Math.random() * this.height,

                radius: 2 + Math.random() * 4,

                progress: 0,

                speed: 0.002 + Math.random() * 0.004

            });

        }

    }

    stop(){

        this.running = false;

    }

    update(){

        if(!this.running) return;

        for(const node of this.nodes){

            node.progress += node.speed;

            if(node.progress > 1){

                node.progress = 0;

                node.targetX = Math.random() * this.width;

                node.targetY = Math.random() * this.height;

            }

            const x = node.x + (node.targetX - node.x) * node.progress;

            const y = node.y + (node.targetY - node.y) * node.progress;

            this.ctx.beginPath();

            this.ctx.arc(

                x,

                y,

                node.radius,

                0,

                Math.PI * 2

            );

            this.ctx.fillStyle = "rgba(255,255,255,0.85)";

            this.ctx.fill();

            this.ctx.beginPath();

            this.ctx.moveTo(this.width * 0.5,this.height * 0.5);

            this.ctx.lineTo(x,y);

            this.ctx.strokeStyle = "rgba(255,255,255,0.05)";

            this.ctx.lineWidth = 1;

            this.ctx.stroke();

        }

    }

}