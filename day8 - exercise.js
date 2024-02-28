//01 

class Player {
    constructor(name,health,power) {
        this.name = name;
        this.health = health;
        this.power = power;
    
       
    }
    hit(power) {
        this.health -= power
        console.log(this.health);
        
    }
    useItem(item) {
        this.health += item.health;
        this.power += item.power;
        
        
    }
    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
        
        
    }
}


class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2; 
    }

    getRandomItem() {
        return {
            Health : Math.floor(Math.random() *1.5) *10,
            Power :  Math.floor(Math.random() *1.5) *10
            }
            
        }

      

    start() {
        let currentPlayer = this.player1;
        let otherPlayer = this.player2;
        console.log(this.getRandomItem());
    
        while (this.player1.health && this.player2.health !==0 ) {
            console.log("Current turn: ", currentPlayer.name);
            currentPlayer.showStatus();
            otherPlayer.showStatus();

            const itemForCurrentPlayer = this.getRandomItem();
            const itemForOtherPlayer = this.getRandomItem();
      
            console.log(`${currentPlayer.name} gets an item: `, itemForCurrentPlayer);
            console.log(`${otherPlayer.name} gets an item: `, itemForOtherPlayer);
      
            currentPlayer.useItem(itemForCurrentPlayer);
            otherPlayer.useItem(itemForOtherPlayer);
      
            currentPlayer.showStatus();
            otherPlayer.showStatus();
      
            otherPlayer.hit(currentPlayer.power);
      
            [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];  

        } 
            const winner =
            this.player1.health > 0 ? this.player1.name : this.player2.name;
            console.log(`Winner is ${winner}`);

         
    }
}
// Player1
const player1 = new Player ("PlayerA",100,10)
const healthItem1 = Math.floor(Math.random() *10);
const powerItem1 = Math.floor(Math.random() *10);
player1.hit(10)
player1.useItem(healthItem1,powerItem1)
player1.showStatus()


// Player2
const player2 = new Player ("PlayerB",100,10)
const healthItem2 = Math.floor(Math.random() *10);
const powerItem2 = Math.floor(Math.random() *10);
player2.useItem(healthItem2,powerItem2)
player2.showStatus()



const player = new ShootingGame (player1,player2,100);
console.log(player);
(player.getRandomItem())
player.start()
console.log(player);

//02 :
// ● Specifications :
//      ○ Create a program to calculate total salary based on employee type
//      ○ There are two types of employee : full-time & part-time
//      ○ Salary for full-time employee :
//          ■ IDR 100.000 / hour
//          ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//      ○ Salary for part-time employee :
//          ■ IDR 50.000 / hour
//          ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
//      ○ Create an Employee as a parent class
//      ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
//          ■ Create a method in that class to add working hour per day
//          ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept


class Employee {
  constructor(baseSalary) {
    this.baseSalary = baseSalary;
    this.workingHours = 0;
  }
  
  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    return this.baseSalary;
  }
}

class FullTimeEmployee extends Employee {
  constructor(baseSalary, overtimeSalary) {
    super(baseSalary);
    this.overtimeSalary = overtimeSalary;
  }

  calculateSalary() {
    if (this.workingHours > 6) {
      return (6 * this.baseSalary) + ((this.workingHours - 6) * this.overtimeSalary);
    } else {
      return this.baseSalary * this.workingHours;
    }
  }
}

class PartTimeEmployee extends Employee {
  constructor(baseSalary, overtimeSalary) {
    super(baseSalary);
    this.overtimeSalary = overtimeSalary
  }

  calculateSalary() {
    if (this.workingHours > 6) {
      return (6 * this.baseSalary) + ((this.workingHours - 6) * this.overtimeSalary);
    } else {
      return this.baseSalary * this.workingHours;
    }
  }
}

const fullTime = new FullTimeEmployee(100000,75000);
fullTime.addWorkingHours(7);
console.log(fullTime.calculateSalary());

const partTime = new PartTimeEmployee(50000, 30000);
partTime.addWorkingHours(8);
console.log(partTime.calculateSalary())











