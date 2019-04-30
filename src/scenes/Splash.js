import Phaser from 'phaser'

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'SplashScene'})
    }

    preload() {
        //
        // load your assets
        //
        this.load.image('mushroom', 'assets/images/mushroom2.png');
        this.load.image('platform', 'assets/images/platform.png');
        this.load.image('rain', 'assets/images/rain.png');
    }

    create() {
        this.scene.start('GameScene')
    }

    update() {

    }
}
