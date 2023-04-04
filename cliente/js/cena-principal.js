export default class principal extends Phaser.Scene {
  constructor() {
    super("principal");
  }

  preload() {
    this.load.spritesheet("João", "./assets/players/João.png", {
      frameWidth: 28,
      frameHeight: 55,
    });
    //
    this.load.spritesheet("Maria", "./assets/players/Maria.png", {
      frameWidth: 28,
      frameHeight: 55,
    });
  }

  create() {
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
      key: "jogador-1-direita",
      frames: this.anims.generateFrameNumbers("João", {
        start: 8,
        end: 11,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_1.anims.play("jogador-1-direita", true);
    //
    this.anims.create({
      key: "jogador-1-esquerda",
      frames: this.anims.generateFrameNumbers("João", {
        start: 12,
        end: 15,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_1.anims.play("jogador-1-esquerda", true);
    //
    this.jogador_2 = this.physics.add.sprite(400, 225, "Maria");
    this.anims.create({
      key: "jogador-2-baixo",
      frames: this.anims.generateFrameNumbers("Maria", {
        start: 0,
        end: 3,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_2.anims.play("jogador-2-baixo", true);
    //
    this.anims.create({
      key: "jogador-2-cima",
      frames: this.anims.generateFrameNumbers("Maria", {
        start: 4,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_2.anims.play("jogador-2-cima", true);
    //
    this.anims.create({
      key: "jogador-2-esquerda",
      frames: this.anims.generateFrameNumbers("Maria", {
        start: 8,
        end: 11,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_2.anims.play("jogador-2-esquerda", true);
    //
    this.anims.create({
      key: "jogador-2-direita",
      frames: this.anims.generateFrameNumbers("Maria", {
        start: 12,
        end: 15,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.jogador_2.anims.play("jogador-2-direita", true);
  }

  update() {}
}
