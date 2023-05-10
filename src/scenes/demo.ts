import * as Phaser from 'phaser';
import Background from '../components/background';
import Player from '../components/player';
import Controls from '../components/controls/controls';

export default class Demo extends Phaser.Scene {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    controls: Controls;
    background: Background;
    player: Player;

    constructor() {
        super('demo');
    }

    preload() {
        // this.load.image('logo', 'assets/phaser3-logo.png');
        // this.load.image('libs', 'assets/libs.png');
        // this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        // this.load.glsl('stars', 'assets/starfields.glsl.js');
        this.load.image('background', 'assets/Background.png');
        this.load.image('desert_tiles', 'assets/Desert.png');
        this.load.tilemapTiledJSON('desert_map', 'assets/DesertMap.json');
        this.load.spritesheet('player', 'assets/Player.png', { frameWidth: 32, frameHeight: 32 });
        this.load.image('controls', 'assets/controls.png');
        // this.load.once('filecomplete-tilemapJSON-desert_day_map', (key, type, data) => {
        //     console.log('filecomplete-tilemapJSON-desert_day_map: ', key, type, data);
        //     for (let tileset of data.tilesets) {
        //         console.log(tileset);
        //         for (let tile of tileset.tiles) {
        //             console.log(tile);
        //             this.load.image(tile.image, tile.image);
        //         }
        //         // this.load.image(tileset.name, tileset.image);
        //     }
        // },
        //     this
        // );
    }

    create() {
        let { width, height } = this.sys.game.canvas;

        console.log(this);
        const map = this.make.tilemap({ key: 'desert_map' });
        map.setCollision([2]);
        console.log('map: ', map);
        const tiles = map.addTilesetImage('Desert', 'desert_tiles');
        console.log('tilesets: ', map.tilesets);

        this.cameras.main.setBackgroundColor('#000000')
        this.cameras.main.fadeIn()

        // this.cameras.main.setBounds(map.size.x, map.size.y, map.size.width, map.size.height)
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // this.physics.world.setBounds(map.size.x, map.size.y, map.size.width, map.size.height)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        this.input.addPointer(1);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.background = new Background(this);

        const layer = map.createLayer(0, tiles, 0, 0);
        this.player = new Player(this, 100, 100);
        this.controls = new Controls(this);

        this.physics.add.collider(this.player, layer);
        console.log(layer);
    }

    update() {
        this.background.parallax();
        this.player.update(this.cursors, this.controls);
        this.controls.update();
    }
}