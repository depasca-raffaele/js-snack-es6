//Array di oggetti contenente nome e peso di bici da corsa
const cicleList = [
  {
    nome: "Corsa Pro",
    peso: 6.8
  },
  {
    nome: "Velocità Extreme",
    peso: 6.2
  },
  {
    nome: "Aero Race",
    peso: 7.1
  },
  {
    nome: "Sprint Master",
    peso: 6.0
  },
  {
    nome: "Thunder Road",
    peso: 6.9
  }
];

 //Funzione che ricerca il nome della bicicletta con il peso minore
function getNameOfLightestBike() {
  // Variabile che salvará il nome della bicicletta con peso minore
  let bikeNameWithMinWeight = cicleList[0].nome;
  // Variabile che traccia il peso minimo trovato finora
  let currentMinimumWeight = cicleList[0].peso;
  // Ciclo for che itera attraverso tutti gli elementi di cicleList
  // Iniziamo da 1 perché il primo elemento è già stato assegnato come riferimento iniziale
  for (let indexPosition = 1; indexPosition < cicleList.length; indexPosition++) {
    // Otteniamo la bicicletta corrente dalla lista
    const currentBike = cicleList[indexPosition];
    // Verifichiamo se il peso della bicicletta corrente è minore del peso minimo trovato
    if (currentBike.peso < currentMinimumWeight) {
      // Se sì, aggiorniamo il peso minimo
      currentMinimumWeight = currentBike.peso;
      // Salviamo il nome della bicicletta più leggera nella variabile
      bikeNameWithMinWeight = currentBike.nome;
    }
  }
  // Restituiamo il nome della bicicletta con il peso minore
  return bikeNameWithMinWeight;
}

// Esempio di utilizzo della funzione
const nameOfLightestBike = getNameOfLightestBike();
console.log(`La bicicletta più leggera è: ${nameOfLightestBike}`);
