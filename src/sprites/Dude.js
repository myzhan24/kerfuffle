import UniverseMember from './UniverseMember';
import {DudeConstants, Physics} from '../constants/Constants';
import {clamp} from '../config';

export default class extends UniverseMember {
    constructor({scene, anims, cursors, asset}) {
        super();
        this.scene = scene;
        this.asset = asset;
        this.cursors = cursors;
        this.anims = anims;
        this.inputAccelX = 0;

        this.create();
    }

    create() {
        this.sprite = this.scene.physics.add.sprite(100, 450, this.asset);
        //  physics properties. Give the little guy a slight bounce.
        this.sprite.setBounce(0.1);
        this.sprite.setCollideWorldBounds(true);

        this.createAnimations();
        this.createSfx();
    }

    /**
     * Our player animations, turning, walking left and walking right.
     */
    createAnimations() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.asset, {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{key: this.asset, frame: 4}],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.asset, {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });
    }

    createSfx() {
        this.sfx = {};
        this.sfx.jump = this.scene.sound.add('jump');
        this.sfx.psi = this.scene.sound.add('psi');
    }

    updatePlayer() {
        this.updateKeyBinds();

        // this.updateVectorInfluences();

        if (this.inputAccelX > 0) {
            if (this.getVectorX() < DudeConstants.maxRunSpeed) {
                this.adjustVectorX(this.inputAccelX);
                this.setVectorX(clamp(this.getVectorX(), -DudeConstants.maxRunSpeed, DudeConstants.maxRunSpeed));
            }
        } else if (this.inputAccelX < 0) {
            if (this.getVectorX() > -DudeConstants.maxRunSpeed) {
                this.adjustVectorX(this.inputAccelX);
                this.setVectorX(clamp(this.getVectorX(), -DudeConstants.maxRunSpeed, DudeConstants.maxRunSpeed));
            }
        }
    }

    updateKeyBinds() {
        if (this.cursors.space.isDown && this.isGrounded()) {
            // TODO is changing grounded here right?
            // this.isGrounded() = false;

            this.adjustVectorY(DudeConstants.jumpSpeed);
            try {
                this.sfx.jump.play();
            } catch (e) {

            }
        }

        // if (this.keyQ.isDown && !isPresent(this.water)) {
        if (this.cursors.shift.isDown) {
            // this.add(new Water({
            //     scene: this.scene,
            //     parent: this.player,
            //     parentContainer: this
            // }));
            if (!this.sfx.psi.isPlaying) {
                this.sfx.psi.play();
            }
        }

        if (this.cursors.left.isDown) {
            // Left Pressed
            this.inputAccelX = -this.getAccelMu() * DudeConstants.accel;
            this.getSprite().anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            // Right Pressed
            this.inputAccelX = this.getAccelMu() * DudeConstants.accel;
            this.getSprite().anims.play('right', true);
        } else {
            // Neither Left or Right is being pressed.
            // Stop moving when reaching a low enough speed
            if (this.getVectorX() === 0 || Math.abs(this.getVectorX()) <= (Physics.groundFrictionMu * DudeConstants.frictionAccel) / 2) {
                this.inputAccelX = 0;
                this.setVectorX(0);
                this.getSprite().anims.play('turn');
            } else {
                this.inputAccelX = this.getFrictionMu() * DudeConstants.frictionAccel * (this.getVectorX() < 0 ? 1 : -1);
            }
        }
    }

    update() {
        this.updatePlayer();
        console.log('vX', this.getVectorX(), 'vY', this.getVectorY());
    }

    /**
     * returns an acceleration of friction in the opposite magnitude this player is translating.
     * @returns {number}
     */
    getFrictionMu() {
        return this.isGrounded() ? Physics.groundFrictionMu : Physics.airFrictionMu;
    }

    getAccelMu() {
        return this.isGrounded() ? Physics.groundAccelMu : Physics.airAccelMu;
    }

    setVectorX(vector) {
        this.getSprite().body.velocity.x = vector;
    }

    getVectorX() {
        return this.getSprite().body.velocity.x;
    }

    getVectorY() {
        return this.getSprite().body.velocity.y;
    }

    adjustVectorX(value) {
        this.getSprite().body.velocity.x += value;
    }

    adjustVectorY(value) {
        this.getSprite().body.velocity.y += value;
    }

    setVectorY(vector) {
        this.getSprite().body.velocity.y = vector;
    }

    setAccelX(vector) {
        this.getSprite().body.acceleration.x = vector;
    }

    setAccelY(vector) {
        this.getSprite().body.acceleration.y = vector;
    }

    isGrounded() {
        return this.getSprite().body.touching.down;
    }

    getSprite() {
        return this.sprite;
    }
}