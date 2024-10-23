//define characteristics using COnstructor Notation//
function Monster (name, toes, eyes, batWools ) {
    this.name = name;
    this.toes = toes;
    this.eyes = eyes;
    this.batWools = batWools;
}

//define each variable//

var agathaMonster = new Monster (`Agatha`,10, 2,5);
var bellatrixMonster = new Monster (`Bellatrix`, 20, 4, 2)
var malaficentMonster = new Monster (`Malaficent`, 50, 10, 5)

//Function for generating monstermash text//

function generateMonsters() {
    const agathaText = `${agathaMonster.name} has ${agathaMonster.toes}, Eyes: ${agathaMonster.eyes}, BatWools: ${agathaMonster.batWools};`
    const bellatrixText = `${bellatrixMonster.name} has ${bellatrixMonster.toes}, Eyes: ${bellatrixMonster.eyes}, BatWools: ${bellatrixMonster.batWools};`
    const malaficentText = `${malaficentMonster.name} has ${malaficentMonster.toes}, Eyes: ${malaficentMonster.eyes}, BatWools: ${malaficentMonster.batWools}`;

//identify//
    document.getElementById('Agatha').innerText = agathaText;
    document.getElementById('Bellatrix').innerText = bellatrixText;
    document.getElementById('Malaficent').innerText = malaficentText;
}
//call function//
