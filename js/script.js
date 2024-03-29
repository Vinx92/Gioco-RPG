const MAIN = document.getElementById("main");

const MAIN_START = document.getElementById("main-start");

const MODULO = document.getElementById("modulo");

const NOME = document.getElementById("nome");

const IMG = document.getElementById("i-avatar");

const COST = document.getElementById("cost");

const FORZ = document.getElementById("forz");

const SUBMIT = document.getElementById("submit");

const BOX_AVATAR = document.getElementById("box-avatar");

const VITA = document.getElementById("vita");

const DANNO = document.getElementById("danno");

const SOLDI = document.getElementById("soldi");

const EXP = document.getElementById("exp");

const INFO_SCHERMATA_INIZIALE = document.getElementById(
  "infoSchermataIniziale"
);

const NOME_LIVELLO = document.getElementById("nomeLivello");

const CLASSE_ARMATURA = document.getElementById("classeArmatura");

const PIU_COST = document.getElementById("piu-cost");

const MENO_COST = document.getElementById("meno-cost");

const PIU_FORZ = document.getElementById("piu-forz");

const MENO_FORZ = document.getElementById("meno-forz");

const MENO_COST_STAT_PART = document.getElementById("meno-cost-stat-part");

const PIU_COST_STAT_PART = document.getElementById("piu-cost-stat-part");

const MENO_FORZ_STAT_PART = document.getElementById("meno-forz-stat-part");

const PIU_FORZ_STAT_PART = document.getElementById("piu-forz-stat-part");

const COST_STAT_PART = document.getElementById("cost-stat-part");

const FORZ_STAT_PART = document.getElementById("forz-stat-part");

const CONFERMA_LVL = document.getElementById("conferma-lvl");

const NOME_ARMA = document.getElementById("nome-arma");

const DANNO_ARMA = document.getElementById("danno-arma");

const NOME_ARMATURA = document.getElementById("nome-armatura");

const DIFESA_ARMATURA = document.getElementById("difesa-armatura");

const NOME_SCUDO = document.getElementById("nome-scudo");

const DIFESA_SCUDO = document.getElementById("difesa-scudo");

const BOX_VENDOR = document.getElementById("box-vendor");

const SPADA_INIZIALE = document.getElementById("spada-iniziale");

const ARMATURA_INIZIALE = document.getElementById("armatura-iniziale");

const SCUDO_INIZIALE = document.getElementById("scudo-iniziale");

const COMBATTIAMO = document.getElementById("combattiamo");

const BOX_COMBATTIMENTO = document.getElementById("box-combattimento");

const IMMAGINE_MOSTRO = document.getElementById("immagine-mostro");

const VITA_MOSTRO = document.getElementById("vita-mostro");

const NOME_MOSTRO = document.getElementById("nome-mostro");

const CA_MOSTRO = document.getElementById("ca-mostro");

const ATTACCO_MOSTRO = document.getElementById("attacco-mostro");

const NUMERO_TIRO_CA_MOSTRO = document.getElementById("numero-tiro-ca-mostro");

const MESSAGGIO_DOPO_IL_TIRO_PERSONAGGIO = document.getElementById(
  "messaggio-dopo-il-tiro-personaggio"
);

const TIRA_CA_PER_IL_MOSTRO = document.getElementById("tira-ca-per-il-mostro");

const NUMERO_TIRO_CA_GIOCATORE = document.getElementById(
  "numero-tiro-ca-giocatore"
);

const MESSAGGIO_DOPO_IL_TIRO_MOSTRO = document.getElementById(
  "messaggio-dopo-il-tiro-mostro"
);

const TIRA_CA_PER_IL_GIOCATORE = document.getElementById(
  "tira-ca-per-il-giocatore"
);

const BOX_WIN_LOSE = document.getElementById("box-win-lose");

const MESSAGGIO_WIN_LOSE = document.getElementById("messaggio-win-lose");

const RICOMPENSE = document.getElementById("ricompense");

const OK_RICOMPENSA = document.getElementById("ok-ricompensa");

const EQUIP_BASE = {
  spada: {
    nome: "Spada Arrugginita",
    danno: 3,
    costo: 25,
  },
  armatura: {
    nome: "Armatura d'allenamento",
    difesa: 2,
    costo: 60,
  },
  scudo: {
    nome: "Scudo d'allenamento",
    difesa: 1,
    costo: 20,
  },
};

const PERSONAGGIO = {
  iniziativa: false,
  livello: 1,
  exp: 0,
  expTot: 100,
  vitaBase: 10,
  vitaV: 0,
  costituzione: 0,
  forza: 0,
  modCC: 0,
  modCF: 0,
  passaggioDiLivello: false,
  soldi: 100,
  armaIndossata: {
    ce: false,
    nomeArma: undefined,
    dannoArma: 0,
  },
  armaturaIndossata: {
    ce: false,
    nomeArmatura: undefined,
    difesaArmatura: 0,
  },
  scudoIndossato: {
    ce: false,
    nomeScudo: undefined,
    difesaScudo: 0,
  },
  danno: function () {
    return this.armaIndossata.dannoArma + this.modCF;
  },
  vita: function () {
    return this.vitaBase + this.modCC + this.livello;
  },
  ca: function () {
    return (
      this.modCF +
      this.armaturaIndossata.difesaArmatura +
      this.scudoIndossato.difesaScudo
    );
  },
  modificatoreCaratteristicheCostituzione: function () {
    for (let i = 0; i < this.costituzione; i += 3) {
      if (i == 0) {
      } else {
        this.modCC += 1;
        console.log(i);
        console.log(this.modCC);
      }
    }
    return this.modCC;
  },
  modificatoreCaratteristicheForza: function () {
    for (let i = 0; i < this.forza; i += 3) {
      if (i == 0) {
      } else {
        this.modCF += 1;
        console.log(i);
        console.log(this.modCF);
      }
    }
    return this.modCF;
  },
};
console.log(PERSONAGGIO);

let puntiIniziali = 10;

let puntiOgniLivello = 5;

let ricordoCostituzione;

let ricordoForza;

const MOSTRI = {
  cthulhu: {
    iniziativa: true,
    nome: "cthulhu",
    immagine: "assets/cthulhu.png",
    vita: 20,
    danno: 3,
    ca: 5,
    expOttenuta: 100,
    oroOttenuto: 100000,
  },
};

SUBMIT.addEventListener("click", () => {
  if (puntiIniziali === 0) {
    if (IMG.files.length > 0) {
      const file = IMG.files[0]; // Ottieni il primo file caricato
      const reader = new FileReader();

      reader.onload = function (e) {
        // Quando il file è stato letto con successo, memorizzane l'URL dati nell'oggetto PERSONAGGIO
        PERSONAGGIO.immagine = e.target.result;

        // Output dell'oggetto PERSONAGGIO con l'immagine associata
        console.log(PERSONAGGIO);

        // Aggiungi l'immagine al DOM
        const IMMAGINE_PERSONAGGIO = document.createElement("img");
        IMMAGINE_PERSONAGGIO.src = PERSONAGGIO.immagine;
        IMMAGINE_PERSONAGGIO.alt = "avatar";
        IMMAGINE_PERSONAGGIO.className = "img-avatar";
        BOX_AVATAR.appendChild(IMMAGINE_PERSONAGGIO);
      };

      reader.readAsDataURL(file); // Leggi il file come URL dati
    } else {
      // Output dell'oggetto PERSONAGGIO senza immagine
      console.log(PERSONAGGIO);
    }
    PERSONAGGIO.nome = NOME.value;
    PERSONAGGIO.costituzione = parseInt(COST.value);
    PERSONAGGIO.forza = parseInt(FORZ.value);
    PERSONAGGIO.modCC = PERSONAGGIO.modificatoreCaratteristicheCostituzione();
    PERSONAGGIO.modCF = PERSONAGGIO.modificatoreCaratteristicheForza();
    PERSONAGGIO.vitaV = PERSONAGGIO.vita();
    EXP.textContent = `EXP: ${PERSONAGGIO.exp} / ${PERSONAGGIO.expTot}`;
    SOLDI.textContent = `SOLDI: ${PERSONAGGIO.soldi} $`;
    DANNO.textContent = `DANNO: ${PERSONAGGIO.danno()}`;
    MAIN_START.classList.toggle("hide");
    MAIN.classList.remove("hide");
    NOME_LIVELLO.textContent = `${PERSONAGGIO.nome} LVL: ${PERSONAGGIO.livello}`;
    CLASSE_ARMATURA.textContent = `CA: ${PERSONAGGIO.ca()}`;
    VITA.textContent = `VITA: ${PERSONAGGIO.vita()}`;
    let numero = parseInt(COST.value);
    COST_STAT_PART.value = numero;
    numero = parseInt(FORZ.value);
    FORZ_STAT_PART.value = numero;
    ricordoCostituzione = parseInt(COST.value);
    ricordoForza = parseInt(FORZ.value);
    console.log(PERSONAGGIO);
  }
});

MODULO.addEventListener("submit", (e) => {
  e.preventDefault();
});

INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;

MENO_COST.addEventListener("click", () => {
  if (COST.value == 5) {
    return;
  } else if (puntiIniziali === 10) {
    return;
  } else {
    puntiIniziali += 1;
    console.log(puntiIniziali);
    INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
    let numero = parseInt(COST.value);
    numero -= 1;
    COST.value = numero;
  }
});

PIU_COST.addEventListener("click", () => {
  if (puntiIniziali === 0) {
    return;
  } else {
    puntiIniziali -= 1;
    console.log(puntiIniziali);
    INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
    let numero = parseInt(COST.value);
    numero += 1;
    COST.value = numero;
  }
});

MENO_FORZ.addEventListener("click", () => {
  if (FORZ.value == 5) {
    return;
  } else if (puntiIniziali === 10) {
    return;
  } else {
    puntiIniziali += 1;
    console.log(puntiIniziali);
    INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
    let numero = parseInt(FORZ.value);
    numero -= 1;
    FORZ.value = numero;
  }
});

PIU_FORZ.addEventListener("click", () => {
  if (puntiIniziali === 0) {
    return;
  } else {
    puntiIniziali -= 1;
    console.log(puntiIniziali);
    INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
    let numero = parseInt(FORZ.value);
    numero += 1;
    FORZ.value = numero;
  }
});

MENO_COST_STAT_PART.addEventListener("click", () => {
  if (PERSONAGGIO.passaggioDiLivello === false) {
    return;
  } else if (COST_STAT_PART.value == ricordoCostituzione) {
    return;
  } else if (puntiOgniLivello === 5) {
    return;
  } else {
    puntiOgniLivello += 1;
    let numero = parseInt(COST_STAT_PART.value);
    numero -= 1;
    COST_STAT_PART.value = numero;
  }
});

PIU_COST_STAT_PART.addEventListener("click", () => {
  if (PERSONAGGIO.passaggioDiLivello === false) {
    return;
  } else if (puntiOgniLivello === 0) {
    return;
  } else {
    puntiOgniLivello -= 1;
    let numero = parseInt(COST_STAT_PART.value);
    numero += 1;
    COST_STAT_PART.value = numero;
  }
});

MENO_FORZ_STAT_PART.addEventListener("click", () => {
  if (PERSONAGGIO.passaggioDiLivello === false) {
    return;
  } else if (FORZ_STAT_PART.value == ricordoForza) {
    return;
  } else if (puntiOgniLivello === 5) {
    return;
  } else {
    puntiOgniLivello += 1;
    let numero = parseInt(FORZ_STAT_PART.value);
    numero -= 1;
    FORZ_STAT_PART.value = numero;
  }
});

PIU_FORZ_STAT_PART.addEventListener("click", () => {
  if (PERSONAGGIO.passaggioDiLivello === false) {
    return;
  } else if (puntiOgniLivello === 0) {
    return;
  } else {
    puntiOgniLivello -= 1;
    let numero = parseInt(FORZ_STAT_PART.value);
    numero += 1;
    FORZ_STAT_PART.value = numero;
  }
});

CONFERMA_LVL.addEventListener("click", () => {
  if (puntiOgniLivello === 0) {
    PERSONAGGIO.costituzione = parseInt(COST_STAT_PART.value);
    PERSONAGGIO.forza = parseInt(FORZ_STAT_PART.value);
    PERSONAGGIO.modCC = 0;
    PERSONAGGIO.modCF = 0;
    PERSONAGGIO.modCC = PERSONAGGIO.modificatoreCaratteristicheCostituzione();
    PERSONAGGIO.modCF = PERSONAGGIO.modificatoreCaratteristicheForza();
    PERSONAGGIO.vitaV = 0;
    PERSONAGGIO.vitaV = PERSONAGGIO.vita();
    MENO_COST_STAT_PART.setAttribute("disabled", "disabled");
    PIU_COST_STAT_PART.setAttribute("disabled", "disabled");
    MENO_FORZ_STAT_PART.setAttribute("disabled", "disabled");
    PIU_FORZ_STAT_PART.setAttribute("disabled", "disabled");
    CLASSE_ARMATURA.textContent = `CA: ${PERSONAGGIO.ca()}`;
    VITA.textContent = `VITA: ${PERSONAGGIO.vita()}`;
    CONFERMA_LVL.classList.add("hide");
    PERSONAGGIO.passaggioDiLivello = false;
    ricordoCostituzione = 0;
    ricordoForza = 0;
    puntiOgniLivello = 5;
    ricordoCostituzione = PERSONAGGIO.costituzione;
    ricordoForza = PERSONAGGIO.forza;
    console.log(ricordoCostituzione, ricordoForza);
  }
});

SPADA_INIZIALE.addEventListener("mouseover", () => {
  SPADA_INIZIALE.setAttribute(
    "title",
    `Una spada arrugginita ma sempre meglio di nulla
  ha un danno di: ${EQUIP_BASE.spada.danno}, costa: ${EQUIP_BASE.spada.costo} $`
  );
});

ARMATURA_INIZIALE.addEventListener("mouseover", () => {
  ARMATURA_INIZIALE.setAttribute(
    "title",
    `un'armatura d'allenamneto per ti protegge di: ${EQUIP_BASE.armatura.difesa}, costo: ${EQUIP_BASE.armatura.costo} $`
  );
});

SCUDO_INIZIALE.addEventListener("mouseover", () => {
  SCUDO_INIZIALE.setAttribute(
    "title",
    `uno scudo un pò logoro però di protegge di: ${EQUIP_BASE.scudo.difesa}, costo: ${EQUIP_BASE.scudo.costo} $`
  );
});

SPADA_INIZIALE.addEventListener("click", () => {
  if (PERSONAGGIO.armaIndossata.ce === true) {
  } else if (PERSONAGGIO.soldi >= EQUIP_BASE.spada.costo) {
    PERSONAGGIO.armaIndossata.ce = true;
    PERSONAGGIO.soldi -= EQUIP_BASE.spada.costo;
    SOLDI.textContent = `SOLDI: ${PERSONAGGIO.soldi} $`;
    PERSONAGGIO.armaIndossata.dannoArma = EQUIP_BASE.spada.danno;
    DANNO.textContent = `DANNO: ${PERSONAGGIO.danno()}`;
    NOME_ARMA.textContent = EQUIP_BASE.spada.nome;
    DANNO_ARMA.textContent = EQUIP_BASE.spada.danno;
  }
});

ARMATURA_INIZIALE.addEventListener("click", () => {
  if (PERSONAGGIO.armaturaIndossata.ce === true) {
  } else if (PERSONAGGIO.soldi >= EQUIP_BASE.armatura.costo) {
    PERSONAGGIO.armaturaIndossata.ce = true;
    PERSONAGGIO.soldi -= EQUIP_BASE.armatura.costo;
    SOLDI.textContent = `SOLDI: ${PERSONAGGIO.soldi} $`;
    PERSONAGGIO.armaturaIndossata.difesaArmatura = EQUIP_BASE.armatura.difesa;
    CLASSE_ARMATURA.textContent = `CA: ${PERSONAGGIO.ca()}`;
    NOME_ARMATURA.textContent = EQUIP_BASE.armatura.nome;
    DIFESA_ARMATURA.textContent = EQUIP_BASE.armatura.difesa;
  }
});

SCUDO_INIZIALE.addEventListener("click", () => {
  if (PERSONAGGIO.scudoIndossato.ce === true) {
  } else if (PERSONAGGIO.soldi >= EQUIP_BASE.scudo.costo) {
    PERSONAGGIO.scudoIndossato.ce = true;
    PERSONAGGIO.soldi -= EQUIP_BASE.scudo.costo;
    SOLDI.textContent = `SOLDI: ${PERSONAGGIO.soldi} $`;
    PERSONAGGIO.scudoIndossato.difesaScudo = EQUIP_BASE.scudo.difesa;
    CLASSE_ARMATURA.textContent = `CA: ${PERSONAGGIO.ca()}`;
    NOME_SCUDO.textContent = EQUIP_BASE.scudo.nome;
    DIFESA_SCUDO.textContent = EQUIP_BASE.scudo.difesa;
  }
});

COMBATTIAMO.addEventListener("click", () => {
  BOX_VENDOR.classList.add("hide");
  BOX_COMBATTIMENTO.classList.remove("hide");
  IMMAGINE_MOSTRO.src = MOSTRI.cthulhu.immagine;
  VITA_MOSTRO.textContent = MOSTRI.cthulhu.vita;
  NOME_MOSTRO.textContent = MOSTRI.cthulhu.nome;
  CA_MOSTRO.textContent = MOSTRI.cthulhu.ca;
  ATTACCO_MOSTRO.textContent = MOSTRI.cthulhu.danno;
});

TIRA_CA_PER_IL_MOSTRO.addEventListener("click", () => {
  if (PERSONAGGIO.iniziativa == false) {
    let numeroTiro = D20();
    PERSONAGGIO.iniziativa = true;
    MOSTRI.cthulhu.iniziativa = false;
    NUMERO_TIRO_CA_MOSTRO.textContent = numeroTiro;
    if (numeroTiro > MOSTRI.cthulhu.ca) {
      MOSTRI.cthulhu.vita -= PERSONAGGIO.danno();
      MESSAGGIO_DOPO_IL_TIRO_PERSONAGGIO.textContent = `Hai superato la CA del mostro
      infliggi ${PERSONAGGIO.danno()}`;
      VITA_MOSTRO.textContent -= PERSONAGGIO.danno();
      if (MOSTRI.cthulhu.vita <= 0) {
        BOX_WIN_LOSE.classList.remove("hide");
        BOX_COMBATTIMENTO.classList.add("hide");
        MESSAGGIO_WIN_LOSE.textContent = `${PERSONAGGIO.nome} Hai vinto contro ${MOSTRI.cthulhu.nome}`;
        RICOMPENSE.textContent = `Hai ricevuto ${MOSTRI.cthulhu.expOttenuta} EXP e ${MOSTRI.cthulhu.oroOttenuto} $`;
        PERSONAGGIO.exp += MOSTRI.cthulhu.expOttenuta;
        PERSONAGGIO.soldi += MOSTRI.cthulhu.oroOttenuto;
        EXP.textContent = `EXP: ${PERSONAGGIO.exp} / ${PERSONAGGIO.expTot}`;
        SOLDI.textContent = `SOLDI: ${PERSONAGGIO.soldi} $`;
        if (PERSONAGGIO.exp >= PERSONAGGIO.expTot) {
          MENO_COST_STAT_PART.removeAttribute("disabled");
          PIU_COST_STAT_PART.removeAttribute("disabled");
          MENO_FORZ_STAT_PART.removeAttribute("disabled");
          PIU_FORZ_STAT_PART.removeAttribute("disabled");
          CONFERMA_LVL.classList.remove("hide");
          PERSONAGGIO.passaggioDiLivello = true;
          PERSONAGGIO.livello += 1;
          PERSONAGGIO.exp = 0;
          PERSONAGGIO.expTot += 50;
          NOME_LIVELLO.textContent = `${PERSONAGGIO.nome} LVL: ${PERSONAGGIO.livello}`;
          EXP.textContent = `EXP: ${PERSONAGGIO.exp} / ${PERSONAGGIO.expTot}`;
        }
      }
    } else {
      MESSAGGIO_DOPO_IL_TIRO_PERSONAGGIO.textContent = `Non hai superato la CA del mostro`;
    }
  }
});

TIRA_CA_PER_IL_GIOCATORE.addEventListener("click", () => {
  if (MOSTRI.cthulhu.iniziativa == false) {
    let numeroTiro = D20();
    PERSONAGGIO.iniziativa = false;
    MOSTRI.cthulhu.iniziativa = true;
    NUMERO_TIRO_CA_GIOCATORE.textContent = numeroTiro;
    if (numeroTiro > PERSONAGGIO.ca()) {
      PERSONAGGIO.vitaV -= MOSTRI.cthulhu.danno;
      VITA.textContent = `VITA: ${PERSONAGGIO.vitaV}`;
      MESSAGGIO_DOPO_IL_TIRO_MOSTRO.textContent = `Il mostro ha superato la tua CA e ti infligge ${MOSTRI.cthulhu.danno}`;
      if (PERSONAGGIO.vitaV <= 0) {
        VITA.textContent = 'VITA: 0'
        BOX_COMBATTIMENTO.classList.add("hide");
        BOX_WIN_LOSE.classList.remove("hide");
        MESSAGGIO_WIN_LOSE.textContent = "HAI PERSO!!!";
      }
    } else {
      MESSAGGIO_DOPO_IL_TIRO_MOSTRO.textContent = `Sei stato fortunato il mostro ti ha mancato`;
    }
  }
});

function D20() {
  return Math.floor(Math.random() * (20 - 1) + 1);
}
