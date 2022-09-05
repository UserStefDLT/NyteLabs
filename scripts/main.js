'use sctric'

const s = {
    h: window.innerHeight,
    w: window.innerWidth,

    mouse: {
        x: 0,
        y: 0,
        z: 0,
        tracking: false
    },

    tile: {
        real_h: 16,
        real_w: 16,
        h: 20,
        w: 20,
        margin: 16,
        fill: 0
    },
    grid: {
        h: window.innerHeight,
        w: window.innerWidth,
        cols: 15,
        rows: 15,
        margin: 16
    },

    canvas: {
        h: window.innerHeight,
        w: window.innerWidth,
    },

    s: false,
    steps: false,
    tags: false,
    log: true,
    lockKeys: false,
    pause: false,
    q: false
}

