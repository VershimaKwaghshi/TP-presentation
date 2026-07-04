export class Typography {

    constructor() {

        this.scene = document.getElementById("scene");

    }

    show(text, actor = "reveal") {

        switch(actor){

            case "whisper":

                this.whisper(text);

            break;

            case "collapse":

                this.collapse(text);

            break;

            case "assemble":

                this.assemble(text);

            break;

            case "hero":

                this.hero(text);

            break;

            case "resolve":

                this.resolve(text);

            break;

            default:

                this.reveal(text);

        }

    }

    reveal(text){

        this.scene.style.transition =
        "all 1.6s cubic-bezier(.22,1,.36,1)";

        this.scene.style.opacity = 0;

        this.scene.style.transform =
        "translateY(40px) scale(.98)";

        setTimeout(()=>{

            this.scene.innerHTML = text;

            this.scene.style.opacity = 1;

            this.scene.style.transform =
            "translateY(0px) scale(1)";

        },250);

    }

    whisper(text){

        this.scene.style.transition =
        "all 2.4s ease";

        this.scene.style.opacity = 0;

        this.scene.style.letterSpacing = "18px";

        setTimeout(()=>{

            this.scene.innerHTML = text;

            this.scene.style.opacity = .65;

            this.scene.style.letterSpacing = "2px";

        },250);

    }

    collapse(text){

        this.scene.style.transition =
        "all 1.8s ease";

        this.scene.style.opacity = 0;

        this.scene.style.transform =
        "scale(1.35)";

        setTimeout(()=>{

            this.scene.innerHTML = text;

            this.scene.style.opacity = 1;

            this.scene.style.transform =
            "scale(1)";

        },350);

    }

    assemble(text){

        this.scene.innerHTML = "";

        [...text].forEach((letter,index)=>{

            const span =
            document.createElement("span");

            span.textContent = letter;

            span.style.opacity = 0;

            span.style.display = "inline-block";

            span.style.transform =
            "translateY(50px)";

            span.style.transition =
            "all .9s cubic-bezier(.22,1,.36,1)";

            this.scene.appendChild(span);

            setTimeout(()=>{

                span.style.opacity = 1;

                span.style.transform =
                "translateY(0px)";

            },index*70);

        });

    }

    hero(text){

        this.scene.innerHTML = text;

        this.scene.style.transition =
        "all 2s ease";

        this.scene.style.fontSize =

        "clamp(70px,9vw,170px)";

        this.scene.style.fontWeight = "700";

        this.scene.style.opacity = 1;

        this.scene.style.transform =
        "scale(1)";

    }

    resolve(text){

        this.scene.style.transition =
        "all 2.5s ease";

        this.scene.style.opacity = 0;

        setTimeout(()=>{

            this.scene.innerHTML = text;

            this.scene.style.opacity = 1;

            this.scene.style.transform =
            "translateY(0px)";

        },500);

    }

}