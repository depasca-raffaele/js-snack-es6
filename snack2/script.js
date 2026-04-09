const footballTeamsList = [
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Juve",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: "Lazio",
    puntiFatti: 0,
    falliSubiti: 0
  }
];
//Assegno falli e punti alle squadre
for(let i = 0; i < footballTeamsList.length; i++){
    footballTeamsList[i].puntiFatti = Math.floor(Math.random() * 20);
    footballTeamsList[i].falliSubiti = Math.floor(Math.random() * 10);
    console.log(footballTeamsList[i].falliSubiti);
    console.log(footballTeamsList[i].puntiFatti);
}

// Nuovo array con solo nome e falliSubiti
const teamsSimplified = [];

for(let i = 0; i < footballTeamsList.length; i++){
    teamsSimplified.push({
        nome: footballTeamsList[i].nome,
        falliSubiti: footballTeamsList[i].falliSubiti
    });
}

console.log(teamsSimplified);