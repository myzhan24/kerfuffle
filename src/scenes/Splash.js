import Phaser from 'phaser'
import {images} from '../../assets';

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'SplashScene'})
    }

    preload() {
        //
        // load your assets
        //
        this.load.image(images.mushroom, 'assets/images/mushroom2.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image(images.rain, 'assets/images/rain.png');
        this.load.image(images.subi, 'assets/images/01_ninja_star_four_blades.png');

        // Load player assets
        this.loadBoy();
    }

    loadBoy() {
        // this.load.image(images.thiefBoyIdle, 'assets/images/Thief_Boy/Idle.gif');
        // this.load.spritesheet('ms', 'assets/sprites/idle.png', 125, 200);
    }

    create() {
        // this.scene.start('GameScene')
        this.scene.start('ExampleScene')
    }

    update() {

    }
}
