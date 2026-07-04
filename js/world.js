export class World {

    constructor() {

        this.canvas = document.getElementById("world");
        this.ctx = this.canvas.getContext("2d");

        this.scene = document.getElementById("scene");
        this.audio = document.getElementById("ambient");

        this.current = 0;

        this.resize();
        window.addEventListener("resize", () => this.resize());

        this.time = 0;

        this.particles = [];

        for (let i = 0; i < 120; i++) {

            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                r: Math.random() * 2 + 0.5,
                vx: (Math.random() - .5) * .15,
                vy: (Math.random() - .5) * .15,
                a: Math.random() * .35 + .03
            });

        }

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

    resize() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

    }

    start() {

        this.showScene();

        document.body.addEventListener("pointerdown", () => {

            if (this.audio.paused) {

                this.audio.play().catch(()=>{});

            }

            this.next();

        });

    }

    showScene() {

        this.scene.style.opacity = 0;
        this.scene.style.transform = "translateY(40px) scale(.985)";
        this.scene.style.filter = "blur(10px)";

        setTimeout(() => {

            if (this.current === this.script.length - 1) {

                this.buildLogo();

            } else {

                this.scene.innerHTML = `<div class="hero">${this.script[this.current]}</div>`;

            }

            this.scene.style.opacity = 1;
            this.scene.style.transform = "translateY(0px) scale(1)";
            this.scene.style.filter = "blur(0px)";

        }, 500);

    }

    buildLogo() {

        const word = this.script[this.current];

        this.scene.innerHTML = "";

        const wrap = document.createElement("div");
        wrap.className = "logo";

        [...word].forEach((letter, i) => {

            const span = document.createElement("span");

            span.textContent = letter;

            span.style.display = "inline-block";
            span.style.opacity = "0";
            span.style.transform = "translateY(45px) scale(.7)";
            span.style.filter = "blur(8px)";
            span.style.transition = "all .9s cubic-bezier(.22,1,.36,1)";

            wrap.appendChild(span);

            setTimeout(() => {

                span.style.opacity = "1";
                span.style.transform = "translateY(0) scale(1)";
                span.style.filter = "blur(0)";

            }, i * 90);

        });

        this.scene.appendChild(wrap);

    }

    next() {

        if (this.current >= this.script.length - 1) return;

        this.current++;

        this.showScene();

    }

    update(delta) {

        this.time += delta;

        const ctx = this.ctx;

        ctx.clearRect(0,0,this.width,this.height);

        const glow = ctx.createRadialGradient(

            this.width/2 + Math.sin(this.time*.25)*120,
            this.height/2 + Math.cos(this.time*.18)*70,
            0,

            this.width/2,
            this.height/2,
            this.width*.6

        );

        glow.addColorStop(0,"rgba(255,255,255,.06)");
        glow.addColorStop(.4,"rgba(255,255,255,.025)");
        glow.addColorStop(1,"rgba(0,0,0,0)");

        ctx.fillStyle = glow;
        ctx.fillRect(0,0,this.width,this.height);

        this.particles.forEach(p=>{

            p.x+=p.vx;
            p.y+=p.vy;

            if(p.x<0)p.x=this.width;
            if(p.x>this.width)p.x=0;

            if(p.y<0)p.y=this.height;
            if(p.y>this.height)p.y=0;

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(255,255,255,${p.a})`;
            ctx.fill();

        });

    }

    render(){}

}