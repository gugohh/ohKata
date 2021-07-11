class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
        }
        attack() {
            return this.power;
        }
        defend(damage) {
            return this.life -= damage;
        }
    }
class Maya extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkColaCao() {
       return this.power += 10;
    }
}
class Azteca extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkNesquik() {
        return this.life += 10;
    }
   
}

let miMaya = new Maya(100,30 );
let miAzteka = new  Azteca(40,60);

miMaya.attack();
miAzteka.defend();

console.log(miMaya);
console.log(miAzteka);

miAzteka.attack();
miMaya.defend();
