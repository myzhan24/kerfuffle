import AbstractPlatform from './AbstractPlatform';
import { Platform } from '../../constants/Constants';

export default class extends AbstractPlatform {
    constructor({scene, asset}) {
        // N E S W, 0 1 2 3
        super({
            scene,
            x: 0,
            y: 0,
            h: scene.sys.game.config.height,
            asset
        });

        this.init(scene);
    }

    init(scene) {
        this.x = scene.sys.game.config.width - this.displayWidth;
    }

    influence(sprite) {
        sprite.vectorX -= Platform.accel;
    }

    haltsMovement() {
        return true;
    }
}
