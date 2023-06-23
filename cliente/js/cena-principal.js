export default class principal extends Phaser.Scene {
  constructor() {
    super("principal");
  }

  preload() {
    // Mapa
    /* Tilemap */
    this.load.tilemapTiledJSON("cena-principal", "./assets/mapa-completo.json");

    /* Tilesets */
    this.load.image("chao", "./assets/chao.png");
    this.load.image("casa", "./assets/casa.png");
    this.load.image("arvores", "./assets/arvores.png");
    this.load.image("muros", "./assets/muros.png");
    this.load.image("muros2", "./assets/muros2.png");
    this.load.image("cabana", "./assets/cabana.png");
    this.load.image("estante-de-livros", "./assets/estante-de-livros.png");
    this.load.image("interior", "./assets/interior.png");
    this.load.image("interior-3", "./assets/interior-3.png");
    this.load.image("laboratorio", "./assets/laboratorio.png");
    this.load.image("vazio", "./assets/vazio.png");
    this.load.image("vazio1", "./assets/vazio.png");
    this.load.image("papel_quadros", "./assets/papel_quadros.png");
    this.load.image("inventario", "./assets/inventario.png");
    this.load.image("baby-warder", "./assets/baby-warder.png");

    /* Personagem 1 */
    this.load.spritesheet("João", "./assets/players/joao.png", {
      frameWidth: 32,
      frameHeight: 50,
    });

    /* Personagem 2 */
    this.load.spritesheet("Maria", "./assets/players/maria.png", {
      frameWidth: 32,
      frameHeight: 50,
    });

    /* Artefato */
    this.load.spritesheet("Mochila", "./assets/Mochila.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    /* Portão */
    this.load.spritesheet("portao", "./assets/portao.png", {
      frameWidth: 100,
      frameHeight: 83,
    });

    /*Botões */
    this.load.spritesheet("botao.", "./assets/botões/botao.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    /*tela cheia */
    this.load.spritesheet("tela-cheia", "./assets/botões/tela-cheia.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    /*Monstro */
    this.load.spritesheet("monstro", "./assets/monstro.png", {
      frameWidth: 80,
      frameHeight: 105,
    });

    /*Vida */
    this.load.spritesheet("vida", "assets/vida2.png", {
      frameWidth: 87,
      frameHeight: 29,
    });

    /* Alavanca */
    this.load.spritesheet("interruptor", "./assets/interruptor.png", {
      frameWidth: 41,
      frameHeight: 32,
    });

    /* Artefato */
    this.load.spritesheet("faca", "./assets/faca.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    /* Artefato */
    this.load.spritesheet("botaoportao", "./assets/botaoportao.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    /* Artefato */
    this.load.spritesheet("noticacao", "./assets/notificacao1.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    /* Quadros */
    this.load.image("quadro1", "assets/quadro1.png");
    this.load.image("quadro2", "assets/quadro2.png");
    this.load.image("quadro3", "assets/quadro3.png");
    this.load.image("quadro4", "assets/quadro4.png");

    /* Sons */
    this.load.audio("metal-som", "./assets/metal.mp3");
    this.load.audio("trilha", "./assets/trilha.mp3");
    this.load.audio("colisao-som", "./assets/colisao.mp3");
  }

  create() {
    this.game.fase = 1;

    /* Trilha Sonora */
    this.trilha = this.sound.add("trilha");
    this.trilha.play();

    /* Tilemap */
    this.cena_principal = this.make.tilemap({
      key: "cena-principal",
    });

    /* tilesets */
    this.tileset_principal_chao = this.cena_principal.addTilesetImage(
      "chao",
      "chao"
    );

    this.tileset_principal_chao2 = this.cena_principal.addTilesetImage(
      "chao2",
      "chao"
    );

    this.tileset_principal_casa = this.cena_principal.addTilesetImage(
      "casa",
      "casa"
    );
    this.tileset_principal_arvores = this.cena_principal.addTilesetImage(
      "arvores",
      "arvores"
    );
    this.tileset_principal_muros = this.cena_principal.addTilesetImage(
      "muros",
      "muros"
    );
    this.tileset_principal_muros2 = this.cena_principal.addTilesetImage(
      "muros2",
      "muros2"
    );
    this.tileset_principal_cabana = this.cena_principal.addTilesetImage(
      "cabana",
      "cabana"
    );
    this.tileset_principal_estante = this.cena_principal.addTilesetImage(
      "estante-de-livros",
      "estante-de-livros"
    );
    this.tileset_principal_interior = this.cena_principal.addTilesetImage(
      "interior",
      "interior"
    );
    this.tileset_principal_interior_3 = this.cena_principal.addTilesetImage(
      "interior-3",
      "interior-3"
    );
    this.tileset_principal_laboratorio = this.cena_principal.addTilesetImage(
      "laboratorio",
      "laboratorio"
    );

    /* Layer 0: chão */
    this.terreno = this.cena_principal.createLayer(
      "terreno",
      [
        this.tileset_principal_chao,
        this.tileset_principal_chao2,
        this.tileset_principal_casa,
        this.tileset_principal_arvores,
        this.tileset_principal_muros,
        this.tileset_principal_muros2,
        this.tileset_principal_cabana,
        this.tileset_principal_estante,
        this.tileset_principal_interior,
        this.tileset_principal_interior_3,
        this.tileset_principal_laboratorio,
      ],
      0,
      0
    );

    this.arcas = this.cena_principal.createLayer(
      "arcas",
      [
        this.tileset_principal_chao,
        this.tileset_principal_chao2,
        this.tileset_principal_casa,
        this.tileset_principal_arvores,
        this.tileset_principal_muros,
        this.tileset_principal_muros2,
        this.tileset_principal_cabana,
        this.tileset_principal_estante,
        this.tileset_principal_interior,
        this.tileset_principal_interior_3,
        this.tileset_principal_laboratorio,
      ],
      0,
      0
    );

    /* muros */
    this.muros = this.cena_principal.createLayer(
      "muros",
      [
        this.tileset_principal_chao,
        this.tileset_principal_chao2,
        this.tileset_principal_casa,
        this.tileset_principal_arvores,
        this.tileset_principal_muros,
        this.tileset_principal_muros2,
        this.tileset_principal_cabana,
        this.tileset_principal_estante,
        this.tileset_principal_interior,
        this.tileset_principal_interior_3,
        this.tileset_principal_laboratorio,
      ],

      0,
      0
    );

    this.objetos = this.cena_principal.createLayer(
      "objetos",
      [
        this.tileset_principal_chao,
        this.tileset_principal_chao2,
        this.tileset_principal_casa,
        this.tileset_principal_arvores,
        this.tileset_principal_muros,
        this.tileset_principal_muros2,
        this.tileset_principal_cabana,
        this.tileset_principal_estante,
        this.tileset_principal_interior,
        this.tileset_principal_interior_3,
        this.tileset_principal_laboratorio,
      ],

      0,
      0
    );

    this.objetos_2 = this.cena_principal.createLayer(
      "objetos-2",
      [
        this.tileset_principal_chao,
        this.tileset_principal_chao2,
        this.tileset_principal_casa,
        this.tileset_principal_arvores,
        this.tileset_principal_muros,
        this.tileset_principal_muros2,
        this.tileset_principal_cabana,
        this.tileset_principal_estante,
        this.tileset_principal_interior,
        this.tileset_principal_interior_3,
        this.tileset_principal_laboratorio,
      ],

      0,
      0
    );

    this.input.addPointer(2);

    this.faca = this.physics.add.sprite(7032, 7378, "faca");

    // interruptor1
    this.interruptor = this.physics.add.sprite(3064, 2777, "interruptor");
    this.interruptor.setFrame(0);
    this.interruptor.body.setAllowGravity(false);
    this.interruptor.body.setImmovable(true);

    // interruptor2
    this.interruptor2 = this.physics.add.sprite(6819, 7245, "interruptor");
    this.interruptor2.setFrame(0);
    this.interruptor2.body.setAllowGravity(false);
    this.interruptor2.body.setImmovable(true);

    /* Quadros */
    this.quadro_1 = this.physics.add.sprite(2625, 2750, "quadro1");

    this.quadro_2 = this.physics.add.sprite(2855, 2750, "quadro2");

    this.quadro_3 = this.physics.add.sprite(3055, 2750, "quadro3");

    this.quadro_4 = this.physics.add.sprite(3265, 2750, "quadro4");

    /* jogadores */
    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = "João";
      this.jogador_1 = this.physics.add.sprite(4208, 7268, this.local);
      this.remoto = "Maria";
      this.jogador_2 = this.add.sprite(4208, 7268, this.remoto);
    } else {
      this.remoto = "João";
      this.jogador_2 = this.add.sprite(4208, 7268, this.remoto);
      this.local = "Maria";
      this.jogador_1 = this.physics.add.sprite(4208, 7268, this.local);

      /* Captura de áudio */
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          console.log(stream);

          /* Consulta ao(s) servidor(es) ICE */
          this.game.localConnection = new RTCPeerConnection(
            this.game.ice_servers
          );

          /* Associação de mídia com conexão remota */
          stream
            .getTracks()
            .forEach((track) =>
              this.game.localConnection.addTrack(track, stream)
            );

          /* Oferta de candidatos ICE */
          this.game.localConnection.onicecandidate = ({ candidate }) => {
            candidate &&
              this.game.socket.emit("candidate", this.game.sala, candidate);
          };

          /* Associação com o objeto HTML de áudio */
          this.game.localConnection.ontrack = ({ streams: [stream] }) => {
            this.game.audio.srcObject = stream;
          };

          /* Oferta de mídia */
          this.game.localConnection
            .createOffer()
            .then((offer) =>
              this.game.localConnection.setLocalDescription(offer)
            )
            .then(() => {
              this.game.socket.emit(
                "offer",
                this.game.sala,
                this.game.localConnection.localDescription
              );
            });

          this.game.midias = stream;
        })
        .catch((error) => console.log(error));
    }

    /* Recebimento de oferta de mídia */
    this.game.socket.on("offer", (description) => {
      this.game.remoteConnection = new RTCPeerConnection(this.game.ice_servers);

      /* Associação de mídia com conexão remota */
      this.game.midias
        .getTracks()
        .forEach((track) =>
          this.game.remoteConnection.addTrack(track, this.game.midias)
        );

      /* Contraoferta de candidatos ICE */
      this.game.remoteConnection.onicecandidate = ({ candidate }) => {
        candidate &&
          this.game.socket.emit("candidate", this.game.sala, candidate);
      };

      /* Associação com o objeto HTML de áudio */
      let midias = this.game.midias;
      this.game.remoteConnection.ontrack = ({ streams: [midias] }) => {
        this.game.audio.srcObject = midias;
      };

      /* Contraoferta de mídia */
      this.game.remoteConnection
        .setRemoteDescription(description)
        .then(() => this.game.remoteConnection.createAnswer())
        .then((answer) =>
          this.game.remoteConnection.setLocalDescription(answer)
        )
        .then(() => {
          this.game.socket.emit(
            "answer",
            this.game.sala,
            this.game.remoteConnection.localDescription
          );
        });
    });

    /* Recebimento de contraoferta de mídia */
    this.game.socket.on("answer", (description) => {
      this.game.localConnection.setRemoteDescription(description);
    });

    /* Recebimento de candidato ICE */
    this.game.socket.on("candidate", (candidate) => {
      let conn = this.game.localConnection || this.game.remoteConnection;
      conn.addIceCandidate(new RTCIceCandidate(candidate));
    });

    this.jogador_1_com_mochila = false;

    this.monstro = this.physics.add.sprite(2810, 7243, "monstro");

    this.physics.add.collider(
      this.jogador_1,
      this.monstro,
      this.monstro_alcanca,
      null,
      this
    );

    this.anims.create({
      key: "jogador-1-baixo-sem-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 3,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-cima-sem-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 4,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-esquerda-sem-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 8,
        end: 11,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-direita-sem-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 12,
        end: 15,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-parado-sem-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
    });
    //
    this.anims.create({
      key: "jogador-1-baixo-com-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 16,
        end: 19,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-cima-com-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 20,
        end: 23,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-esquerda-com-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 24,
        end: 27,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-direita-com-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 28,
        end: 31,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "jogador-1-parado-com-mochila",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 16,
        end: 16,
      }),
      frameRate: 7,
      repeat: -1,
    });
    //
    this.anims.create({
      key: "portao",
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 3,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.Mochila = this.physics.add.sprite(1438, 8591, "Mochila");
    this.portao = this.physics.add.sprite(2617, 6807, "portao").setImmovable();

    this.anims.create({
      key: "portao-fechando",
      frames: this.anims.generateFrameNumbers("portao", {
        start: 0,
        end: 23,
      }),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "monstro-baixo",
      frames: this.anims.generateFrameNumbers("monstro", {
        start: 0,
        end: 3,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "monstro-cima",
      frames: this.anims.generateFrameNumbers("monstro", {
        start: 4,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "monstro-esquerda",
      frames: this.anims.generateFrameNumbers("monstro", {
        start: 8,
        end: 11,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "monstro-direita",
      frames: this.anims.generateFrameNumbers("monstro", {
        start: 12,
        end: 15,
      }),
      frameRate: 7,
      repeat: -1,
    });

    this.anims.create({
      key: "monstro-parado",
      frames: this.anims.generateFrameNumbers("monstro", {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
      repeat: 0,
    });

    /* Botões */
    this.botao_cima = this.add
      .sprite(100, 325, "botao.", 0)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_cima.setFrame(1);
        this.jogador_1.setVelocityY(-200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-cima-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-cima-sem-mochila");
        }
      })
      .on("pointerup", () => {
        this.botao_cima.setFrame(0);
        this.jogador_1.setVelocityY(0);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-parado-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-parado-sem-mochila");
        }
      })
      .setScrollFactor(0);

    this.botao_baixo = this.add
      .sprite(100, 415, "botao.", 2)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_baixo.setFrame(3);
        this.jogador_1.setVelocityY(200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-baixo-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-baixo-sem-mochila");
        }
      })
      .on("pointerup", () => {
        this.botao_baixo.setFrame(2);
        this.jogador_1.setVelocityY(0);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-parado-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-parado-sem-mochila");
        }
      })
      .setScrollFactor(0);

    this.botao_esquerda = this.add
      .sprite(50, 370, "botao.", 4)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_esquerda.setFrame(5);
        this.jogador_1.setVelocityX(-200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-esquerda-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-esquerda-sem-mochila");
        }
      })
      .on("pointerup", () => {
        this.botao_esquerda.setFrame(4);
        this.jogador_1.setVelocityX(0);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-parado-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-parado-sem-mochila");
        }
      })
      .setScrollFactor(0);

    this.botao_direita = this.add
      .sprite(150, 370, "botao.", 6)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_direita.setFrame(7);
        this.jogador_1.setVelocityX(200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-direita-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-direita-sem-mochila");
        }
      })
      .on("pointerup", () => {
        this.botao_direita.setFrame(6);
        this.jogador_1.setVelocityX(0);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-parado-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-parado-sem-mochila");
        }
      })
      .setScrollFactor(0);

    this.inventario = this.add.sprite(0, 0, "papel_quadros").setVisible(false)

    this.botao_menu = this.add
      .sprite(400, 400, "botao.", 12)
      .setInteractive()
      .on("pointerdown", () => {
        this.inventario.x = this.jogador_1.x
        this.inventario.y = this.jogador_1.y
        this.inventario.setVisible(true)
        this.botao_menu.setFrame(13);
      })
      .on("pointerup", () => {
        this.inventario.setVisible(false)
        this.botao_menu.setFrame(12);
      })
      .setScrollFactor(0);

    this.botao_a = this.add
      .sprite(750, 400, "botao.", 8)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_a.setFrame(9);
        this.movimentar_quadro(this.jogador_1, this.quadro_1);
      })
      .on("pointerup", () => {
        this.botao_a.setFrame(8);
      })
      .setScrollFactor(0);

    this.tela_cheia = this.add
      .sprite(750, 50, "tela-cheia", 0)
      .setInteractive()
      .on("pointerdown", () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0);
          this.scale.stopFullscreen();
        } else {
          this.tela_cheia.setFrame(1);
          this.scale.startFullscreen();
        }
      })
      .setScrollFactor(0);

    /* Colisões por tile */
    this.muros.setCollisionByProperty({ collides: true });
    this.terreno.setCollisionByProperty({ collides: true });
    this.arcas.setCollisionByProperty({ collides: true });
    this.objetos.setCollisionByProperty({ collides: true });
    this.objetos_2.setCollisionByProperty({ collides: true });

    /* Colisão entre personagem 1 e mapa (por layer) */
    this.physics.add.collider(
      this.jogador_1,
      this.terreno,
      this.colission,
      null,
      this
    );

    this.physics.add.collider(
      this.jogador_1,
      this.muros,
      this.colission,
      null,
      this
    );
    this.physics.add.collider(
      this.jogador_1,
      this.arcas,
      this.colission,
      null,
      this
    );
    this.physics.add.collider(
      this.jogador_1,
      this.objetos,
      this.collission,
      null,
      this
    );
    this.physics.add.collider(
      this.jogador_1,
      this.objetos_2,
      this.collission,
      null,
      this
    );

    /* Colisão entre jogador 1 e interruptor 1 */
    this.physics.add.overlap(
      this.jogador_1,
      this.interruptor,
      this.pressionarbotao,
      null,
      this
    );

    /* Colisão entre jogador 1 e interruptor 2 */
    this.physics.add.overlap(
      this.jogador_1,
      this.interruptor2,
      this.pressionarbotao2,
      null,
      this
    );

    /* Colisão com os limites da cena */
    this.jogador_1.setCollideWorldBounds(true);

    /* Cena (960) maior que a tela (800x450) (Ver com Boi sobre o que se trata exatamente*/
    this.cameras.main.setBounds(0, 0, 8192, 9216); /*128*64, 144*64*/
    this.physics.world.setBounds(0, 0, 8192, 9216);
    this.cameras.main.startFollow(this.jogador_1);

    /* Colisão com objeto */
    this.physics.add.collider(
      this.jogador_1,
      this.Mochila,
      this.coletar_Mochila,
      null,
      this
    );

    this.portao_fechando = this.physics.add.overlap(
      this.jogador_1,
      this.portao,
      this.passar_pelo_portao,
      null,
      this
    );

    /* Efeitos sonoros */
    this.metal_som = this.sound.add("metal-som");
    this.colisao_som = this.sound.add("colisao-som");

    this.game.socket.on("estado-notificar", ({ cena, frame, x, y }) => {
      if (cena === this.game.fase) {
        this.jogador_2.setFrame(frame);
        this.jogador_2.x = x;
        this.jogador_2.y = y;
      }
    });

    this.game.socket.on("artefatos-notificar", (artefatos) => {
      if (artefatos.mochila) {
        this.Mochila.disableBody(true, true);
      }
      if (artefatos.portao) {
        this.passando_pelo_portao();
      }
      if (artefatos.vazio) {
        this.vazio1.enableBody(true, 3562, 8290, true, true);
      }

      if (artefatos.vazio) {
        this.vazio3.enableBody(true, 7472, 7129, true, true);
      }
    });

    this.vida = 3;
    this.vidaPlacar = this.add.sprite(50, 50, "vida").setScrollFactor(0);

    this.game.socket.on("cena-notificar", (cena) => {
      this.game.scene.stop("principal");
      this.game.scene.start(cena);
    });

    this.vazio = this.physics.add
      .sprite(2626, 6499, "vazio")
      .setImmovable(true);

    this.physics.add.collider(
      this.jogador_1,
      this.vazio,
      this.entrar_na_casa,
      null,
      this
    );

    this.vazio1 = this.physics.add
      .sprite(3562, 8290, "vazio")
      .setImmovable(true)
      .disableBody(true, true);

    this.physics.add.collider(
      this.jogador_1,
      this.vazio1,
      this.entrar_no_lab,
      null,
      this
    );

    this.vazio2 = this.physics.add
      .sprite(2152, 3420, "vazio")
      .setImmovable(true);

    this.physics.add.collider(
      this.jogador_1,
      this.vazio2,
      this.sair_da_casa,
      null,
      this
    );

    this.vazio3 = this.physics.add
      .sprite(7468, 7100, "vazio")
      .setImmovable(true)
      .disableBody(true, true);

    this.physics.add.collider(
      this.jogador_1,
      this.vazio3,
      this.sair_do_lab,
      null,
      this
    );

    this.vazio = this.physics.add
      .sprite(1753, 1881, "vazio")
      .setImmovable(true);

    this.physics.add.collider(
      this.jogador_1,
      this.vazio,
      this.entrar_no_lab2,
      null,
      this
    );

    this.baby_warder = this.physics.add.sprite(
      6709,
      7189,
      "baby-warder"
    ).setInteractive;

    this.physics.add.collider(this.jogador_1, this.quadro_1, null, null, this);
    this.physics.add.collider(this.jogador_1, this.quadro_2, null, null, this);
    this.physics.add.collider(this.jogador_1, this.quadro_3, null, null, this);
    this.physics.add.collider(this.jogador_1, this.quadro_4, null, null, this);

    this.finalFeliz = this.physics.add.sprite(4000, 7264, "vazio")
  }

  update() {
    try {
      this.game.socket.emit("estado-publicar", this.game.sala, {
        cena: this.game.fase,
        frame: this.jogador_1.anims.getFrameName(),
        x: this.jogador_1.body.x + 16,
        y: this.jogador_1.body.y + 25,
      });
    } catch (e) {
      console.log(e);
    }

    if (this.vida > 0) {
      /* Monstro segue personagem mais próximo */
      let hipotenusa_jogador_1 = Phaser.Math.Distance.Between(
        this.jogador_1.x,
        this.monstro.x,
        this.jogador_1.y,
        this.monstro.y
      );

      let hipotenusa_jogador_2 = Phaser.Math.Distance.Between(
        this.jogador_2.x,
        this.monstro.x,
        this.jogador_2.y,
        this.monstro.y
      );

      /* Por padrão, o primeiro jogador é o alvo */
      let alvo = this.jogador_1;
      if (hipotenusa_jogador_1 > hipotenusa_jogador_2) {
        /* Jogador 2 é perseguido pelo monstro */
        alvo = this.jogador_2;
      }

      /* Sentido no eixo X */
      let diffX = alvo.x - this.monstro.x;
      if (diffX >= 10) {
        this.monstro.setVelocityX(30);
      } else if (diffX <= 10) {
        this.monstro.setVelocityX(-30);
      }

      /* Sentido no eixo Y */
      let diffY = alvo.y - this.monstro.y;
      if (diffY >= 10) {
        this.monstro.setVelocityY(50);
      } else if (diffY <= 10) {
        this.monstro.setVelocityY(-50);
      }

      /* Animação */
      if (diffX > 0) {
        this.monstro.anims.play("monstro-direita", true);
      } else if (diffX < 0) {
        this.monstro.anims.play("monstro-esquerda", true);
      } else if (diffY > 0) {
        this.monstro.anims.play("monstro-baixo", true);
      } else if (diffY < 0) {
        this.monstro.anims.play("monstro-cima", true);
      } else {
        this.monstro.anims.play("monstro-parado");
      }
    }

    if (
      Phaser.Geom.Intersects.RectangleToRectangle(
        this.jogador_1.getBounds(),
        this.finalFeliz.getBounds()
      ) &&
      Phaser.Geom.Intersects.RectangleToRectangle(
        this.jogador_2.getBounds(),
        this.finalFeliz.getBounds()
      )
    ){
      this.game.scene.stop("principal");
      this.game.scene.start("finalFeliz");
    }
  }

  colission() {
    /* Tremer a tela por 100 ms com baixa intensidade (0,01) */
    this.cameras.main.shake(100, 0.01);

    /* Vibrar o celular pelos mesmos 100 ms */
    if (window.navigator.vibrate) {
      window.navigator.vibrate([100]);
    }

    /* Tocar efeito sonoro */
    this.colisao_som.play();
  }

  coletar_Mochila() {
    this.game.socket.emit("artefatos-publicar", this.game.sala, {
      mochila: true,
    });
    this.Mochila.disableBody(true, true);
    this.jogador_1_com_mochila = true;
  }

  passar_pelo_portao() {
    this.game.socket.emit("artefatos-publicar", this.game.sala, {
      portao: true,
    });
    this.passando_pelo_portao();
  }

  passando_pelo_portao() {
    this.portao_fechando.destroy();
    this.portao.anims.play("portao-fechando");
    this.timer = 1;
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.countdown,
      callbackScope: this,
      loop: true,
    });
  }

  countdown() {
    this.timer -= 1;
    if (this.timer <= 0) {
      this.timedEvent.destroy();
      this.physics.add.collider(this.jogador_1, this.portao, null, null, this);
    }
  }

  monstro_alcanca() {
    this.vida -= 1;
    this.vidaPlacar.setFrame(3 - this.vida);

    if (this.vida <= 0) {
      this.game.scene.stop("principal");
      this.game.scene.start("perda");
      this.game.socket.emit("cena-publicar", this.game.sala, "perda");
    } else {
      this.monstro.x = this.jogador_1.x + 200;
      this.monstro.y = this.jogador_1.y + 200;
    }
  }

  entrar_na_casa(jogador, vazio) {
    this.cameras.main.fadeOut(250);
    this.cameras.main.once("camerafadeoutcomplete", (camera) => {
      camera.fadeIn(250);
      this.jogador_1.x = 2152;
      this.jogador_1.y = 3360;
    });
  }

  entrar_no_lab(jogador, vazio) {
    this.cameras.main.fadeOut(250);
    this.cameras.main.once("camerafadeoutcomplete", (camera) => {
      camera.fadeIn(250);
      this.jogador_1.x = 6946;
      this.jogador_1.y = 7719;
    });
  }

  sair_da_casa(jogador, vazio) {
    this.cameras.main.fadeOut(250);
    this.cameras.main.once("camerafadeoutcomplete", (camera) => {
      camera.fadeIn(250);
      this.jogador_1.x = 2626;
      this.jogador_1.y = 6573;
    });
  }

  sair_do_lab(jogador, vazio) {
    this.cameras.main.fadeOut(250);
    this.cameras.main.once("camerafadeoutcomplete", (camera) => {
      camera.fadeIn(250);
      this.jogador_1.x = 3064;
      this.jogador_1.y = 2993;
    });
  }

  entrar_no_lab2(jogador, vazio) {
    this.cameras.main.fadeOut(250);
    this.cameras.main.once("camerafadeoutcomplete", (camera) => {
      camera.fadeIn(250);
      this.jogador_1.x = 3550;
      this.jogador_1.y = 8378;
    });
  }

  movimentar_quadro(sprite1, sprite2) {
    if (
      Phaser.Geom.Intersects.RectangleToRectangle(
        this.jogador_1.getBounds(),
        this.quadro_1.getBounds()
      )
    ) {
      sprite2.x = sprite1.x;
      sprite2.y = sprite1.y;
    }
  }

  pressionarbotao() {
    this.interruptor.setFrame(1);
    this.game.socket.emit("artefatos-publicar", this.game.sala, {
      vazio: true,
    });
    this.vazio1.enableBody(true, 3562, 8290, true, true);
  }

  pressionarbotao2() {
    this.interruptor2.setFrame(1);
    this.game.socket.emit("artefatos-publicar", this.game.sala, {
      vazio: true,
    });
    this.vazio3.enableBody(true, 7472, 7129, true, true);
  }
}
