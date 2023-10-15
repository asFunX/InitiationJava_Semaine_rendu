/*
// Initialisation des personnages et caractéristiques

// Jason est le personnage principal avec une vie initiale de 100.
const jason = {
    vie: 100
};

// Les caractéristiques possibles des survivants sont définies ici.
const caracteristiques = [
    { type: "Nerd", mourir: 0.3, degats: 0.5, mourirEnAttaquant: 0.2 },
    { type: "Sportif", mourir: 0.1, degats: 0.7, mourirEnAttaquant: 0.2 },
    { type: "Blonde", mourir: 0.4, degats: 0.4, mourirEnAttaquant: 0.3 }
];

// Une liste des prénoms possibles pour les survivants.
let prenoms = ["Alice", "Bob", "Charlie", "David", "Emma"];

// Liste qui contiendra les survivants créés.
const survivants = [];

// Création de cinq survivants avec des noms et des caractéristiques aléatoires.
for(let i = 0; i < 5; i++) {
    const indexPrenom = Math.floor(Math.random() * prenoms.length);
    const nom = prenoms[indexPrenom];
    // Enlève le prénom choisi de la liste pour éviter les doublons.
    prenoms = prenoms.slice(0, indexPrenom).concat(prenoms.slice(indexPrenom + 1));

    const caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    survivants.push({ nom: nom, caracteristique: caracteristique, estVivant: true });
}

// Simulation du jeu

// Tant que Jason a de la vie et qu'il reste des survivants en vie...
while(jason.vie > 0 && survivants.some(s => s.estVivant)) {
    // Sélection d'un survivant en vie au hasard.
    const survivant = survivants.filter(s => s.estVivant)[Math.floor(Math.random() * survivants.filter(s => s.estVivant).length)];
    const chance = Math.random();

    // Selon les caractéristiques du survivant, différents scénarios peuvent se produire :
    if(chance < survivant.caracteristique.mourir) {
        console.log(`Jason a tué ${survivant.nom}`);
        survivant.estVivant = false;
    } else if(chance < survivant.caracteristique.mourir + survivant.caracteristique.degats) {
        jason.vie -= 10;
        console.log(`${survivant.nom} a esquivé et a infligé 10 dmg à Jason !`);
    } else {
        jason.vie -= 15;
        console.log(`${survivant.nom} a infligé 15 dmg à Jason mais est mort dans la lutte...`);
        survivant.estVivant = false;
    }
}

// Résultat final

// Si Jason n'a plus de vie...
if(jason.vie <= 0) {
    console.log('Jason est mort');
    const survivantsMorts = survivants.filter(s => !s.estVivant).map(s => s.nom);
    if(survivantsMorts.length > 0) {
        console.log(`Les survivants ont gagné mais RIP à ${survivantsMorts.join(', ')}`);
    } else {
        console.log('Tous les survivants sont en vie !');
    }
} else {
    console.log('Jason a tué tout le monde !');
}

*/