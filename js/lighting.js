export class Lighting {

    constructor() {

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.width = window.innerWidth;

        this.height = window.innerHeight;

        this.canvas.width = this.width;

        this.canvas.height = this.height;

        this.time = 0;

        this.intensity = 0.08;

        this.temperature = 255;

        this.focusX = this.width * 0.5;

        this.focusY = this.height * 0.42;

        window.addEventListener("resize", () => {

            this.resize();

        });

    }

    resize() {

        this.width = window.innerWidth;

        this.height = window.innerHeight;

        this.canvas.width = this.width;

        this.canvas.height = this.height;

    }

    setMood(name) {

        switch(name){

            case "pressure":

                this.intensity = 0.05;

                this.temperature = 210;

            break;

            case "truth":

                this.intensity = 0.07;

                this.temperature = 240;

            break;

            case "hope":

                this.intensity = 0.12;

                this.temperature = 255;

            break;

            default:

                this.intensity = 0.08;

                this.temperature = 255;

        }

    }

    update(delta) {

        this.time += delta;

        this.focusX =

        this.width * 0.5 +

        Math.sin(this.time * 0.12) * 90;

        this.focusY =

        this.height * 0.42 +

        Math.cos(this.time * 0.08) * 40;

        this.draw();

    }

    draw() {

        const g = this.ctx.createRadialGradient(

            this.focusX,

            this.focusY,

            10,

            this.focusX,

            this.focusY,

            700

        );

        g.addColorStop(

            0,

            `rgba(${this.temperature},${this.temperature},${this.temperature},${this.intensity})`

        );

        g.addColorStop(

            0.5,

            `rgba(${this.temperature},${this.temperature},${this.temperature},${this.intensity*0.35})`

        );

        g.addColorStop(

            1,

            "rgba(0,0,0,0)"

        );

        this.ctx.save();

        this.ctx.globalCompositeOperation = "screen";

        this.ctx.fillStyle = g;

        this.ctx.fillRect(

            0,

            0,

            this.width,

            this.height

        );

        this.ctx.restore();

    }

}
