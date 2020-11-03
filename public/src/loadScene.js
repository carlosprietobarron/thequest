import Phaser from "phaser";

class LoadScene extends Phaser.Scene{
    preload(){
      this.load.image("backg", "./assets/theQuestCover.png");

      this.load.image("startbtn", "./assets/start-btn.png");

      this.load.audio("startMusic", "./assets/game1.mp3");

      let loadingBar = this.add.graphics({
          fillStyle: {
              color: 0xffffff //white
          }
      });

      this.load.on("progress", (percentage) =>{
        loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percentage, 50 );
        console.log(percentage);
      })

      this.load.on("complete", () =>{
        console.log("load complete");
      })
    }

    create(){
      this.add.image(0,0,"./assets/theQuestCover.png").setOrigin(0);
    }

    update(){

    }
}