export class Bloom {

    constructor() {

        this.canvas = document.createElement("canvas");

        this.ctx = this.canvas.getContext("2d");

        this.canvas.style.position = "fixed";

        this.canvas.style.left = "0";

        this.canvas.style.top = "0";

        this.canvas.style.width = "100vw";

        this.canvas.style.height = "100vh";

        this.canvas.style.pointerEvents = "none";

        this.canvas.style.mixBlendMode = "screen";

        this.canvas.style.opacity = "0.75";

        this.canvas.style.zIndex = "998";

        document.body.appendChild(this.canvas);

        this.resize();

        this.time = 0;

        window.addEventListener("resize", () => this.resize());

    }

    resize() {

        this.width = window.innerWidth;

        this.height = window.innerHeight;

        this.canvas.width = this.width;

        this.canvas.height = this.height;

    }

    update(delta) {

        this.time += delta;

        this.ctx.clearRect(

            0,

            0,

            this.width,

            this.height

        );

        const x =

        this.width * 0.5 +

        Math.sin(this.time * 0.18) * 80;

        const y =

        this.height * 0.42 +

        Math.cos(this.time * 0.14) * 35;

        this.drawGlow(

            x,

            y,

            700,

            0.09

        );

        this.drawGlow(

            x,

            y,

            350,

            0.12

        );

        this.drawGlow(

            x,

            y,

            120,

            0.18

        );

    }

    drawGlow(x,y,radius,alpha){

        const g = this.ctx.createRadialGradient(

            x,

            y,

            0,

            x,

            y,

            radius

        );

        g.addColorStop(

            0,

            `rgba(255,255,255,${alpha})`

        );

        g.addColorStop(

            0.4,

            `rgba(255,255,255,${alpha*0.4})`

        );

        g.addColorStop(

            1,

            "rgba(255,255,255,0)"

        );

        this.ctx.fillStyle = g;

        this.ctx.fillRect(

            x-radius,

            y-radius,

            radius*2,

            radius*2

        );

    }

}
