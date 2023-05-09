export default class fim_do_jogo extends Phaser.Scene {
  constructor() {
    super("casa");
  }

  preload() {
    this.load.image("logo", "./assets/logo.png");
  }

  create() {
    this.imagem = this.add
      .image(400, 225, "logo")
      .setTint(0xff0000)
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("principal");
      });

    this.texto = this.add.text(490, 50, "Casa.", {
      fill: "#000000",
    });
  }

  upload() {}
}
