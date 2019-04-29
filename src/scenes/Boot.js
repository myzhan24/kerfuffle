import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'BootScene'})
    }

    preload() {
        this.fontsReady = false
        this.fontsLoaded = this.fontsLoaded.bind(this)
        this.add.text(100, 100, 'loading fonts...')

        this.load.image('loaderBg', './assets/images/loader-bg.png')
        this.load.image('loaderBar', './assets/images/loader-bar.png')

        this.load.audio('sfx', './assets/audio/SoundEffects/8.mp3');
        this.load.audio('cursor1', './assets/audio/SoundEffects/cursor1.wav');
        this.load.audio('cursor2', './assets/audio/SoundEffects/cursor2.wav');
        this.load.audio('jump', './assets/audio/SoundEffects/jump.mp3');

        WebFont.load({
            google: {
                families: ['Bangers']
            },
            active: this.fontsLoaded
        })
    }

    update() {
        if (this.fontsReady) {
            this.scene.start('SplashScene')
        }
    }

    fontsLoaded() {
        this.fontsReady = true
    }
}
