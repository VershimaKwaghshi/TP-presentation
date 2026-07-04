export class FilmGrain {

    constructor() {

        this.canvas = document.createElement("canvas");

        this.ctx = this.canvas.getContext("2d");

        this.canvas.style.position = "fixed";

        this.canvas.style.left = "0";

        this.canvas.style.top = "0";

        this.canvas.style.width = "100vw";

        this.canvas.style.height = "100vh";

        this.canvas.style.pointerEvents = "none";

        this.canvas.style.opacity = "0.045";

        this.canvas.style.mixBlendMode = "soft-light";

        this.canvas.style.zIndex = "999";

        document.body.appendChild(this.canvas);

        this.resize();

        window.addEventListener("resize", () => this.resize());

    }

    resize() {

        this.width = window.innerWidth;

        this.height = window.innerHeight;

        this.canvas.width = this.width;

        this.canvas.height = this.height;

    }

    update() {

        const image = this.ctx.createImageData(this.width, this.height);

        const buffer = image.data;

        for(let i = 0; i < buffer.length; i += 4){

            const value = Math.random() * 255;

            buffer[i] = value;

            buffer[i + 1] = value;

            buffer[i + 2] = value;

            buffer[i + 3] = 18;

        }

        this.ctx.putImageData(image,0,0);

    }

}
