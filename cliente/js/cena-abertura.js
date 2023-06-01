export default class abertura extends Phaser.Scene {
  constructor() {
    super("abertura");
  }

  preload() {
    this.load.image("abertura", "./assets/abertura.png");
    this.load.image("servidor", "./assets/servidor.png");
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

        this.servidor = this.add
          .image(400, 225, "servidor")
          .setInteractive()
          .on("pointerdown", () => {
            this.servidor.destroy();
            this.game.scene.start("sala");
          });

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
      });

    /* Botões */
    this.salas = [
      {
        numero: 1,
        x: 300,
        y: 150,
        frame: 0,
      },
      {
        numero: 2,
        x: 300,
        y: 250,
        frame: 2,
      },
      {
        numero: 3,
        x: 300,
        y: 350,
        frame: 4,
      },
      {
        numero: 4,
        x: 500,
        y: 150,
        frame: 6,
      },
      {
        numero: 5,
        x: 500,
        y: 250,
        frame: 8,
      },
      {
        numero: 6,
        x: 500,
        y: 350,
        frame: 10,
      },
    ];

    this.game.socket.on("jogadores", (jogadores) => {
      if (jogadores.segundo) {
        if (this.texto) {
          this.texto.destroy();
        }
        this.game.jogadores = jogadores;
        this.game.scene.start("principal");
      } else if (jogadores.primeiro) {
        this.servidor.destroy();
        this.texto = this.add.text(50, 50, "Aguardando jogador...");

        /* Captura de áudio */
        navigator.mediaDevices
          .getUserMedia({ video: false, audio: true })
          .then((stream) => {
            console.log(stream);
            this.game.midias = stream;
          })
          .catch((error) => console.log(error));
      }
    });
  }

  upload() {}
}
