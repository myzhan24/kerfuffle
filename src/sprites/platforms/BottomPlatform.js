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

    shouldInfluence(sprite) {
        return overlaps(this, sprite) && this.isBelow(sprite);
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
