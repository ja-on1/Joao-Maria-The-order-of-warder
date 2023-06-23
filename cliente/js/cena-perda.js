export default class final_feliz extends Phaser.Scene {
  constructor() {
    super("perda");
  }

  preload() {
    this.load.image("perdeu", "./assets/perdeu.png");
  }

  create() {
    this.imagem = this.add
      .image(400, 225, "perdeu")
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("abertura");
      });
  }

  upload() {}
}