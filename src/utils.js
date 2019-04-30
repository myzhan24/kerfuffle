import Phaser from 'phaser';

export const centerGameObjects = (objects) => {
    objects.forEach(function (object) {
        object.anchor.setTo(0.5)
    })
};

export function overlaps(spriteA, spriteB) {
    return Phaser.Geom.Intersects.RectangleToRectangle(spriteA.getBounds(), spriteB.getBounds());
}

export function isPresent(obj) {
    return obj !== null && obj !== undefined;
}

export function isAbove(spriteA, spriteB) {
    let lowest = spriteA.y + spriteA.displayHeight / 8;
    let isAbove = (lowest) < spriteB.y;
    // console.log('spriteA y', spriteA.y, 'spriteA height', spriteA.displayHeight, 'lowest', lowest , 'spriteB y', spriteB.y, 'isAbove:', isAbove);
    return isAbove;
}
