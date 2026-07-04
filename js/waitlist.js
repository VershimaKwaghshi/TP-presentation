export class Waitlist {

    constructor() {

        this.panel = null;

        this.built = false;

    }

    start() {

        if(this.built) return;

        this.built = true;

        this.build();

        requestAnimationFrame(() => {

            this.panel.classList.add("show");

        });

    }

    build() {

        this.panel = document.createElement("div");

        this.panel.id = "waitlist-panel";

        this.panel.innerHTML = `

        <div id="waitlist-card">

            <div class="wl-small">
                TAKE PROFIT
            </div>

            <h1 class="wl-title">
                Join The Private Waitlist
            </h1>

            <p class="wl-text">

                Register below to reserve your invitation.

            </p>

            <form id="tp-form">

                <input type="text" id="name" placeholder="Full Name" required>

                <input type="text" id="country" placeholder="Country" required>

                <input type="text" id="city" placeholder="Current City" required>

                <input type="email" id="email" placeholder="Email Address" required>

                <input type="tel" id="phone" placeholder="Phone Number" required>

                <button type="submit">

                    Join Waitlist

                </button>

            </form>

            <div id="success" style="display:none">

                <h2>

                    Registration Successful

                </h2>

                <p>

                    Welcome to Take Profit.

                    Join our official community below.

                </p>

                <button id="community">

                    Join WhatsApp Community

                </button>

            </div>

        </div>

        `;

        document.body.appendChild(this.panel);

        const form = document.getElementById("tp-form");

        const success = document.getElementById("success");

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            form.style.display="none";

            success.style.display="block";

        });

        document.getElementById("community").onclick=()=>{

            window.open(

                "https://whatsapp.com/channel/0029VbAze428aKvO1Nsdfk2a",

                "_blank"

            );

        };

    }

}