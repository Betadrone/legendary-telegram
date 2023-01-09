class Hero {
    health= 50;
    attack= 5;
    defence= 4;
    magic= 5;
    heroAtk = function(){
       let dmg = this.attack - Monster.defence;
       Monster.health -= dmg;
    }
}

console.log('1')

class Monster {
    health = 50;
    attack = 7;
    defence = 4;
    specialAttack = 9;
    monsterAtk = function(){
        let dmg = this.attack - Hero.defence;
        Hero.health -= dmg;
    }
}

console.log('2')

function Combat(){
    Hero.heroAtk
}

console.log('3')
