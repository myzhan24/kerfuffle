import AbstractPlatform from './AbstractPlatform';
import { overlaps } from '../../utils';

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

    isBelow(sprite) {
        let lowest = sprite.y + sprite.displayHeight / 8; // 8 instead of 2 for more forgiving tolerance.
        return lowest < this.y;
    }

    keepSpriteInBounds(sprite) {
        if (overlaps(this, sprite) && this.isBelow(sprite)) {
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
