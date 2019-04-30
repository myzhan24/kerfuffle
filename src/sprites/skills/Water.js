import UniverseObject from '../UniverseObject';

export default class extends UniverseObject {
    constructor({scene, parent, asset}) {
        super({scene, x: parent.x, y: parent.y, asset});
        this.parent = parent;
        this.putAroundParent();
    }

    putAroundParent() {
        const radius = Math.random() * 2 + this.parent.displayHeight / 2 + 8;
        const angle = Math.random() * 2 * Math.PI;
        const sideX = Math.cos(angle) * radius;
        const sideY = Math.sin(angle) * radius;
        const cLength = Math.sqrt(sideX * sideX + sideY * sideY);

        this.x = this.parent.x + sideX;
        this.y = this.parent.y + sideY;


        // const V = Math.sqrt(170.667 / cLength);
        // this.vectorX = sideY / cLength * V;
        // this.vectorY = sideX / cLength * -1 * V;
    }

    update() {
        this.angle += 1;
        // this.x = this.parent.x;
        // this.y = this.parent.y;
        this.x += this.parent.x - this.parent.lastX;
        this.y += this.parent.y - this.parent.lastY;
        // console.log('water x y', this.x, this.y);
    }
}
