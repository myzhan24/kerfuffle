import AbstractPlatform from './AbstractPlatform';
import { overlaps } from '../../utils';
import { clamp } from '../../config';

export default class extends AbstractPlatform {
    constructor({scene, x, y, w, h, asset}) {
        // N E S W, 0 1 2 3
        super({
            scene,
            x,
            y,
            w,
            h,
            asset
        });
    }

    // TODO player can phase through the ground if going too fast!
    shouldInfluence(sprite) {
        return sprite.vectorY <= 0 && overlaps(this, sprite) && this.isBelow(sprite);
    }

    influence(sprite) {
        if (sprite.vectorY <= 0 && !sprite.grounded) {
            sprite.vectorY = 0;
            // sprite.vectorY = 5;
            sprite.grounded = true;
            // console.log('YUP');
        } else {
            // console.log('NOPE');
        }
    }

    influenceY(sprite, proposedY) {
        // return clamp(proposedY, 0, this.y - sprite.displayHeight / 2);
        return clamp(proposedY, 0, this.y - sprite.displayHeight / 2);
    }

    keepSpriteInBounds(sprite) {
        if (this.shouldInfluence(sprite)) {
            if (sprite.vectorY < 0) {
                sprite.y = this.y - sprite.displayHeight / 2;
                if (sprite.vectorY < 0 && !sprite.grounded) {
                    sprite.vectorY = 0;
                    sprite.grounded = true;
                }
            }
        }
    }
}
