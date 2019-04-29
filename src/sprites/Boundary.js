import Platform from './Platform';

export default class extends Platform {
    constructor({scene, asset, direction}) {
        // N E S W, 0 1 2 3
        super({
            scene,
            x: 0,
            y: 0,
            w: (direction === 0 || direction === 2) ? scene.sys.game.config.width : null,
            h: (direction === 1 || direction === 3) ? scene.sys.game.config.height : null,
            asset,
            direction
        });

        this.init(scene, direction);
    }

    init(scene, direction) {
        // Set x, y
        switch (direction) {
            case 0: // N
                this.y = 0;
                break;

            case 1: // E
                this.x = scene.sys.game.config.width - this.displayWidth;
                break;

            case 2: // S
                this.y = scene.sys.game.config.height - this.displayHeight;
                break;

            case 3: // W
                this.x = 0;
                break;
        }
    }
}
