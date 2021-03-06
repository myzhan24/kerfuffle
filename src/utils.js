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

export function dist(a, b) {
    const xD = a.x - b.x;
    const yD = a.y - b.y;
    return Math.sqrt(xD * xD + yD * yD);
}
