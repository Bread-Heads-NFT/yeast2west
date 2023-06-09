import * as Phaser from 'phaser';
import { config, DEFAULT_HEIGHT, DEFAULT_WIDTH, MAX_HEIGHT, MAX_WIDTH, SCALE_MODE } from './config';

window.addEventListener('load', () => {
    const game = new Phaser.Game(config);
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.visibility = 'hidden';

    // the custom resize function
    // const resize = () => {
    //     const w = window.innerWidth
    //     const h = window.innerHeight

    //     let width = DEFAULT_WIDTH
    //     let height = DEFAULT_HEIGHT
    //     let maxWidth = MAX_WIDTH
    //     let maxHeight = MAX_HEIGHT
    //     let scaleMode = SCALE_MODE

    //     let scale = Math.min(w / width, h / height)
    //     let newWidth = Math.min(w / scale, maxWidth)
    //     let newHeight = Math.min(h / scale, maxHeight)

    //     let defaultRatio = DEFAULT_WIDTH / DEFAULT_HEIGHT
    //     let maxRatioWidth = MAX_WIDTH / DEFAULT_HEIGHT
    //     let maxRatioHeight = DEFAULT_WIDTH / MAX_HEIGHT

    //     // smooth scaling
    //     let smooth = 1
    //     if (scaleMode === 'SMOOTH') {
    //         const maxSmoothScale = 1.15
    //         const normalize = (value: number, min: number, max: number) => {
    //             return (value - min) / (max - min)
    //         }
    //         if (width / height < w / h) {
    //             smooth =
    //                 -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale
    //         } else {
    //             smooth =
    //                 -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale
    //         }
    //     }

    //     // resize the game
    //     game.scale.resize(newWidth * smooth, newHeight * smooth)

    //     // scale the width and height of the css
    //     game.canvas.style.width = newWidth * scale + 'px'
    //     game.canvas.style.height = newHeight * scale + 'px'

    //     // center the game with css margin
    //     game.canvas.style.marginTop = `${(h - newHeight * scale) / 2}px`
    //     game.canvas.style.marginLeft = `${(w - newWidth * scale) / 2}px`
    // }
    // window.addEventListener('resize', event => {
    //     resize()
    // })
    // resize()
});