export class BrokerNetwork {

    constructor() {

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.running = false;

        this.broker = null;

        this.managers = [];

        this.builders = [];

        window.addEventListener("resize", () => this.resize());

    }

    resize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        if(this.running){

            this.start();

        }

    }

    start() {

        this.running = true;

        this.broker = {

            x: this.width * 0.5,

            y: this.height * 0.2,

            radius: 18

        };

        this.managers = [];

        this.builders = [];

        for(let i = 0; i < 5; i++){

            this.managers.push({

                x: (this.width / 6) * (i + 1),

                y: this.height * 0.45,

                pulse: Math.random() * Math.PI * 2

            });

        }

        for(let i = 0; i < 25; i++){

            const manager = this.managers[i % this.managers.length];

            this.builders.push({

                manager,

                angle: Math.random() * Math.PI * 2,

                distance: 60 + Math.random() * 60,

                pulse: Math.random() * Math.PI * 2

            });

        }

    }

    stop() {

        this.running = false;

    }

    update() {

        if(!this.running) return;

        const ctx = this.ctx;

        ctx.clearRect(0,0,this.width,this.height);

        ctx.beginPath();

        ctx.arc(

            this.broker.x,

            this.broker.y,

            this.broker.radius,

            0,

            Math.PI * 2

        );

        ctx.fillStyle = "rgba(255,255,255,1)";

        ctx.fill();

        for(const manager of this.managers){

            manager.pulse += 0.03;

            const r = 10 + Math.sin(manager.pulse) * 2;

            ctx.beginPath();

            ctx.moveTo(this.broker.x,this.broker.y);

            ctx.lineTo(manager.x,manager.y);

            ctx.strokeStyle = "rgba(255,255,255,0.12)";

            ctx.lineWidth = 1.5;

            ctx.stroke();

            ctx.beginPath();

            ctx.arc(manager.x,manager.y,r,0,Math.PI * 2);

            ctx.fillStyle = "rgba(255,255,255,0.9)";

            ctx.fill();

        }

        for(const builder of this.builders){

            builder.pulse += 0.04;

            builder.angle += 0.002;

            const x = builder.manager.x + Math.cos(builder.angle) * builder.distance;

            const y = builder.manager.y + Math.sin(builder.angle) * builder.distance;

            ctx.beginPath();

            ctx.moveTo(builder.manager.x,builder.manager.y);

            ctx.lineTo(x,y);

            ctx.strokeStyle = "rgba(255,255,255,0.05)";

            ctx.lineWidth = 1;

            ctx.stroke();

            ctx.beginPath();

            ctx.arc(

                x,

                y,

                3 + Math.sin(builder.pulse),

                0,

                Math.PI * 2

            );

            ctx.fillStyle = "rgba(255,255,255,0.75)";

            ctx.fill();

        }

    }

}