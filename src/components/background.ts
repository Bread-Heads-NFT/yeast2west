import * as Phaser from 'phaser';

export default class Background extends Phaser.GameObjects.TileSprite {
    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, 0, 0, 'background');
        scene.add.existing(this);

        let imgWidth = scene.textures.get('background').getSourceImage().width;
        let imgHeight = scene.textures.get('background').getSourceImage().height;
        let { width, height } = scene.sys.game.canvas;
        this.setOrigin(0).setScale(width / imgWidth, height / imgHeight).setScrollFactor(0);
    }

    // adjustPosition() {
    //     const imgHeight = 324;
    //     this.setScale(this.scene.cameras.main.height / imgHeight);
    //     this.x = this.scene.cameras.main.centerX;
    //     this.y = this.scene.cameras.main.centerY;
    //     this.width = this.scene.cameras.main.width;
    // }

    parallax() {
        // this.tilePositionX = this.scene.cameras.main.worldView.x * 0.2;
    }
}