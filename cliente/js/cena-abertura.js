export default class abertura extends Phaser.Scene {
  constructor() {
    super("abertura");
  }

  preload() {
    this.load.image("abertura", "./assets/abertura.png");
    this.load.spritesheet("botao", "./assets/botões/botao_salas.png", {
      frameWidth: 64,
      frameHeight: 32,
    });
  }

  create() {
    /* imagem de fundo */
    this.imagem = this.add
      .image(400, 225, "abertura")
      .setInteractive()
      .on("pointerdown", () => {
        this.imagem.destroy();
        this.texto.destroy();
        this.game.scene.start("sala");
      });

    /* Botões */
    this.salas = [
      {
        numero: 1,
        x: 150,
        y: 125,
        frame: 0,
      },
      {
        numero: 2,
        x: 150,
        y: 175,
        frame: 2,
      },
      {
        numero: 3,
        x: 150,
        y: 225,
        frame: 4,
      },
      {
        numero: 4,
        x: 150,
        y: 275,
        frame: 6,
      },
      {
        numero: 5,
        x: 150,
        y: 325,
        frame: 8,
      },
      {
        numero: 6,
        x: 450,
        y: 125,
        frame: 10,
      },
    ];

    this.salas.forEach((item) => {
      item.botao = this.add
        .image(item.x, item.y, "botao", item.frame)
        .setInteractive()
        .on("pointerdown", () => {
          item.botao.setFrame(item.frame + 1);
        })
        .on("pointerup", () => {
          this.salas.forEach((item) => {
            item.botao.destroy();
          });
          this.game.sala = item.numero;
          this.game.socket.emit("entrar-na-sala", this.game.sala);
        });
    });

    this.game.socket.on("jogadores", (jogadores) => {
      if (jogadores.segundo) {
        this.game.jogadores = jogadores;
        this.game.scene.start("principal");
      } else if (jogadores.primeiro) {
        this.imagem.destroy();
        this.texto = this.add.text(50, 50, "Aguardando jogador...")
      }
    });
  }

  upload() {}
}
