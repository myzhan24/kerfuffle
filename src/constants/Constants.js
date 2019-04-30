export const Physics = {
    gravity: -0.8, // Y Acceleration downward
    airAccelMu: 0.5, // X Acceleration multiplier in the Air
    groundAccelMu: 1, // X Acceleration multiplier on the Ground
    airFrictionMu: 0.25, // X Deceleration multiplier in the Air
    groundFrictionMu: 2 // X Deceleration multiplier on the Ground
}

export const Player = {
    accel: 5, // Player base acceleration constant
    frictionAccel: 1, // Player base deceleration constant
    jumpSpeed: 15, // Speed applied when jumping
    maxRunSpeed: 10 // Max speed from user input
}

export const Platform = {
    accel: 3
}

