import AbstractPlatform from './AbstractPlatform';
import { Platform } from '../../constants/Constants';

export default class extends AbstractPlatform {
    constructor({scene, asset}) {
        // N E S W, 0 1 2 3
        super({
            scene,
            x: 0,
            y: 0,
            w: scene.sys.game.config.width,
            asset
        });

        this.init(scene);
    }

    init(scene) {
    }

    influence(sprite) {
        sprite.vectorY -= Platform.accel;
    }

    haltsMovement() {
        return true;
    }
}
