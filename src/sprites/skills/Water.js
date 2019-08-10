import UniverseObject from '../UniverseObject';
import {dist} from '../../utils';
import {images} from '../../../assets';

export default class extends UniverseObject {
    constructor({scene, parent, parentContainer, asset = images.subi}) {
        super({scene, x: parent.x, y: parent.y, asset});
        this.mzparentContainer = parentContainer;
        this.parent = parent;
        this.parentMass = 10000;
        this.radius = Math.random() * 100 + this.parent.displayHeight / 2 + 10;
        this.putAroundParent();
    }

    putAroundParent() {
        const radius = this.radius;
        const angle = Math.random() * 2 * Math.PI;
        const sideX = Math.cos(angle) * radius;
        const sideY = Math.sin(angle) * radius;

        const cLength = Math.sqrt(sideX * sideX + sideY * sideY);

        this.x = this.parent.x + sideX;
        this.y = this.parent.y + sideY;


        const V = Math.sqrt(this.parentMass / cLength);
        this.vectorX = sideY / cLength * V;
        this.vectorY = sideX / cLength * -1 * V;
    }

    update() {
        const sideX = this.x - this.parent.x;
        const sideY = this.y - this.parent.y;
        const cLength = dist(this, this.parent);
        const Fg = this.parentMass / (cLength * cLength);
        const angle = Math.asin(sideY / cLength);

        if (sideX > 0) {
            this.setAccelX(((-1) * (((Math.abs(Math.cos(angle) * Fg))))));
        } else if (sideX < 0) {
            this.setAccelX(((((Math.abs(Math.cos(angle) * Fg))))));
        }
        if (sideY > 0) {
            this.setAccelY((((-1) * ((Math.abs(Math.sin(angle) * Fg))))));
        } else if (sideY < 0) {
            this.setAccelY(((((Math.abs(Math.sin(angle) * Fg))))));
        }

        this.vectorX += this.accelX;
        this.vectorY += this.accelY;
        this.x += this.vectorX;
        this.y += this.vectorY;

        // if (cLength > 500) {


        // let test = 1 / (1 + (1 / (cLength)));
        // this.x -= (this.mzparentContainer.x - this.mzparentContainer.lastX) * test;
        // this.y -= (this.mzparentContainer.y - this.mzparentContainer.lastY) * test;
        // console.log('c l', this.x, this.y);
        // }


        // this.x += this.parent.vectorX;
        // this.y += this.parent.vectorY;

        // console.log('water dist angle vX vY', cLength, '\t', angle, '\t', this.vectorX, '\t', this.vectorY);

        if (this.vectorX < 0) {
            this.rotation = 1.5708 + Math.atan(this.vectorY / this.vectorX);
        } else {
            this.rotation = -1.5708 + Math.atan(this.vectorY / this.vectorX);
        }

        // console.log('water dist', cLength);
    }
}
