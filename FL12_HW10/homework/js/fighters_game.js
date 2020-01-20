class Fighter {
    constructor(data) {
        this.name = data.name;
        this.damage = data.damage;
        this.hp = data.hp;
        this.strength = data.strength;
        this.agility = data.agility;
        this.wins = 0;
        this.losses = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    attack(defender){
        let probability = defender.getAgility() + defender.getStrength();
        let random = Math.floor(Math.random() * 100);
        // console.log(random);
    
        if (random > probability) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.name} makes ${this.damage} to ${defender.getName()}`);
        } else {
            console.log(`${this.name} attack missed`);
        }
    }

    dealDamage(damage) {
        this.hp -= damage;
    }

    logCombatHistory() {
        return console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`);
    }

    heal(hp) {
        this.hp += hp;
        if (this.hp > 100) {
            this.hp = 100;
        }
    }

    addWin() {
        this.wins += 1;
    }

    addLoss() {
        this.losses += 1;
    }
}
const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); 
const myFighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 40, agility: 15}); 


let buttle = function(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        return console.log(`${fighter1.getName()} is dead and can't faight`);
    }

    if (fighter2.getHealth() === 0) {
        return console.log(`${fighter2.getName()} is dead and can't faight`);
    }

    let fight = true;

    while(fight) {
        fighter1.attack(fighter2);
        if (fighter2.getHealth() < 1) {
            fight = false;
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
            break;
        }
        fighter2.attack(fighter1);
        if (fighter1.getHealth() < 1) {
            fight = false;
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
            break;
        }
    }
}

buttle(myFighter, myFighter2);
buttle(myFighter, myFighter2);
myFighter.heal(44);
console.log(myFighter.getHealth());
buttle(myFighter, myFighter2);
myFighter.logCombatHistory();
myFighter2.logCombatHistory();
