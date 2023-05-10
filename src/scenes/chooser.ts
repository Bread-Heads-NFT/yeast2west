import * as Phaser from 'phaser';

export default class ChooserScene extends Phaser.Scene {
    constructor() {
        super('chooser');
    }

    preload() {}

    create() {
        this.scene.start('demo');
    }
}