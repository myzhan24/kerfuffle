import BottomPlatform from './BottomPlatform';

export default class extends BottomPlatform {
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
        this.y = scene.sys.game.config.height - this.displayHeight;
    }
}
