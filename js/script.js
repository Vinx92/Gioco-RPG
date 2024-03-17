const MAIN = document.getElementById("main");
console.log(MAIN);

const MAIN_START = document.getElementById("main-start");
console.log(MAIN_START);

const MODULO = document.getElementById("modulo");
console.log(MODULO);

const NOME = document.getElementById("nome");
console.log(NOME);

const IMG = document.getElementById("i-avatar");
console.log(IMG);

const BOX_AVATAR = document.getElementById("box-avatar");
console.log(BOX_AVATAR);

const VITA = document.getElementById("vita");
console.log(VITA);

const INFO_SCHERMATA_INIZIALE = document.getElementById(
  "infoSchermataIniziale"
);
console.log(INFO_SCHERMATA_INIZIALE);

const NOME_LIVELLO = document.getElementById("nomeLivello");
console.log(NOME_LIVELLO);

const CLASSE_ARMATURA = document.getElementById("classeArmatura");
console.log(CLASSE_ARMATURA);

const PIU_COST = document.getElementById("piu-cost");
const MENO_COST = document.getElementById("meno-cost");
const PIU_FORZ = document.getElementById("piu-forz");
const MENO_FORZ = document.getElementById("meno-forz");

const COST = document.getElementById("cost");
console.log(COST.value == 5);

const FORZ = document.getElementById("forz");
console.log(FORZ);

const SUBMIT = document.getElementById("submit");
console.log(SUBMIT);

const PERSONAGGIO = {
  vitaBase: 10,
  vita: function () {
    return this.vitaBase + this.modCC + this.livello;
  },
  costituzione: 0,
  forza: 0,
  caBase: 0,
  caArmatura: 0,
  caScudo: 0,
  modCC: 0,
  ca: function () {
    return this.caBase + this.caArmatura + this.caScudo;
  },
  modificatoreCaratteristicheCostituzione: function () {
    for (let i = 1; i < this.costituzione; i += 3) {
      this.modCC += 1;
    }
    return this.modCC;
  },
  livello: 1,
  exp: 0,
  expTot: 100,
};
console.log(PERSONAGGIO);

let puntiIniziali = 10;
console.log(puntiIniziali);

SUBMIT.addEventListener("click", () => {
  PERSONAGGIO.nome = NOME.value;
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
  PERSONAGGIO.costituzione = parseInt(COST.value);
  PERSONAGGIO.forza = parseInt(FORZ.value);
  PERSONAGGIO.modCC = PERSONAGGIO.modificatoreCaratteristicheCostituzione();
  MAIN_START.classList.toggle("hide");
  MAIN.classList.remove("hide");
  NOME_LIVELLO.textContent = `${PERSONAGGIO.nome} LVL: ${PERSONAGGIO.livello}`;
  CLASSE_ARMATURA.textContent = `CA: ${PERSONAGGIO.ca()}`;
  VITA.textContent = `VITA: ${PERSONAGGIO.vita()}`;
  console.log(PERSONAGGIO);
});

MODULO.addEventListener("submit", (e) => {
  e.preventDefault();
});

INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;

MENO_COST.addEventListener("click", () => {
  if (COST.value == 5) {
    return;
  } else {
    if (puntiIniziali === 10) {
      return;
    } else {
      puntiIniziali += 1;
      console.log(puntiIniziali);
      INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
      let numero = parseInt(COST.value);
      numero -= 1;
      COST.value = numero;
    }
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
  } else {
    if (puntiIniziali === 10) {
      return;
    } else {
      puntiIniziali += 1;
      console.log(puntiIniziali);
      INFO_SCHERMATA_INIZIALE.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
      let numero = parseInt(FORZ.value);
      numero -= 1;
      FORZ.value = numero;
    }
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
