export class ChapterTwo {

    constructor(world) {

        this.world = world;

        this.active = false;

        this.section = 0;

        this.sections = [

            {
                title: "A Different Way",
                body: "Trading does not have to end in permanent loss."
            },

            {
                title: "Capital Builders",
                body: "People build capital instead of risking everything themselves."
            },

            {
                title: "Professional Managers",
                body: "Experienced traders manage capital while builders remain owners."
            },

            {
                title: "Restitution",
                body: "Losses become recoverable instead of permanent."
            },

            {
                title: "Shared Success",
                body: "Builders earn. Managers earn. Brokers grow."
            }

        ];

    }

    start() {

        this.active = true;

        this.section = 0;

        this.show();

    }

    next() {

        if (!this.active) return;

        this.section++;

        if (this.section >= this.sections.length) {

            window.dispatchEvent(new CustomEvent("chapter2-complete"));

            return;

        }

        this.show();

    }

    previous() {

        if (!this.active) return;

        if (this.section === 0) return;

        this.section--;

        this.show();

    }

    show() {

        const scene = document.getElementById("scene");

        const data = this.sections[this.section];

        scene.style.opacity = 0;

        scene.style.transform = "translateY(60px)";

        setTimeout(() => {

            scene.innerHTML = `

            <div class="chapter-two">

                <div class="chapter-number">

                    0${this.section + 1}

                </div>

                <h1>

                    ${data.title}

                </h1>

                <p>

                    ${data.body}

                </p>

            </div>

            `;

            scene.style.opacity = 1;

            scene.style.transform = "translateY(0px)";

        },500);

    }

}