export class World {

    constructor() {

        this.canvas = document.getElementById("world");
        this.scene = document.getElementById("scene");
        this.audio = document.getElementById("ambient");

        this.current = 0;

        this.script = [

            {
                text: "Every day.",
                class: "hero"
            },

            {
                text: "Someone discovers trading.",
                class: "hero"
            },

            {
                text: "People dream.",
                class: "hero"
            },

            {
                text: "Millions enter the market with hope.",
                class: "hero"
            },

            {
                text: "Most never return.",
                class: "hero"
            },

            {
                text: "Not because they lack intelligence.",
                class: "hero"
            },

            {
                text: "Because no human was built to remain rational under financial pressure.",
                class: "hero"
            },

            {
                text: "What if emotion never touched capital?",
                class: "hero"
            },

            {
                text: "TAKE PROFIT",
                class: "logo"
            }

        ];

        this.lock = false;

    }

    start() {

        this.showScene();

        document.body.addEventListener("pointerdown", () => {

            if (this.lock) return;

            if (this.audio && this.audio.paused) {

                this.audio.play().catch(() => {});

            }

            this.next();

        });

    }

    showScene() {

        this.lock = true;

        this.scene.style.opacity = "0";
        this.scene.style.transform = "translateY(40px) scale(.98)";
        this.scene.style.filter = "blur(12px)";

        setTimeout(() => {

            const item = this.script[this.current];

            this.scene.className = item.class;

            this.scene.innerHTML = item.text;

            requestAnimationFrame(() => {

                this.scene.style.opacity = "1";
                this.scene.style.transform = "translateY(0) scale(1)";
                this.scene.style.filter = "blur(0px)";

            });

        }, 350);

        setTimeout(() => {

            this.lock = false;

        }, 1600);

    }

    next() {

        if (this.current >= this.script.length - 1) {

            return;

        }

        this.current++;

        this.showScene();

    }

    update(delta) {

        const t = performance.now() * 0.00008;

        document.body.style.backgroundPosition =
            `${Math.sin(t) * 20}px ${Math.cos(t) * 20}px`;

    }

    render() {

    }

}