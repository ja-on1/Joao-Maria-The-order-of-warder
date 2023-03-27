// Configuração do jogo
import config from "./config.js";
// Cena de abertura
import CenaDeAbertura from ",/cena.js";
// Cena principal
import CenaPrincipal from ",/cena.js";
// Cena de Encerramento
import CenaDeencerramento from ",/cena.js";

class Game extends Phaser.Game{
  constructor() {
    super(config);
    //
    // Carregar as cenas
    this.scene.add("abertura", CenaDeAbertura);
    this.scene.add("Principal", CenaPrincipal);
    this.scene.add("Encerramento", CenaDeencerramento);
    //
    // Iniciar pela cena de abertura
    this.scene.start("abertura");
  }
}

window.onload = () => {
  window.game = new Game();
};
