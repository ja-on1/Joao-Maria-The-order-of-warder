export default class principal extends Phaser.Scene {
  constructor() {
    super("principal");
  }

  preload() {
    //
    // Mapa
    // Tilemap
    this.load.tilemapTiledJSON("mapa-principal", "./assets/chao.json");
    //
    // Tilesets
    this.load.image("chao", "./assets/tileset.png");
    this.load.image("casa", "./assets/casa.png");
    this.load.image("mochila", "./assets/Mochila.png");
    //
    //
    this.load.spritesheet("João", "./assets/players/joao.png", {
      frameWidth: 32,
      frameHeight: 50,
    });
    //
    this.load.spritesheet("Maria", "./assets/players/maria.png", {
      frameWidth: 32,
      frameHeight: 50,
    });
    // *Botões */
    this.load.spritesheet("botao", "./assets/botões/botao.png", {
      frameWidth: 64,
      frameHeight: 64,
    })
  }

  create() {
    //Mapa
    //Tilemap
    this.mapa_principal = this.make.tilemap({
      key: "mapa-principal",
    });
    //tilesets
    this.tileset_principal_chao =
      this.mapa_principal.addTilesetImage("chao", "chao");
    this.tileset_principal_casa =
      this.mapa_principal.addTilesetImage("casa", "parede");
    this.tileset_principal_mochila =
      this.mapa_principal.addTilesetImage("mochila", "parede");

  //Layer 0: chão
    this.chao = this.mapa_principal.createLayer(
      "chao",
      this.tileset_principal_chao,
      0,
      0
    );
    //Layer 1: parede
    this.parede = this.mapa_principal.createLayer(
      "parede",
      this.tileset_principal_parede,
      0,
      0
    );
      //
      // jogador 1
    this.jogador_1 = this.physics.add.sprite(200, 225, "João");
    this.anims.create({
      key: "jogador-1-baixo",
      frames: this.anims.generateFrameNumbers("João", {
        start: 0,
        end: 3,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_1.anims.play("jogador-1-baixo", true);
    //
    this.anims.create({
      key: "jogador-1-cima",
      frames: this.anims.generateFrameNumbers("João", {
        start: 4,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_1.anims.play("jogador-1-cima", true);
    //
    this.anims.create({
      key: "jogador-1-esquerda",
      frames: this.anims.generateFrameNumbers("João", {
        start: 8,
        end: 11,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_1.anims.play("jogador-1-esquerda", true);
    //
    this.anims.create({
      key: "jogador-1-direita",
      frames: this.anims.generateFrameNumbers("João", {
        start: 12,
        end: 15,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_1.anims.play("jogador-1-direita", true);
    //
    /* Jogador 2 */
    this.jogador_2 = this.add.sprite(400, 225, "Maria");

    /* Botões */
    this.botao_cima = this.add
      .sprite(100, 325, "botao", 0)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_cima.setFrame(1);
        this.jogador_1.setVelocityY(-50);
        this.jogador_1.anims.play("jogador-1-cima")
      })
      .on("pointerup", () => {
        this.botao_cima.setFrame(0)
        this.jogador_1.setVelocityY(0);
      });
    this.botao_baixo = this.add
      .sprite(100, 415, "botao", 2)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_baixo.setFrame(3)
        this.jogador_1.setVelocityY(50);
        this.jogador_1.anims.play("jogador-1-baixo")
      })
      .on("pointerup", () => {
        this.botao_baixo.setFrame(2)
        this.jogador_1.setVelocityY(0);
      });
    this.botao_esquerda = this.add
      .sprite(50, 370, "botao", 4)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_esquerda.setFrame(5)
        this.jogador_1.setVelocityX(-50);
        this.jogador_1.anims.play("jogador-1-esquerda")
      })
      .on("pointerup", () => {
        this.botao_esquerda.setFrame(4)
        this.jogador_1.setVelocityX(0);
      });
    this.botao_direita = this.add
      .sprite(150, 370, "botao", 6)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_direita.setFrame(7)
        this.jogador_1.setVelocityX(50);
        this.jogador_1.anims.play("jogador-1-direita")
      })
      .on("pointerup", () => {
        this.botao_direita.setFrame(6)
        this.jogador_1.setVelocityX(0);
      });
    this.botao_menu = this.add
      .sprite(400, 400, "botao", 12)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_menu.setFrame(13)
      })
      .on("pointerup", () => {
        this.botao_menu.setFrame(12)
      });
    this.botao_a = this.add
      .sprite(750, 400, "botao", 8)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_a.setFrame(9)
      })
      .on("pointerup", () => {
        this.botao_a.setFrame(8)
      });
    /* Colisões por tile */
    //this.terreno.setCollisionByProperty({ collides: true });
    //this.ARCas.setCollisionByProperty({ collides: true });

    /* Colisão entre personagem 1 e mapa (por layer) */
    //this.physics.add.collider(this.jogador_1, this.terreno, null, null, this);
    //this.physics.add.collider(this.jogador_1, this.ARCas, null, null, this);
  }

  update() {}
}