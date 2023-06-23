export default class finalFeliz extends Phaser.Scene {
  constructor() {
    super("finalFeliz");
  }

  preload() {
    this.load.image("ganhou", "./assets/ganhou.png");
  }

  create() {
    this.imagem = this.add
      .image(400, 225, "ganhou")
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("abertura");
      });
  }
}
