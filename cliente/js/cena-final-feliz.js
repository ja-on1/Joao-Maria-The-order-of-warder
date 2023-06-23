export default class finalFeliz extends Phaser.Scene {
  constructor() {
    super("finalFeliz");
  }

  preload() {
    this.load.image("logo", "./assets/logo.png");
  }

  create() {
    this.imagem = this.add
      .image(400, 225, "logo")
      .setTint(0xffff00)
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("abertura");
      });

    this.texto = this.add.text(490, 50, "Final feliz!", {
      fill: "#000000",
    });
  }
}
