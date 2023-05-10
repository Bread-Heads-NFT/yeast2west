import * as Phaser from 'phaser';
import Demo from './scenes/demo';
import LoginScene from './scenes/login';
import ChooserScene from './scenes/chooser';

type scaleMode = 'FIT' | 'SMOOTH'

export const DEFAULT_WIDTH: number = 1280
export const DEFAULT_HEIGHT: number = 720
export const MAX_WIDTH: number = DEFAULT_WIDTH * 1.5
export const MAX_HEIGHT: number = DEFAULT_HEIGHT * 1.5
export let SCALE_MODE: scaleMode = 'SMOOTH' // FIT OR SMOOTH

export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: '#FFFFFF',
    parent: 'phaser-game',
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    scale: {
      // The game will be scaled manually in the resize()
      mode: Phaser.Scale.FIT
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1500 },
            debug: true
        },
    },
    scene: [LoginScene, ChooserScene, Demo]
};