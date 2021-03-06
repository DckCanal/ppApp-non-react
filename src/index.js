/*
    Data examples - will be retrieved from web API
*/

const account = {
  username: "e.cocci",
  email: "ecocci372@gmail.com",
  nome: "Elena Cocci",
  unita: {
    codice: "EG",
    branca: "Reparto",
    nome: "Avalon",
  },
};

const gruppo = {
  nome: "San Giovanni in Marignano 1",
  dateAttivita: [
    { inizio: "23/09/2017", fine: "11/09/2018" },
    { inizio: "12/09/2018", fine: "03/10/2019" },
    { inizio: "04/10/2019", fine: "15/09/2020" },
  ],
  suddivisioneAnni: {
    branco: 4,
    reparto: 4,
  },
};

const ragazzi = [
  {
    nome: "Luigi",
    cognome: "Rossi",
    dataNascita: "04/03/2005",
    specialita: [
      { nome: "Maestro dei nodi", data: "12/12/2018" },
      { nome: "Amico degli animali", data: "25/07/2020" },
      { nome: "Infermieristica", data: "13/10/2020" },
    ],
    unita: {
      branca: "Reparto",
      codice: "EG",
      nome: "Avalon",
      divisione: { tipo: "Squadriglia", nome: "Puma" },
    },
    tappe: { scoperta: "12/09/2017", competenza: "22/03/2019" },
    note: [
      {
        testo:
          "Ragazzo molto timido, stenta a socializzare con gli altri squadriglieri",
        data: "15/09/2017",
      },
      { testo: "I genitori segnalano DSA", data: "21/12/2017" },
      {
        testo:
          "Inizio impresa cinematografia, proposta da lui!! Posto d'azione: editing video",
        data: "04/03/2018",
      },
      {
        testo:
          "Nei primi giorni di campo, sembra stentare un po', ma dal quarto giorno trova il suo posto nella squadriglia",
        data: "12/07/2018",
      },
    ],
    mete: [
      {
        testo: "Voglio diventare una persona più socievole",
        dataInizio: "22/10/2017",
        dataScadenza: "23/04/2018",
        dataFine: "12/05/2018",
        esito: {
          commento:
            "Luigi ha raggiunto il suo obiettivo, con fatica e soddisfazione, anche se con un po' di ritardo",
          stato: "successo",
        },
        note: [
          {
            testo:
              "Ancora stenta a relazionarsi con capo sq e vice, sembra in soggezione",
            data: "12/12/2017",
          },
          {
            testo:
              "Buoni progressi nella squadriglia, ma ancora nei momenti di confronto e condivisione non parla a meno che non venga interpellato esplicitamente",
            data: "05/02/2018",
          },
        ],
        impegni: [
          {
            testo: "Proporre un'impresa che mi coinvolga",
            dataInizio: "12/01/2018",
            dataScadenza: "01/03/2018",
            dataFine: "01/03/2018",
            esito: {
              commento:
                "Con difficoltà, è riuscito a proporre ai Puma di fare un video documentario, ma si è reso necessario l'intervento di un capo (Luca) per portare avanti la sua idea",
              stato: "parziale",
            },
          },
          {
            testo:
              "Parlare durante il consiglio della Legge senza essere interpellato e interrogato",
            dataInizio: "01/03/2018",
            dataScadenza: "03/04/2018",
            dataFine: "",
            esito: {
              stato: "fallimento",
              commento:
                "È di nuovo stato necessario cavargli le parole di bocca...",
            },
          },
        ],
      },
    ],
  },
  {
    nome: "Chiara",
    cognome: "Bianchi",
    dataNascita: "21/04/2006",
    specialita: [
      { nome: "Infermieristica", data: "12/12/2018" },
      { nome: "Topografo", data: "12/03/2019" },
      { nome: "Musico", data: "13/10/2020" },
    ],
    unita: {
      branca: "Reparto",
      codice: "EG",
      nome: "Avalon",
      divisione: { tipo: "Squadriglia", nome: "Gazzelle" },
    },
    tappe: { scoperta: "12/09/2018", competenza: "22/03/2020" },
    note: [
      {
        testo:
          "Estroversa e distratta, fatica ad impegnarsi in ciò che non le piace",
        data: "15/09/2018",
      },
      {
        testo:
          "Non viene a Messa di Natale, scrivendo sul gruppo che non ne ha voglia",
        data: "25/12/2019",
      },
      {
        testo:
          "Grande fatica a vivere il lockdown, non risponde da tempo ai messaggi e alle chiamate, la mamma dice che è preoccupata ma non sa cosa fare",
        data: "12/05/2020",
      },
    ],
    mete: [
      {
        testo: "Voglio imparare tante cose e diventare utile in squadriglia",
        dataInizio: "22/10/2018",
        dataScadenza: "23/04/2019",
        dataFine: "12/03/2019",
        esito: {
          commento:
            "È riuscita a prendere 2 specialità, su consiglio anche di capo sq, molto velocemente. Sono le due spec che mancavano nella sua sq, interessante questo approccio di visione comunitaria!",
          stato: "successo",
        },
        note: [
          {
            testo:
              "Unica a fare infermieristica, non si fa problemi a partecipare da sola.",
            data: "15/12/2018",
          },
          {
            testo:
              "Prova di montaggio tende e angoli: si dedica con grande impegno e riesce bene, soprattutto nei nodi. Non ne vuole sapere invece dell'accensione del fuoco",
            data: "05/02/2019",
          },
        ],
        impegni: [
          {
            testo: "Imparare a fare le cose della vita di squadriglia al campo",
            dataInizio: "29/10/2018",
            dataScadenza: "01/02/2019",
            dataFine: "01/02/2019",
            esito: {
              commento: "OK: nodi, tenda. No: fuoco, cucina e legna",
              stato: "parziale",
            },
          },
          {
            testo: "Fare infermieristica e topografia",
            dataInizio: "29/10/2018",
            dataScadenza: "23/04/2019",
            dataFine: "12/03/2019",
            esito: {
              stato: "successo",
              commento: "Specialità conseguite, in anticipo sui tempi.",
            },
          },
        ],
      },
    ],
  },
];

class App {
  constructor() {
    this.container = document.querySelector(".container");
    this.containerHeader = document.querySelector(".container_header");
    this.containerMain = document.querySelector(".container-main");
    this.vistaRagazzo(ragazzi[0]);
  }
  vistaRagazzo(ragazzo) {
    this.containerHeader.innerHTML += `
    <div class="nome-ragazzo"><h2>${[ragazzo.nome, ragazzo.cognome].join(
      " "
    )}</h2>
      <h3>${ragazzo.unita.branca} - ${ragazzo.unita.nome}</h3>
      <h4>${ragazzo.unita.divisione.tipo} ${ragazzo.unita.divisione.nome}</h4>
    </div>
    `;
    const ultimaTappa = this._ultimaTappaRagazzo(ragazzo);
    console.log(ultimaTappa);
    if (ultimaTappa) {
      let tappaHtml = `<p class="tappa-ragazzo">`;
      tappaHtml += `${ultimaTappa[0]} - <span class="tappa-attuale-ragazzo">${ultimaTappa[1]}</span>`;
      tappaHtml += `</p>`;
      this.containerHeader.innerHTML += tappaHtml;
    }

    this.visualizzaSpecialitaRagazzo(ragazzo);
    this.visualizzaMeteRagazzo(ragazzo);
  }
  vistaElencoRagazzi(unita) {}
  visualizzaSpecialitaRagazzo(ragazzo) {
    ragazzo.specialita.forEach((spec) => {
      this.containerMain.innerHTML += `
      <p class="specialita">${spec.nome} <span class="data-specialita">${spec.data}</span></p>
    `;
    });
  }
  visualizzaMeteRagazzo(ragazzo) {
    let html = `<div class="meta-container"><h3>Meta</h3>`;
    ragazzo.mete.forEach((meta) => {
      html += `<p>${meta.testo}</p>`;
      html += `<p>Inizio: ${meta.dataInizio}</p>`;
      html += `<p>Da concludere entro il ${meta.dataScadenza}</p>`;
      html += `<p>Terminata il ${meta.dataFine}</p>`;
      html += ``;
    });
    html += `</div>`;
    this.containerMain.innerHTML += html;
  }
  visualizzaSpecialitaUnita(unita) {}
  visualizzaMeteUnita(unita) {}
  visualizzaNoteUnita(unita) {}
  _ultimaTappaRagazzo(ragazzo) {
    if (ragazzo.tappe.responsabilita)
      return ["Responsabilità", ragazzo.tappe.responsabilita];
    if (ragazzo.tappe.competenza)
      return ["Competenza", ragazzo.tappe.competenza];
    if (ragazzo.tappe.scoperta) return ["Scoperta", ragazzo.tappe.scoperta];
  }
}

const app = new App();

// const visualizzaSpecialita = function (spec, el) {
//   const html = `
//     <p class="specialita">${spec.nome} <span class="data-specialita">${spec.data}</span></p>
//   `;
//   el.innerHTML += html;
// };

// const container = document.querySelector(".container");
// const containerHeader = document.querySelector(".container_header");
// const containerMain = document.querySelector(".container-main");

// ragazzi[0].specialita.forEach((spec) =>
//   visualizzaSpecialita(spec, containerMain)
// );
