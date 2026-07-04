export class Museum {

    constructor() {

        this.sections = [

            {
                title: "Capital Builders",
                description: "Capital grows before it is ever exposed to risk."
            },

            {
                title: "Professional Managers",
                description: "Managers trade. Users keep ownership."
            },

            {
                title: "Restitution",
                description: "Loss recovery becomes part of the architecture."
            },

            {
                title: "Broker Network",
                description: "Brokerages gain acquisition and retention."
            },

            {
                title: "Take Profit",
                description: "A completely different trading experience."
            }

        ];

        this.current = 0;

        this.container = document.createElement("div");

        this.container.id = "museum";

        document.body.appendChild(this.container);

        this.build();

    }

    build() {

        this.container.innerHTML = "";

        const title = document.createElement("h1");

        title.id = "museum-title";

        title.textContent = this.sections[this.current].title;

        const description = document.createElement("p");

        description.id = "museum-description";

        description.textContent = this.sections[this.current].description;

        this.container.appendChild(title);

        this.container.appendChild(description);

    }

    next() {

        if(this.current >= this.sections.length - 1){

            return;

        }

        this.current++;

        this.transition();

    }

    previous() {

        if(this.current <= 0){

            return;

        }

        this.current--;

        this.transition();

    }

    transition() {

        this.container.style.opacity = "0";

        setTimeout(() => {

            this.build();

            this.container.style.opacity = "1";

        },400);

    }

}