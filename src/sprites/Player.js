import Phaser from 'phaser'
import { Physics, Player } from '../constants/Constants';
import { clamp } from '../config';
import UniverseObject from './UniverseObject';

export default class extends UniverseObject {
    constructor({scene, x, y, asset}) {
        super({scene, x, y, asset});
        this.vectorX = 0;
        this.vectorY = 0;
        this.inputAccelX = 0;
        this.accelX = 0;
        this.accelY = 0;
        this.grounded = false;
        this.pushRight = false;

        this.initKeyBinds(scene);
        this.sfx = {};
        this.sfx.jump = scene.sound.add('jump');
        this.sfx.psi = scene.sound.add('psi');

        this.overlappingPlatforms = new Set();
        this.influences = new Set();
    }

    initKeyBinds(scene) {
        this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    updateKeyBinds() {
        if (this.keySpace.isDown && this.grounded) {
            // TODO is changing grounded here right?
            // this.grounded = false;
            this.adjustVectorY(Player.jumpSpeed);
            this.sfx.jump.play();
        }

        if (this.keyQ.isDown) {
            this.sfx.psi.play();
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

    ignoreInfluence() {
        return false;
    }

    updateVectorInfluences() {
        if (this.ignoreInfluence()) {
            return;
        }

        if (this.influences.size > 0) {
            let nextSet = new Set();

            for (let influence of this.influences.values()) {
                if (influence.shouldInfluence(this)) {
                    nextSet.add(influence);
                    influence.influence(this);
                    if (influence.haltsMovement()) {
                        this.inputAccelX = 0;
                    }
                }
            }

            this.influences = nextSet;
        }
    }

    updatePositionInfluences() {
        if (this.ignoreInfluence()) {
            return;
        }

        if (this.influences.size > 0) {
            let nextSet = new Set();

            for (let influence of this.influences.values()) {
                if (influence.shouldInfluence(this)) {
                    nextSet.add(influence);
                    this.x = influence.influenceX(this, this.x);
                    this.y = influence.influenceY(this, this.y);
                }
            }

            this.influences = nextSet;
        }
    }

    update() {
        this.lastX = this.x;
        this.lastY = this.y;
        this.updateKeyBinds();
        this.grounded = false;
        this.updateVectorInfluences();

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
    }

    /**
     * A class that implements Influence will have three methods
     * shouldInfluence(sprite)
     * influence(sprite)
     * haltsMovement()
     *
     * @param obj
     */
    addInfluence(obj) {
        if (!this.influences.has(obj)) {
            this.influences.add(obj);
        }
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
