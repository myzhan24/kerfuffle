/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom';
import Player from '../sprites/Player';
import Boundary from '../sprites/Boundary';
import Platform from '../sprites/Platform';

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
        this.boundaries = this.add.group();

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

        this.bottomBoundary = new Boundary({
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


        this.platformA = new Platform({scene: this, x: 400, y: 500, w: 100, h: 5, asset: 'platform', direction: 2});
        this.platformA2 = new Platform({scene: this, x: 400, y: 505, w: 100, h: 5, asset: 'platform', direction: 0});

        this.platformB = new Platform({scene: this, x: 200, y: 700, w: 100, h: 5, asset: 'platform', direction: 2});

        this.platformEN = new Platform({scene: this, x: 400, y: 700, w: 100, h: 1, asset: 'platform', direction: 2});
        this.platformES = new Platform({scene: this, x: 400, y: 720, w: 100, h: 1, asset: 'platform', direction: 0});

        this.platformEE = new Platform({scene: this, x: 510, y: 710, w: 1, h: 1, asset: 'platform', direction: 3});

        this.platformEW = new Platform({scene: this, x: 390, y: 710, w: 1, h: 1, asset: 'platform', direction: 1});

        this.platformC = new Platform({scene: this, x: 600, y: 300, w: 100, h: 5, asset: 'platform', direction: 2});

        this.platformD = new Platform({scene: this, x: 800, y: 200, w: 100, h: 5, asset: 'platform', direction: 2});

        this.boundaries.addMultiple([
            this.add.existing(this.topBoundary),
            this.add.existing(this.rightBoundary),
            this.add.existing(this.bottomBoundary),
            this.add.existing(this.leftBoundary),
            this.add.existing(this.platformA),
            this.add.existing(this.platformA2),
            this.add.existing(this.platformES),
            this.add.existing(this.platformEN),
            this.add.existing(this.platformEE),
            this.add.existing(this.platformEW),
            this.add.existing(this.platformB),
            this.add.existing(this.platformC),
            this.add.existing(this.platformD)
        ]);
    }

    update() {
        // If a universe Object intersects with a platform, reset its y and vector y
        for (let child of this.universe.getChildren()) {
            child.grounded = false;

            for (let boundary of this.boundaries.getChildren()) {
                if (boundary.keepSpriteInBounds(child)) {
                    break;
                }
            }
        }
    }
}
