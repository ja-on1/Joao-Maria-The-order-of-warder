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
import CenadeLaboratorio from "./cena-laboratorio.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);

    let iceServers;
    if (window.location.host === "ifsc.digital") {
      this.socket = io.connect({
        path: "/Joao-Maria-The-order-of-warder/socket.io/",
      });

      iceServers = [
        {
          urls: "stun:ifsc.digital",
        },
        {
          urls: "turns:ifsc.digital",
          username: "adcipt",
          credential: "adcipt20231",
        },
      ];
    } else {
      this.socket = io();

      iceServers = [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ];
    }
    this.ice_servers = { iceServers };
    this.audio = document.querySelector("audio");

    this.socket.on("connect", () => {
      console.log("Conectado ao servidor para troca de mensagens.");
    });
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
