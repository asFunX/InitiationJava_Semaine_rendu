/*
// Classe Pokemon
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    // La fonction vérifie si le Pokémon a de la chance pour attaquer.
    isLucky() {
        return Math.random() < this.luck;
    }

    // La fonction d'attaque qui renvoie les dégâts infligés.
    attackPokemon(defender) {
        if (this.isLucky()) {
            const damage = Math.max(this.attack - defender.defense, 0); // La valeur minimum des dégâts est de 0.
            defender.hp -= damage;
            return damage;
        }
        return 0; // Pas de dégâts si le Pokémon n'a pas de chance.
    }
}

// Création des deux instances de Pokémon
const pikachu = new Pokemon("Pikachu", 50, 30, 100, 0.8); // 80% de précision
const dracaufeu = new Pokemon("dracaufeu", 60, 40, 100, 0.4); // 40% de précision

// Combat entre les deux Pokémon
while (pikachu.hp > 0 && dracaufeu.hp > 0) {
    const damageByPikachu = pikachu.attackPokemon(dracaufeu);
    console.log(`${pikachu.name} a infligé ${damageByPikachu} de dégâts à ${dracaufeu.name}`);
    console.log(`Vie de ${dracaufeu.name}: ${dracaufeu.hp}`);

    if (dracaufeu.hp <= 0) {
        console.log(`${dracaufeu.name} est mort`);
        break;
    }

    const damageBydracaufeu = dracaufeu.attackPokemon(pikachu);
    console.log(`${dracaufeu.name} a infligé ${damageBydracaufeu} de dégâts à ${pikachu.name}`);
    console.log(`Vie de ${pikachu.name}: ${pikachu.hp}`);

    if (pikachu.hp <= 0) {
        console.log(`${pikachu.name} est mort`);
    }
}

if (pikachu.hp <= 0) {
    console.log(`${dracaufeu.name} a gagné le combat !`);
} else {
    console.log(`${pikachu.name} a gagné le combat !`);
}

*/