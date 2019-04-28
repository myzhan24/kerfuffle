/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom';
import Player from '../sprites/Player';
import Platform from '../sprites/Platform';
import { overlaps } from '../utils';

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene'})
    }

    init() {
        this.initKeyBinds();
    }

    preload() {
    }

    initKeyBinds() {
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    updateKeyBinds() {
        if (this.keyA.isDown) {
            this.player.vectorY = 11;
        }

        if (this.keyLeft.isDown && this.player.vectorX > -10) {
            this.player.accelX = -1;
            if (this.player.vectorX == 0) {
                this.player.setVectorX(-6);
            } else if (this.player.vectorX > 0) {
                this.player.setVectorX(-3);
            }
        } else if (this.keyRight.isDown && this.player.vectorX < 10) {
            this.player.accelX = 1;
            if (this.player.vectorX == 0) {
                this.player.setVectorX(6);
            } else if (this.player.vectorX < 0) {
                this.player.setVectorX(3)
            }
        } else {
            this.player.accelX = 0;
            // this.player.decayVectorX();
        }
    }

    create() {
        this.universe = this.add.group();
        this.universe.runChildUpdate = true;

        this.platforms = this.add.group();


        this.mushroom = new Mushroom({
            scene: this,
            x: 400,
            y: 300,
            asset: 'mushroom'
        });

        this.player = new Player({
            scene: this,
            x: 200,
            y: 300,
            asset: 'mushroom'
        });

        this.bottomPlatform = new Platform({
            scene: this,
            x: 0,
            y: 300,
            asset: 'platform'
        });

        this.universe.add(this.add.existing(this.player));
        this.universe.add(this.add.existing(this.mushroom));

        this.add.text(100, 100, 'Phaser 3 - ES6 - Webpack ', {
            font: '64px Bangers',
            fill: '#7744ff'
        });

        this.platforms.add(this.add.existing(this.bottomPlatform));
    }

    update() {
        this.updateKeyBinds();
        // If a universe Object intersects with a platform, reset its y and vector y
        for (let uniObj of this.universe.getChildren()) {
            for (let platform of this.platforms.getChildren()) {
                if (overlaps(uniObj, platform)) {
                    uniObj.y = platform.y - uniObj.height / 2;

                    if (uniObj.vectorY < 0) {
                        uniObj.vectorY = 0;
                    }
                    // Assume this object can only overlap with one platform at a time.

                    if (!this.keyLeft.isDown && !this.keyRight.isDown) {
                        uniObj.decayVectorX();
                    }


                    break;
                }
            }
        }


        console.log('player', this.player.vectorX);
    }
}
