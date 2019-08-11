export default class {
    constructor({scene, anims, asset}) {
        this.scene = scene;
        this.asset = asset;
        this.anims = anims;

        this.create();
    }

    create() {
        this.sprite = this.scene.physics.add.sprite(100, 450, this.asset);
        //  physics properties. Give the little guy a slight bounce.
        this.sprite.setBounce(0.1);
        this.sprite.setCollideWorldBounds(true);

        this.createAnimations();
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

    getSprite() {
        return this.sprite;
    }
}
