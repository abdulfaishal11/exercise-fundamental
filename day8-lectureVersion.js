// No 1 -> shooting game

class Player {
    constructor(name, health = 100, power = 10) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    damage(power) {
      this.health -= power;
    }
  
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
  
    showStatus() {
      return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
  }
  
  class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const health = Math.random() < 0.5 ? 0 : 10;
      const power = Math.random() < 0.5 ? 0 : 10;
      
      
      // return { 
      //health: health, 
      //power: power };
      return { health, power }; //shortcut
    }
  
    start() {
      while (this.player1.health > 0 && this.player2.health > 0) {
        // tampilin dulu status sekarang
        (this.player1.showStatus());
        this.player2.showStatus();
  
        // generate random item untuk tiap player dan langsung digunakan
        const itemPlayer1 = this.getRandomItem();
        const itemPlayer2 = this.getRandomItem();
  
        this.player1.useItem(itemPlayer1);
        this.player2.useItem(itemPlayer2);
  
        // player1 hit player 2 dan sebaliknya
        this.player2.damage(this.player1.power);
        this.player1.damage(this.player2.power);
  
        // tampilin status sekarang setelah kena damage
        console.log(this.player1.showStatus());
        console.log(this.player2.showStatus());
      }
  
      if (this.player1.health <= 0) {
        return `${this.player2.name} win`;
      } else {
        return `${this.player1.name} win`;
      }
    }
  }
  
  const playerA = new Player("budi");
  const playerB = new Player("siti");
  
  const game = new ShootingGame(playerA, playerB);
  console.log(game.start());
  
  // No 2 -> Calculate employee salary ============================================================
  class Employee {
    constructor(name) {
      this.name = name;
      this.workingHours = 0;
  
      console.log(name);
    }
  
    example() {
      console.log("example");
    }
  }
  
  class FulltimeEmployee extends Employee {
    constructor(name) {
      super(name);
    }
  
    addWorkingHours(hours) {
      this.workingHours += hours;
    }
  
    contoh() {
      this.example();
    }
  
    calculateTotalSalary() {
      const normalRate = 100000;
      const overTimeRate = 75000;
  
      if (this.workingHours <= 6) {
        return {
          name: this.name,
          total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
        };
      } else {
        const normalHour = 6;
        const overTimeHour = this.workingHours - normalHour;
  
        return {
          name: this.name,
          total:
            "Rp " +
            (
              overTimeHour * overTimeRate +
              normalHour * normalRate
            ).toLocaleString("id-ID"),
        };
      }
    }
  }
  
  class ParttimeEmployee extends Employee {
    constructor(name) {
      super(name);
    }
  
    addWorkingHours(hours) {
      this.workingHours += hours;
    }
  
    calculateTotalSalary() {
      const normalRate = 50000;
      const overTimeRate = 30000;
  
      if (this.workingHours <= 6) {
        return {
          name: this.name,
          total: "Rp " + (this.workingHours * normalRate).toLocaleString("id-ID"),
        };
      } else {
        const normalHour = 6;
        const overTimeHour = this.workingHours - normalHour;
  
        return {
          name: this.name,
          total:
            "Rp " +
            (
              overTimeHour * overTimeRate +
              normalHour * normalRate
            ).toLocaleString("id-ID"),
        };
      }
    }
  }
  
  // FULL-TIME
  const employee1 = new FulltimeEmployee("budi");
  employee1.addWorkingHours(7);
 
  console.log(employee1.calculateTotalSalary());
  
  employee1.contoh();
  
  // PART-TIME
  const employee2 = new ParttimeEmployee("joko");
  employee2.addWorkingHours(7);
  console.log(employee2.calculateTotalSalary());
  