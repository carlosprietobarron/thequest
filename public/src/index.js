import Phaser from "phaser";
import { BootScene } from './bootScene'
import { WorldScene} from './worldScene'
import { BattleScene } from './battleScene'
import { UIScene } from './UIScene'

  var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 320,
    height: 240,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    zoom: 2,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: true
      }
    },
    scene: [
      BootScene,
      WorldScene,
      BattleScene,
      UIScene
      ]
    };

    const game =  new Phaser.Game(config);
