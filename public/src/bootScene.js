import Phaser from "phaser";
import { User } from "./user";
import { domUtils } from './domUtils';
import spritesheet from '../assets/map/spritesheet.png'
import { WorldScene } from './worldScene'

class BootScene extends Phaser.Scene {
 
    constructor() {
      super( { key: 'BootScene' })
    }
   
    preload()
    {
        // load the resources here
        //load bg image
        this.load.image("bg", "./assets/theQuestCover.png" );

        //load items images
        this.load.spritesheet('item', './assets/items.png', { frameWidth: 16, frameHeight: 16 });
        // map tiles
        this.load.image('tiles', './assets/map/roguelikeSheet.png');
        
        // map in json format
        this.load.tilemapTiledJSON('map', './assets/map/finalmap.json');
        
        // our two characters
        this.load.spritesheet('player', './assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
       
        //load enemies
        this.load.image("dragonblue", "./assets/dragonblue.png");
        this.load.image("dragonorrange", "./assets/dragonorrange.png");
        //load background initial scene
        this.load.image("backg", "./assets/theQuestCover.png");
        //startbtn
        this.load.image("startbtn", "./assets/start-btn.png");
        this.load.image("startbtn-hover", "./assets/start-btn-hover.png");
        
        this.load.audio("startMusic", "./assets/game1.mp3");
        //loadingBar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        });
  
        this.load.on("progress", (percentage) =>{
          loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percentage, 50 );
          console.log(percentage);
        })
     }
       
    create() {
      //this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "logo");

      this.add.image(0,0,"bg").setOrigin(0);

      //let playbutton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.50,"startbtn");
      //this.scene.start("WorldScene");

      this.playbutton = this.add.sprite(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.50,
        'startbtn',
      );

      //this.sound.play("startMusic");

      this.playbutton.setInteractive();

      this.playbutton.on("pointerover", () =>{
        console.log("create button event hover");
        this.playbutton.setTexture("startbtn-hover");
      }, this);

      this.playbutton.on("pointerdown", () =>{
        console.log("create button event down");
        this.playbutton.setTexture("startbtn-hover");
      }, this);

      this.playbutton.on("pointerout", () => {
        console.log("create button event out");
        this.playbutton.setTexture("startbtn");
      }, this);

      this.playbutton.on("pointerup", () =>{
        console.log("create button event hover");
        this.playbutton.setTexture("startbtn");
        if (localStorage.getItem('user').length > 0) { 
          this.sound.stopAll();
          this.scene.start("WorldScene");
        } else {
          alert('fill in username');
        }
      }, this);
     this.playbutton.setVisible(false);
     this.playbutton.setActive(false);
     this.saveUser();
     
    // this.scene.start("WorldScene");
    }
      saveUser() { // eslint-disable-line class-methods-use-this
        const userName = domUtils.element('nameInput');
        const save = domUtils.element('startbtn');
        localStorage.clear();
        save.onclick = () => {
          if (userName.value !== '') {
            let user = new User(userName.value);
            localStorage.setItem('user', JSON.stringify(user));
            domUtils.dismissComponent('user-form');
            this.sound.stopAll();
            this.scene.start("WorldScene");
          } else {
            alert('fill in username'); // eslint-disable-line no-alert
          }
        };
      } 
    
}

export { BootScene }