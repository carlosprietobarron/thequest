import Phaser from "phaser";
import spritesheet from '../assets/map/spritesheet.png'
import { WorldScene } from './worldScene'

class BootScene extends Phaser.Scene {
 
    constructor() {
      super( { key: 'BootScene' })
    }
   
    preload()
    {
        // load the resources here
        // map tiles
        this.load.image('tiles', './assets/map/spritesheet.png');
        
        // map in json format
        this.load.tilemapTiledJSON('map', './assets/map/map.json');
        
        // our two characters
        this.load.spritesheet('player', './assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
       
        //load enemies
        this.load.image("dragonblue", "./assets/dragonblue.png");
        this.load.image("dragonorrange", "./assets/dragonorrange.png");
       
    }
 
    create()
    {
        this.scene.start("WorldScene");
    }
}

export { BootScene }