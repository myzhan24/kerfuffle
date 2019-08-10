/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom';
import BottomPlatform from '../sprites/platforms/BottomPlatform';
import BottomBoundary from '../sprites/platforms/BottomBoundary';
import RightBoundary from '../sprites/platforms/RightBoundary';
import LeftBoundary from '../sprites/platforms/LeftBoundary';
import TopBoundary from '../sprites/platforms/TopBoundary';
import PlayerContainer from '../sprites/PlayerContainer';

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
        // this.universe.runChildUpdate = true;
        this.boundaries = this.add.group();

        this.mushroom = new Mushroom({
            scene: this,
            x: 400,
            y: 300
        });

        this.topBoundary = new TopBoundary({
            scene: this,
            asset: 'platform'
        });

        this.rightBoundary = new RightBoundary({
            scene: this,
            asset: 'platform'
        });

        this.bottomBoundary = new BottomBoundary({
            scene: this,
            asset: 'platform'
        });

        this.leftBoundary = new LeftBoundary({
            scene: this,
            asset: 'platform'
        });

        // this.universe.add(this.add.existing(this.player));
        // this.universe.add(this.add.existing(this.mushroom));
        // this.universe.add(this.add.existing(this.water));

        // this.add.text(100, 100, 'Phaser 3 - ES6 - Webpack ', {
        //     font: '64px Bangers',
        //     fill: '#7744ff'
        // });



        this.test = new BottomPlatform({scene: this, x: 200, y: 700, w: 100, h: 20, asset: 'platform'});

        this.b = new BottomPlatform({scene: this, x: 200, y: 600, w: 100, h: 20, asset: 'platform'});

        this.c = new BottomPlatform({scene: this, x: 200, y: 500, w: 100, h: 20, asset: 'platform'});

        this.d = new BottomPlatform({scene: this, x: 200, y: 400, w: 100, h: 20, asset: 'platform'});

        this.e = new BottomPlatform({scene: this, x: 200, y: 300, w: 100, h: 20, asset: 'platform'});

        this.f = new BottomPlatform({scene: this, x: 200, y: 200, w: 100, h: 20, asset: 'platform'});
        this.playerContainer = new PlayerContainer({scene: this, x: 200, y: 300});
        this.add.existing(this.playerContainer);
        this.boundaries.addMultiple([
            this.add.existing(this.rightBoundary),
            this.add.existing(this.leftBoundary),
            this.add.existing(this.topBoundary),
            this.add.existing(this.bottomBoundary),
            this.add.existing(this.test),
            this.add.existing(this.b),
            this.add.existing(this.c),
            this.add.existing(this.d),
            this.add.existing(this.e),
            this.add.existing(this.f)
        ]);


    }

    update() {
        this.playerContainer.update();

        for (let boundary of this.boundaries.getChildren()) {
            if (!this.playerContainer.ignoreInfluence() && boundary.shouldInfluence(this.playerContainer)) {
                this.playerContainer.addInfluence(boundary);
            }
        }

        this.playerContainer.updatePositionInfluences();

        // for (let child of this.universe.getChildren()) {
        //     child.update();
        //
        //     for (let boundary of this.boundaries.getChildren()) {
        //         if (!child.ignoreInfluence() && boundary.shouldInfluence(child)) {
        //             child.addInfluence(boundary);
        //         }
        //     }
        //
        //     child.updatePositionInfluences();
        // }
    }
}
