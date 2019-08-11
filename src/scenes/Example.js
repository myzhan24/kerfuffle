import Phaser from 'phaser'
import {images} from '../../assets'
import Dude from '../sprites/Dude'

export default class extends Phaser.Scene {
    constructor() {
        super({key: 'ExampleScene'})
    }

    preload() {
        this.score = 0;
        this.gameOver = false;

        this.load.image(images.sky, 'assets/sky.png');
        this.load.image(images.ground, 'assets/platform.png');
        this.load.image(images.star, 'assets/star.png');
        this.load.image(images.bomb, 'assets/bomb.png');
        this.load.spritesheet(images.dude, 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
    }

    addToUniverse(universeMember) {
        this.universeMembers.push(universeMember);
    }

    updateUniverse() {
        this.universeMembers.forEach((universeMember)=>{
            universeMember.update();
        });
    }

    create() {
        this.universeMembers = [];
        //  A simple background for our game
        this.add.image(400, 300, images.sky);

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(400, 568, images.ground).setScale(2).refreshBody();

        //  Now let's create some ledges
        this.platforms.create(600, 400, images.ground);
        this.platforms.create(50, 250, images.ground);
        this.platforms.create(750, 220, images.ground);

        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();
        // The player and its settings
        // this.player = this.physics.add.sprite(100, 450, images.dude);
        var test = new Dude({scene: this, anims: this.anims, cursors: this.cursors, asset: images.dude});
        this.addToUniverse(test);
        this.player = test.getSprite();


        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.stars = this.physics.add.group({
            key: images.star,
            repeat: 11,
            setXY: {x: 12, y: 0, stepX: 70}
        });

        this.stars.children.iterate(function (child) {
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        this.bombs = this.physics.add.group();

        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

        //  Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        //  Checks to see if the this.player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
    }

    update() {
        if (this.gameOver) {
            return;
        }

        this.updateUniverse();
    }

    collectStar(player, star) {
        star.disableBody(true, true);

        //  Add and update the score
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        if (this.stars.countActive(true) === 0) {
            //  A new batch of this.stars to collect
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = this.bombs.create(x, 16, images.bomb);
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }
    };

    hitBomb(player, bomb) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        this.gameOver = true;
    }
};
