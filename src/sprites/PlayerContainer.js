import Phaser from 'phaser';
import Water from './skills/Water';
import { Physics, Player } from '../constants/Constants';
import { clamp } from '../config';

export default class extends Phaser.GameObjects.Container {
    constructor({scene, x, y}) {
        super(scene, x, y);
        this.vectorX = 0;
        this.vectorY = 0;
        this.accelX = 0;
        this.accelY = 0;
        this.lastX = x;
        this.lastY = y;
        this.inputAccelX = 0;
        this.grounded = false;

        this.initKeyBinds(scene);
        this.sfx = {};
        this.sfx.jump = scene.sound.add('jump');
        this.sfx.psi = scene.sound.add('psi');

        this.influences = new Set();

        this.player = new Phaser.GameObjects.Sprite(
            scene,
            0,
            0,
            'mushroom'
        );
        // this.player.active = true;


        this.add(this.player);

    }

    initKeyBinds(scene) {
        this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keyQ.emitOnRepeat = false;
        this.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    updateKeyBinds() {
        if (this.keySpace.isDown && this.grounded) {
            // TODO is changing grounded here right?
            // this.grounded = false;
            this.adjustVectorY(Player.jumpSpeed);
            try {
                this.sfx.jump.play();
            } catch (e) {

            }
        }

        // if (this.keyQ.isDown && !isPresent(this.water)) {
        if (this.keyQ.isDown) {
            this.add(new Water({
                scene: this.scene,
                asset: 'rain',
                parent: this.player
            }));
            // if (!this.sfx.psi.isPlaying) {
            //     this.sfx.psi.play();
            // }
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
        this.updatePlayer();
        // this.water.update();
        for (let child of this.list) {
            child.update();
        }
    }

    updatePlayer() {
        // console.log('pc x y', this.x, this.y, this.width, this.height, this.vectorX, this.vectorY, this.accelX,
        // this.accelY);
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
        this.y += this.vectorY;
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

    getBounds() {
        return this.player.getBounds();
    }

    getHeight() {
        return this.player.displayHeight;
    }
}
