import * as THREE from 'three';
import { Atmosphere } from './atmosphere.js';

export class World {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.08);
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('world-canvas') });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        
        this.atmosphere = new Atmosphere(this.scene);
    }

    update(delta) {
        this.atmosphere.update(delta);
    }

    render(camera) {
        this.renderer.render(this.scene, camera);
    }
}

