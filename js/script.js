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

const H4 = document.getElementById("h4");
console.log(H4);

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
    livello: 1,
};
console.log(PERSONAGGIO);

let puntiIniziali = 10;
console.log(puntiIniziali);

SUBMIT.addEventListener('click', () => {
PERSONAGGIO.nome = NOME.value
if (IMG.files.length > 0) {
    const file = IMG.files[0]; // Ottieni il primo file caricato
    const reader = new FileReader();

    reader.onload = function(e) {
      // Quando il file è stato letto con successo, memorizzane l'URL dati nell'oggetto PERSONAGGIO
      PERSONAGGIO.immagine = e.target.result;
      
      // Output dell'oggetto PERSONAGGIO con l'immagine associata
      console.log(PERSONAGGIO);
    };

    reader.readAsDataURL(file); // Leggi il file come URL dati
  } else {
    // Output dell'oggetto PERSONAGGIO senza immagine
    console.log(PERSONAGGIO);
  }
  PERSONAGGIO.costituzione = COST.value
  PERSONAGGIO.forza = FORZ.value
  MAIN_START.classList.toggle('hide')
  MAIN.classList.remove('hide')
})

MODULO.addEventListener("submit", (e) => {
    e.preventDefault();
});

H4.textContent = `Metti ${puntiIniziali} su queste due statistiche`;

MENO_COST.addEventListener("click", () => {
  if (COST.value == 5) {
    return;
  } else {
    if (puntiIniziali === 10) {
      return;
    } else {
      puntiIniziali += 1;
      console.log(puntiIniziali);
      H4.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
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
    H4.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
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
      H4.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
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
    H4.textContent = `Metti ${puntiIniziali} su queste due statistiche`;
    let numero = parseInt(FORZ.value);
    numero += 1;
    FORZ.value = numero;
  }
});
