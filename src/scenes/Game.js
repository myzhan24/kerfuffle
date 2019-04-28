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
    }

    preload() {
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
        // If a universe Object intersects with a platform, reset its y and vector y
        for (let uniObj of this.universe.getChildren()) {
            for (let platform of this.platforms.getChildren()) {
                if (overlaps(uniObj, platform)) {
                    uniObj.y = platform.y - uniObj.height / 2;
                    uniObj.vectorY = 0;

                    // Assume this object can only overlap with one platform at a time.
                    break;
                }
            }
        }
    }
}
