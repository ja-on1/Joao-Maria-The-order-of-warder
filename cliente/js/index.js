// Configuração do jogo
import config from "./config.js";
// Cena de abertura
import CenaDeAbertura from "./cena-abertura.js";
// Cena principal
import CenaPrincipal from "./cena-principal.js";
// Cena de Encerramento
import CenaDeencerramento from "./cena-fim-do-jogo.js";

class Game extends Phaser.Game{
  constructor() {
    super(config);
    //
    // Carregar as cenas
    this.scene.add("abertura", CenaDeAbertura);
    this.scene.add("principal", CenaPrincipal);
    this.scene.add("Encerramento", CenaDeencerramento);
    //
    // Iniciar pela cena de abertura
    this.scene.start("principal");
  }
}

window.onload = () => {
  window.game = new Game();
};
