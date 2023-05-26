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
// Cena Laboratorio
import CenadeLaboratorio from "./cena-laboratorio.js"

class Game extends Phaser.Game{
  constructor() {
    super(config);

    this.socket = io();
    this.socket.on("connect", () => {
      console.log("Conectado ao servidor para troca de mensagens.");
    });
    
    /* Lista de servidor(es) ICE */
    this.ice_servers = {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };

    /* Associação de objeto HTML de áudio e objeto JS */
    this.audio = document.querySelector("audio");

    //
    // Carregar as cenas
    this.scene.add("abertura", CenaDeAbertura);
    this.scene.add("principal", CenaPrincipal);
    this.scene.add("encerramento", CenaDeencerramento);
    this.scene.add("perda", CenaDeperda);
    this.scene.add("casa", CenaDecasa);
    this.scene.add("laboratorio", CenadeLaboratorio);

    //
    // Iniciar pela cena de abertura
    this.scene.start("abertura");
  }
}

window.onload = () => {
  window.game = new Game();
};
