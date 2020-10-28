import { SceneMain } from './sceneMain'

window.onload = () =>{
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 720,
        parent: 'phaser-game',
        scene: [SceneMain]
    };
}