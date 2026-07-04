export class ManagerSystem {

    constructor() {

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.managers = [];

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

        this.managers = [];

        const count = 6;

        const spacing = this.width / (count + 1);

        for(let i = 0; i < count; i++){

            this.managers.push({

                x: spacing * (i + 1),

                y: this.height * 0.35,

                pulse: Math.random() * Math.PI * 2

            });

        }

    }

    stop(){

        this.running = false;

    }

    update(time){

        if(!this.running) return;

        for(const manager of this.managers){

            manager.pulse += 0.03;

            const radius = 10 + Math.sin(manager.pulse) * 3;

            this.ctx.beginPath();

            this.ctx.arc(

                manager.x,

                manager.y,

                radius,

                0,

                Math.PI * 2

            );

            this.ctx.fillStyle = "rgba(255,255,255,0.95)";

            this.ctx.fill();

            this.ctx.beginPath();

            this.ctx.arc(

                manager.x,

                manager.y,

                radius + 12,

                0,

                Math.PI * 2

            );

            this.ctx.strokeStyle = "rgba(255,255,255,0.12)";

            this.ctx.lineWidth = 2;

            this.ctx.stroke();

        }

        for(let i = 0; i < this.managers.length - 1; i++){

            const a = this.managers[i];

            const b = this.managers[i + 1];

            this.ctx.beginPath();

            this.ctx.moveTo(a.x,a.y);

            this.ctx.lineTo(b.x,b.y);

            this.ctx.strokeStyle = "rgba(255,255,255,0.08)";

            this.ctx.lineWidth = 1;

            this.ctx.stroke();

        }

    }

}