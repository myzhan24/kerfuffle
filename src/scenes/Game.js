/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom';
import Player from '../sprites/Player';
import Boundary from '../sprites/Boundary';
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

        this.topBoundary = new Boundary({
            scene: this,
            asset: 'platform',
            direction: 0
        });

        this.rightBoundary = new Boundary({
            scene: this,
            asset: 'platform',
            direction: 1
        });

        this.bottomPlatform = new Boundary({
            scene: this,
            asset: 'platform',
            direction: 2
        });

        this.leftBoundary = new Boundary({
            scene: this,
            asset: 'platform',
            direction: 3
        });

        this.universe.add(this.add.existing(this.player));
        this.universe.add(this.add.existing(this.mushroom));

        this.add.text(100, 100, 'Phaser 3 - ES6 - Webpack ', {
            font: '64px Bangers',
            fill: '#7744ff'
        });
        this.add.existing(this.rightBoundary);
        this.add.existing(this.leftBoundary);
        this.platforms.add(this.add.existing(this.bottomPlatform));
        this.add.existing(this.topBoundary);
    }

    update() {
        // this.updateKeyBinds();
        // If a universe Object intersects with a platform, reset its y and vector y
        for (let uniObj of this.universe.getChildren()) {
            uniObj.grounded = false;

            for (let platform of this.platforms.getChildren()) {
                // universe object hit the ground
                if (overlaps(uniObj, platform)) {
                    uniObj.grounded = true;

                    uniObj.y = platform.y - uniObj.height / 2;
                    if (uniObj.vectorY < 0) {
                        uniObj.vectorY = 0;
                    }

                    // Assume this object can only overlap with one platform at a time.
                    // if (!this.keyLeft.isDown && !this.keyRight.isDown) {
                    //     uniObj.decayVectorX();
                    // }


                    break;
                }
            }
        }
    }
}
