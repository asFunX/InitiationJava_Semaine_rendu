/*
// La classe 'Personnage' représente un individu avec un prénom et une santé mentale.
class Personnage {
    // Le constructeur initialise le personnage avec un prénom et une valeur de santé mentale.
    constructor(prenom, santeMentale) {
        this.prenom = prenom;          // Le prénom du personnage.
        this.santeMentale = santeMentale;  // La santé mentale du personnage.
    }
}

// La classe 'Trajet' représente un trajet effectué en taxi.
class Trajet {
    // Le constructeur initialise le trajet avec une liste de chansons de radio et un nombre de feux rouges.
    constructor(radio, feuxRouges) {
        this.radio = radio;            // Liste des musiques disponibles sur la radio.
        this.feuxRouges = feuxRouges;      // Nombre de feux rouges pendant le trajet.
        this.changementsTaxi = 0;     // Compteur du nombre de changements de taxi.
    }

    // La méthode 'effectuerTrajet' simule un trajet pour un personnage donné.
    effectuerTrajet(personnage) {
        // Pour chaque feu rouge...
        for (let i = 0; i < this.feuxRouges; i++) {
            // On choisit une musique au hasard parmi les disponibles sur la radio.
            const musique = this.radio[Math.floor(Math.random() * this.radio.length)];

            // On affiche le feu rouge en cours, la musique jouée et le nombre de feux restants.
            console.log(`Feu rouge ${i + 1}: Musique jouée : ${musique}.\nFeux restants : ${this.feuxRouges - i - 1}`);

            // Si la musique "Anissa - Wejdene" est jouée, le personnage perd de la santé mentale.
            if (musique === "Anissa - Wejdene") {
                personnage.santeMentale -= 1;
                this.changementsTaxi += 1;

                // Si la santé mentale du personnage atteint zéro ou moins, il y a une "explosion".
                if (personnage.santeMentale <= 0) {
                    console.log("Explosion");
                    return;
                } else {
                    // Sinon, on affiche un changement de taxi et la santé mentale restante.
                    console.log(`Changement de taxi (Santé mentale actuelle: ${personnage.santeMentale})`);
                }
            }
        }

        // À la fin du trajet, on affiche un message d'arrivée et le nombre de changements de taxi effectués.
        console.log(`Arrivé à destination! Nombre de changements de taxi : ${this.changementsTaxi}`);
    }
}

// On crée un personnage nommé 'John' avec une santé mentale de 10.
const john = new Personnage("John", 10);

// On définit une liste de musiques.
const musiques = ["Sprinter", "Hope", "Ticking Away", "Anissa - Wejdene", "Chatter"];

// On crée un trajet avec la liste des musiques et 30 feux rouges.
const trajet = new Trajet(musiques, 30);

// On effectue le trajet pour le personnage 'John'.
trajet.effectuerTrajet(john);

*/