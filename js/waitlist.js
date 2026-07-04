export class Waitlist {

    constructor() {

        this.button = null;

        this.panel = null;

        this.built = false;

    }

    start() {

        if(this.built) return;

        this.built = true;

        this.build();

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
                Join the Private Waitlist
            </h1>

            <p class="wl-text">

                Take Profit is being released gradually.

                Request an invitation and receive updates as development progresses.

            </p>

            <button id="joinButton">

                Request Invitation

            </button>

        </div>

        `;

        document.body.appendChild(this.panel);

        this.button = document.getElementById("joinButton");

        this.button.onclick = () => {

            window.open(

                "https://chat.whatsapp.com/YOUR_WHATSAPP_CHANNEL",

                "_blank"

            );

        };

    }

}
