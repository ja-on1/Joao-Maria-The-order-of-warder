export default class abertura extends Phaser.Scene {
  constructor() {
    super("abertura");
  }

  preload() {
    this.load.image("abertura", "./assets/abertura.png");
  }

  create() {
    /* imagem de fundo */
    this.imagem = this.add
      .image(400, 225, "abertura")
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("principal");
      });
    /* Texto em destaque */
    this.texto = this.add.text(300, 300, "Start", {
      fill: "#FFFFFF",
    });
  }

  upload() {}
}
