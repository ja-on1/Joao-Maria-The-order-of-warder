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
    this.load.spritesheet("Maria", "./assets/players/Maria.png", {
      frameWidth: 32,
      frameHeight: 50,
    });
    // *Botões */
    this.load.spritsheet("cima", "./assets/botao.png", {
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
    // Jogador 2 
    this.jogador_2 = this.add.sprite(400, 225, "Maria");
    /* Colisões por tile */
    this.terreno.setCollisionByProperty({ collides: true });
    this.ARCas.setCollisionByProperty({ collides: true });

    /* Colisão entre personagem 1 e mapa (por layer) */
    this.physics.add.collider(this.jogador_1, this.terreno, null, null, this);
    this.physics.add.collider(this.jogador_1, this.ARCas, null, null, this);
  }

  update() {}
}