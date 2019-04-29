import Phaser from 'phaser'
import { Physics, Player } from '../constants/Constants';
import { clamp } from '../config';

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.vectorX = 0;
        this.vectorY = 0;
        this.inputAccelX = 0;
        this.accelX = 0;
        this.accelY = 0;
        this.grounded = false;

        this.initKeyBinds(scene);
        this.sfx = {};
        this.sfx.jump = scene.sound.add('jump');
    }

    initKeyBinds(scene) {
        this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    updateKeyBinds() {
        if (this.keyA.isDown && this.grounded) {
            // TODO is changing grounded here right?
            // this.grounded = false;
            this.adjustVectorY(Player.jumpSpeed);
            this.sfx.jump.play();
        }

        if (this.keyLeft.isDown) {
            // Left Pressed
            this.inputAccelX = -this.getAccelMu() * Player.accel;
        } else if (this.keyRight.isDown) {
            // Right Pressed
            this.inputAccelX = this.getAccelMu() * Player.accel;
        } else {
            // Neither Left or Right is being pressed.
            // Stop moving when reaching a low enough speed
            if (this.getVectorX() === 0 || Math.abs(this.getVectorX()) <= (Physics.groundFrictionMu * Player.frictionAccel) / 2) {
                this.inputAccelX = 0;
                this.setVectorX(0);
            } else {
                this.inputAccelX = this.getFrictionMu() * Player.frictionAccel * (this.getVectorX() < 0 ? 1 : -1);
            }
        }
    }

    update() {
        this.updateKeyBinds();

        if (this.inputAccelX > 0) {
            if (this.vectorX < Player.maxRunSpeed) {
                this.vectorX += this.inputAccelX;
                this.vectorX = clamp(this.vectorX, -Player.maxRunSpeed, Player.maxRunSpeed);
            }
        } else if (this.inputAccelX < 0) {
            if (this.vectorX > -Player.maxRunSpeed) {
                this.vectorX += this.inputAccelX;
                this.vectorX = clamp(this.vectorX, -Player.maxRunSpeed, Player.maxRunSpeed);
            }
        }

        this.vectorX += this.accelX;
        this.vectorY += this.accelY + Physics.gravity;
        this.x += this.vectorX;
        this.y -= this.vectorY;

        // console.log('player speed:', this.vectorX, this.inputAccelX, this.accelX);
    }

    decayVectorX() {

    }

    /**
     * returns an acceleration of friction in the opposite magnitude this player is translating.
     * @returns {number}
     */
    getFrictionMu() {
        return this.grounded ? Physics.groundFrictionMu : Physics.airFrictionMu;
    }

    getAccelMu() {
        return this.grounded ? Physics.groundAccelMu : Physics.airAccelMu;
    }

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
