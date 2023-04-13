// Configuração do jogo
import config from "./config.js";
// Cena de abertura
import CenaDeAbertura from "./cena-abertura.js";
// Cena principal
import CenaPrincipal from "./cena-principal.js";
// Cena de Encerramento
import CenaDeencerramento from "./cena-fim-do-jogo.js";
// Cena perda
import CenaDeperda from "./cena-perda.js";
// Cena casa
import CenaDecasa from "./cena-casa.js";
// Cena quarto 1

// Cena quarto 2

// Cena quarto 3

// Cena quarto 4

// Cena Laboratorio



class Game extends Phaser.Game{
  constructor() {
    super(config);
    //
    // Carregar as cenas
    this.scene.add("abertura", CenaDeAbertura);
    this.scene.add("principal", CenaPrincipal);
    this.scene.add("encerramento", CenaDeencerramento);
    this.scene.add("perda", CenaDeperda);
    this.scene.add("casa", CenaDecasa);

    //
    // Iniciar pela cena de abertura
    this.scene.start("principal");
  }
}

window.onload = () => {
  window.game = new Game();
};
