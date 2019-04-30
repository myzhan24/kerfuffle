import Phaser from 'phaser';
import { isPresent, overlaps } from '../utils';

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, w, h, asset, direction}) {
        // N E S W, 0 1 2 3
        super(scene, x, y, asset);
        if (isPresent(w)) {
            this.displayWidth = w;
        }

        if (isPresent(h)) {
            this.displayHeight = h;
        }

        this.setOrigin(0, 0);
        this.direction = direction;
    }

    keepSpriteInBounds(sprite) {
        if (overlaps(this, sprite)) {
            // S is ground
            if (this.direction === 2) {
                try {
                    sprite.grounded = true;
                } catch (e) {
                    console.log(e);
                }
            }

            switch (this.direction) {
                case 0: // N
                    sprite.y = this.y + this.displayHeight + sprite.displayHeight / 2;
                    if (sprite.vectorY > 0) {
                        sprite.vectorY = 0;
                    }
                    break;

                case 1: // E
                    // sprite.x = this.x - sprite.displayHeight / 2;
                    // if (sprite.vectorX < 0) {
                    //     sprite.vectorX = 0;
                    // }

                    sprite.accelX = -5;
                    break;

                case 2: // S
                    sprite.y = this.y - sprite.displayHeight / 2;
                    if (sprite.vectorY < 0) {
                        sprite.vectorY = 0;
                    }

                    break;

                case 3: // W
                    // sprite.x = this.x + this.displayWidth + sprite.height / 2;
                    // if (sprite.vectorX < 0) {
                    //     sprite.vectorX = 0;
                    // }
                    console.log('XD');
                    sprite.pushRight = true;
                    break;
            }

            return true;
        } else {
            switch (this.direction) {
                case 0: // N

                    break;

                case 1: // E

                    break;

                case 2: // S

                    break;

                case 3: // W
                    // sprite.x = this.x + this.displayWidth + sprite.height / 2;
                    // if (sprite.vectorX < 0) {
                    //     sprite.vectorX = 0;
                    // }


                    break;
            }
        }


        return false;
    }
}
