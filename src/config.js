import Phaser from 'phaser'

export default {
    type: Phaser.AUTO,
    parent: 'content',
    width: 1600,
    height: 900,
    localStorageName: 'phaseres6webpack'
}

export function clamp(value, min, max) {
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    }

    return value;
}
