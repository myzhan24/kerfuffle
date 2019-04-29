import Phaser from 'phaser'
import { Player, Physics } from '../constants/PlayerConstants';

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.vectorX = 0;
        this.vectorY = 0;
        this.accelX = 0;
        this.accelY = 0;
        this.grounded = false;

        this.initKeyBinds(scene);
    }

    initKeyBinds(scene) {
        this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    updateKeyBinds() {
        if (this.keyA.isDown && this.grounded) {
            this.grounded = false;
            this.adjustVectorY(Player.jumpSpeed);
        }

        if (this.keyLeft.isDown && this.vectorX > -10) {
            this.accelX = -5;
        } else if (this.keyRight.isDown && this.vectorX < 10) {
            this.accelX = 5;
        } else {
            this.accelX = 0;
            // this.decayVectorX();
        }

        // Assume this object can only overlap with one platform at a time.
        if (!this.keyLeft.isDown && !this.keyRight.isDown) {
            this.decayVectorX();
        }
    }

    update() {
        this.updateKeyBinds();
        this.vectorX += this.accelX;
        this.vectorY += this.accelY + Physics.gravity;
        this.x += this.vectorX;
        this.y -= this.vectorY;
    }

    decayVectorX() {
        if (this.getVectorX() < 0) {
            this.setAccelX(1);
        } else if (this.getVectorX() > 0) {
            this.setAccelX(-1);
        }

        if (Math.abs(this.getVectorX()) <= 0.5) {
            this.setAccelX(0);
            this.setVectorX(0);
        }
        // console.log('mz decay', this.getVectorX(), this.accelX);
    }

    /*decayVectorX() {
     this.setVectorX(this.getVectorX() / 1.05);
     }*/

    setVectorX(vector) {
        this.vectorX = vector;
    }

    getVectorX() {
        return this.vectorX;
    }

    adjustVectorX(value) {
        this.vectorX += value;
    }

    adjustVectorY(value) {
        this.vectorY += value;
    }

    setVectorY(vector) {
        this.vectorY = vector;
    }

    setAccelX(vector) {
        this.accelX = vector;
    }

    setAccelY(vector) {
        this.accelY = vector;
    }
}
