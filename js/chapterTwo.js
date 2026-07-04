import { CapitalBuilder } from "./capitalBuilder.js";
import { ManagerSystem } from "./managerSystem.js";
import { Restitution } from "./restitution.js";
import { BrokerNetwork } from "./brokerNetwork.js";
import { Museum } from "./museum.js";

export class ChapterTwo {

    constructor() {

        this.capitalBuilder = new CapitalBuilder();

        this.managerSystem = new ManagerSystem();

        this.restitution = new Restitution();

        this.brokerNetwork = new BrokerNetwork();

        this.museum = new Museum();

        this.stage = 0;

        this.active = false;

        this.museum.container.style.display = "none";

    }

    start() {

        if(this.active) return;

        this.active = true;

        this.stage = 0;

        this.play();

    }

    play() {

        switch(this.stage){

            case 0:

                this.capitalBuilder.start();

                setTimeout(() => {

                    this.capitalBuilder.stop();

                    this.stage++;

                    this.play();

                },7000);

            break;

            case 1:

                this.managerSystem.start();

                setTimeout(() => {

                    this.managerSystem.stop();

                    this.stage++;

                    this.play();

                },7000);

            break;

            case 2:

                this.restitution.start();

                setTimeout(() => {

                    this.restitution.stop();

                    this.stage++;

                    this.play();

                },7000);

            break;

            case 3:

                this.brokerNetwork.start();

                setTimeout(() => {

                    this.brokerNetwork.stop();

                    this.stage++;

                    this.play();

                },7000);

            break;

            case 4:

                this.museum.container.style.display = "flex";

                this.museum.container.style.opacity = "1";

            break;

        }

    }

    update() {

        if(!this.active) return;

        this.capitalBuilder.update();

        this.managerSystem.update();

        this.restitution.update();

        this.brokerNetwork.update();

    }

}
