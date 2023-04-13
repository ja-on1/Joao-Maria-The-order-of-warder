export default class principal extends Phaser.Scene {
  constructor() {
    super("principal");
  }

  preload() {
    // Mapa
    /* Tilemap */
    this.load.tilemapTiledJSON("mapa-principal", "./assets/mapa.json");

    /* Tilesets */
    this.load.image("chao", "./assets/chao.png");
    this.load.image("casa", "./assets/casa.png");
    this.load.image("arvores", "./assets/arvores.png");
    this.load.image("muros", "./assets/muros.png");

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

    / *Botões */;
    this.load.spritesheet("botao", "./assets/botões/botao.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    //Mapa
    /* Tilemap */
    this.mapa_principal = this.make.tilemap({
      key: "mapa-principal",
    });

    /* tilesets */
    this.tileset_principal_chao = this.mapa_principal.addTilesetImage(
      "chao",
      "chao"
    );
    this.tileset_principal_casa = this.mapa_principal.addTilesetImage(
      "casa",
      "casa"
    );
    this.tileset_principal_arvores = this.mapa_principal.addTilesetImage(
      "arvores",
      "arvores"
    );
    this.tileset_principal_muros = this.mapa_principal.addTilesetImage(
      "muros",
      "muros"
    );

    /* Layer 0: chão */
    this.terreno = this.mapa_principal.createLayer(
      "terreno",
      this.tileset_principal_chao,
      0,
      0
    );

    /* jogador 1 */
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
    this.anims.create({
      key: "jogador-1-parado",
      frames: this.anims.generateFrameNumbers("João", {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
    });
    this.jogador_1.anims.play("jogador-1-parado", true);

    /* Jogador 2 */
    this.jogador_2 = this.add.sprite(400, 225, "Maria");

    /* Layer 1: parede */
    this.muros = this.mapa_principal.createLayer(
      "muros",
      [
        this.tileset_principal_muros,
        this.tileset_principal_arvores,
        this.tileset_principal_casa,
      ],
      0,
      0
    );

    /* Botões */
    this.botao_cima = this.add
      .sprite(100, 325, "botao", 0)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_cima.setFrame(1);
        this.jogador_1.setVelocityY(-200);
        this.jogador_1.anims.play("jogador-1-cima");
      })
      .on("pointerup", () => {
        this.botao_cima.setFrame(0);
        this.jogador_1.setVelocityY(0);
        this.jogador_1.anims.play("jogador-1-parado");
      })
      .setScrollFactor(0);
    
    this.botao_baixo = this.add
      .sprite(100, 415, "botao", 2)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_baixo.setFrame(3);
        this.jogador_1.setVelocityY(200);
        this.jogador_1.anims.play("jogador-1-baixo");
      })
      .on("pointerup", () => {
        this.botao_baixo.setFrame(2);
        this.jogador_1.setVelocityY(0);
        this.jogador_1.anims.play("jogador-1-parado");
      }).setScrollFactor(0);
    
    this.botao_esquerda = this.add
      .sprite(50, 370, "botao", 4)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_esquerda.setFrame(5);
        this.jogador_1.setVelocityX(-200);
        this.jogador_1.anims.play("jogador-1-esquerda");
      })
      .on("pointerup", () => {
        this.botao_esquerda.setFrame(4);
        this.jogador_1.setVelocityX(0);
        this.jogador_1.anims.play("jogador-1-parado");
      })
      .setScrollFactor(0);
    
    this.botao_direita = this.add
      .sprite(150, 370, "botao", 6)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_direita.setFrame(7);
        this.jogador_1.setVelocityX(200);
        this.jogador_1.anims.play("jogador-1-direita");
      })
      .on("pointerup", () => {
        this.botao_direita.setFrame(6);
        this.jogador_1.setVelocityX(0);
        this.jogador_1.anims.play("jogador-1-parado");
      })
      .setScrollFactor(0);
    
    this.botao_menu = this.add
      .sprite(400, 400, "botao", 12)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_menu.setFrame(13);
      })
      .on("pointerup", () => {
        this.botao_menu.setFrame(12);
      })
      .setScrollFactor(0);
    
    this.botao_a = this.add
      .sprite(750, 400, "botao", 8)
      .setInteractive()
      .on("pointerdown", () => {
        this.botao_a.setFrame(9);
      })
      .on("pointerup", () => {
        this.botao_a.setFrame(8);
      })
      .setScrollFactor(0);

    /* Colisões por tile */
    this.muros.setCollisionByProperty({ collides: true });
    this.terreno.setCollisionByProperty({ collides: true });

    /* Colisão entre personagem 1 e mapa (por layer) */
    this.physics.add.collider(
      this.jogador_1,
      this.terreno,
      this.collision,
      null,
      this
    );

    this.physics.add.collider(
      this.jogador_1,
      this.muros,
      this.collision,
      null,
      this
    );

    /* Colisão com os limites da cena */
    this.jogador_1.setCollideWorldBounds(true);

    /* Cena (960) maior que a tela (800x450) (Ver com Boi sobre o que se trata exatamente*/
    this.cameras.main.setBounds(0, 0, 3200, 2560); /*50*64, 40*64*/
    this.physics.world.setBounds(0, 0, 3200, 2560);
    this.cameras.main.startFollow(this.jogador_1);
  }

  update() {}

  collision() {
    /* Tremer a tela por 100 ms com baixa intensidade (0,01) */
    this.cameras.main.shake(100, 0.01);

    /* Vibrar o celular pelos mesmos 100 ms */
    window.navigator.vibrate([100]);
  }
}
