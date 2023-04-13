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
import CenadeQuarto1 from "./cena-quarto-1"
// Cena quarto 2
import CenadeQuarto2 from "./cena-quarto-2"
// Cena quarto 3
import CenadeQuarto3 from "./cena-quarto-3"
// Cena quarto 4
import CenadeQuarto4 from "./cena-quarto-4"
// Cena Laboratorio
import CenadeLaboratorio from "./cena-laboratorio"

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
    this.scene.add("quarto1", CenadeQuarto1);
    this.scene.add("quarto2", CenadeQuarto2);
    this.scene.add("quarto3", CenadeQuarto3);
    this.scene.add("quarto4", CenadeQuarto4);
    this.scene.add("laboratorio", CenadeLaboratorio);

    //
    // Iniciar pela cena de abertura
    this.scene.start("principal");
  }
}

window.onload = () => {
  window.game = new Game();
};
