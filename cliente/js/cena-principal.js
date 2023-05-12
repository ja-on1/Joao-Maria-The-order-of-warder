export default class principal extends Phaser.Scene {
  constructor() {
    super("principal");
  }

  preload() {
    // Mapa
    /* Tilemap */
    this.load.tilemapTiledJSON(
      "cena-principal",
      "./assets/cena-principal.json"
    );

    /* Tilesets */
    this.load.image("chao", "./assets/chao.png");
    this.load.image("casa", "./assets/casa.png");
    this.load.image("arvores", "./assets/arvores.png");
    this.load.image("muros", "./assets/muros.png");
    this.load.image("muros2", "./assets/muros2.png");
    this.load.image("cabana", "./assets/cabana.png");

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

    /* Sons */
    this.load.audio("metal-som", "./assets/metal.mp3");
    this.load.audio("trilha", "./assets/trilha.mp3");
    this.load.audio("colisao-som", "./assets/colisao.mp3");
  }

  create() {
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

    /* Layer 0: chão */
    this.terreno = this.cena_principal.createLayer(
      "terreno",
      this.tileset_principal_chao,
      0,
      0
    );

    /* jogadores */
    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = "João";
      this.jogador_1 = this.physics.add.sprite(2361, 2229, this.local);
      this.remoto = "Maria";
      this.jogador_2 = this.add.sprite(1756, 729, this.remoto);
    } else {
      this.remoto = "João";
      this.jogador_2 = this.add.sprite(2361, 2229, this.remoto);
      this.local = "Maria";
      this.jogador_1 = this.physics.add.sprite(1756, 729, this.local);
    }
    this.jogador_1_com_mochila = false;

    this.arcas = this.cena_principal.createLayer(
      "arcas",
      this.tileset_principal_cabana,
      0,
      0
    );

    this.arcas = this.cena_principal.createLayer(
      "arcas",
      this.tileset_principal_muros2,
      0,
      0
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

    this.Mochila = this.physics.add.sprite(550, 300, "Mochila");
    this.portao = this.physics.add.sprite(1597, 661, "portao").setImmovable();

    this.anims.create({
      key: "portao-fechando",
      frames: this.anims.generateFrameNumbers("portao", {
        start: 0,
        end: 23,
      }),
      frameRate: 30,
      repeat: 0,
    });

    /* muros */
    this.muros = this.cena_principal.createLayer(
      "muros",
      [
        this.tileset_principal_muros,
        this.tileset_principal_muros2,
        this.tileset_principal_arvores,
        this.tileset_principal_casa,
        this.tileset_principal_cabana,
      ],
      0,
      0
    );

    /* Botões */
    this.botao_cima = this.add
      .sprite(100, 325, "botao.", 0)
      .setInteractive()
      .on("pointerover", () => {
        this.botao_cima.setFrame(1);
        this.jogador_1.setVelocityY(-200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-cima-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-cima-sem-mochila");
        }
      })
      .on("pointerout", () => {
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
      .on("pointerover", () => {
        this.botao_baixo.setFrame(3);
        this.jogador_1.setVelocityY(200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-baixo-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-baixo-sem-mochila");
        }
      })
      .on("pointerout", () => {
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
      .on("pointerover", () => {
        this.botao_esquerda.setFrame(5);
        this.jogador_1.setVelocityX(-200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-esquerda-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-esquerda-sem-mochila");
        }
      })
      .on("pointerout", () => {
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
      .on("pointerover", () => {
        this.botao_direita.setFrame(7);
        this.jogador_1.setVelocityX(200);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-direita-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-direita-sem-mochila");
        }
      })
      .on("pointerout", () => {
        this.botao_direita.setFrame(6);
        this.jogador_1.setVelocityX(0);
        if (this.jogador_1_com_mochila) {
          this.jogador_1.anims.play("jogador-1-parado-com-mochila");
        } else {
          this.jogador_1.anims.play("jogador-1-parado-sem-mochila");
        }
      })
      .setScrollFactor(0);

    this.botao_menu = this.add
      .sprite(400, 400, "botao.", 12)
      .setInteractive()
      .on("pointerover", () => {
        this.botao_menu.setFrame(13);
      })
      .on("pointerout", () => {
        this.botao_menu.setFrame(12);
      })
      .setScrollFactor(0);

    this.botao_a = this.add
      .sprite(750, 400, "botao.", 8)
      .setInteractive()
      .on("pointerover", () => {
        this.botao_a.setFrame(9);
      })
      .on("pointerout", () => {
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
    /* Colisão com os limites da cena */
    this.jogador_1.setCollideWorldBounds(true);

    /* Cena (960) maior que a tela (800x450) (Ver com Boi sobre o que se trata exatamente*/
    this.cameras.main.setBounds(0, 0, 3200, 2560); /*50*64, 40*64*/
    this.physics.world.setBounds(0, 0, 3200, 2560);
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

    this.game.socket.on("estado-notificar", ({ frame, x, y }) => {
      this.jogador_2.setFrame(frame);
      this.jogador_2.x = x;
      this.jogador_2.y = y;
    });

    this.game.socket.on("arfetatos-notificar", (artefatos) => {
      if (artefatos.mochila) {
        this.Mochila.disableBody(true, true);
      }
    });
  }

  update() {
    console.log(this.jogador_1.x, this.jogador_1.y);
    let frame;
    try {
      frame = this.jogador_1.anims.getFrameName();
    } catch (e) {
      frame = 0;
    }
    this.game.socket.emit("estado-publicar", this.game.sala, {
      frame: frame,
      x: this.jogador_1.body.x + 32,
      y: this.jogador_1.body.y + 32,
    });
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
    this.Mochila.disableBody(true, true);
    this.game.socket.emit("arfetatos-publicar", this.game.sala, {
      mochila: true,
    });
  }

  passar_pelo_portao() {
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
}
