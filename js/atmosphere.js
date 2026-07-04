export class Atmosphere {

    constructor() {

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.time = 0;

        this.particles = [];

        this.running = true;

        for(let i = 0; i < 180; i++){

            this.particles.push({

                x: Math.random() * this.width,

                y: Math.random() * this.height,

                radius: Math.random() * 2 + 0.3,

                alpha: Math.random() * 0.08,

                speed: Math.random() * 0.2 + 0.05,

                offset: Math.random() * Math.PI * 2

            });

        }

        window.addEventListener("resize",()=>{

            this.resize();

        });

    }

    resize(){

        this.width = window.innerWidth;

        this.height = window.innerHeight;

        this.canvas.width = this.width;

        this.canvas.height = this.height;

    }

    update(delta){

        if(!this.running) return;

        this.time += delta;

        this.drawFog();

        this.drawLight();

        this.drawParticles();

    }

    drawFog(){

        const gradient = this.ctx.createRadialGradient(

            this.width * 0.5,

            this.height * 0.45,

            100,

            this.width * 0.5,

            this.height * 0.45,

            this.width

        );

        gradient.addColorStop(0,"rgba(255,255,255,0.025)");

        gradient.addColorStop(0.4,"rgba(255,255,255,0.01)");

        gradient.addColorStop(1,"rgba(0,0,0,0)");

        this.ctx.fillStyle = gradient;

        this.ctx.fillRect(

            0,

            0,

            this.width,

            this.height

        );

    }

    drawLight(){

        const x =

        this.width * 0.5 +

        Math.sin(this.time * 0.08) * 120;

        const y =

        this.height * 0.4 +

        Math.cos(this.time * 0.05) * 60;

        const light = this.ctx.createRadialGradient(

            x,

            y,

            10,

            x,

            y,

            500

        );

        light.addColorStop(

            0,

            "rgba(255,255,255,0.06)"

        );

        light.addColorStop(

            1,

            "rgba(255,255,255,0)"

        );

        this.ctx.fillStyle = light;

        this.ctx.fillRect(

            0,

            0,

            this.width,

            this.height

        );

    }

    drawParticles(){

        for(const p of this.particles){

            p.y -= p.speed;

            p.x += Math.sin(

                this.time +

                p.offset

            ) * 0.15;

            if(p.y < -10){

                p.y = this.height + 10;

                p.x = Math.random() * this.width;

            }

            this.ctx.beginPath();

            this.ctx.arc(

                p.x,

                p.y,

                p.radius,

                0,

                Math.PI * 2

            );

            this.ctx.fillStyle =

            `rgba(255,255,255,${p.alpha})`;

            this.ctx.fill();

        }

    }

}