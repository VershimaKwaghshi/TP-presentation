export class Camera {

    constructor() {

        this.x = 0;

        this.y = 0;

        this.zoom = 1;

        this.rotation = 0;

        this.targetX = 0;

        this.targetY = 0;

        this.targetZoom = 1;

        this.targetRotation = 0;

        this.speed = 0.04;

    }

    hero() {

        this.targetX = 0;

        this.targetY = 0;

        this.targetZoom = 1;

        this.targetRotation = 0;

    }

    push() {

        this.targetZoom = 1.12;

    }

    pull() {

        this.targetZoom = 0.92;

    }

    left() {

        this.targetX = -40;

    }

    right() {

        this.targetX = 40;

    }

    up() {

        this.targetY = -30;

    }

    down() {

        this.targetY = 30;

    }

    orbitLeft() {

        this.targetRotation = -0.015;

    }

    orbitRight() {

        this.targetRotation = 0.015;

    }

    reset() {

        this.targetX = 0;

        this.targetY = 0;

        this.targetZoom = 1;

        this.targetRotation = 0;

    }

    update(delta) {

        this.x += (this.targetX - this.x) * this.speed;

        this.y += (this.targetY - this.y) * this.speed;

        this.zoom += (this.targetZoom - this.zoom) * this.speed;

        this.rotation += (this.targetRotation - this.rotation) * this.speed;

        const overlay = document.getElementById("overlay");

        if(!overlay) return;

        overlay.style.transform = `

        translate(${this.x}px, ${this.y}px)

        scale(${this.zoom})

        rotate(${this.rotation}rad)

        `;

    }

}