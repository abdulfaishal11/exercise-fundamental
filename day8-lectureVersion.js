//No.1 
// class Player {
//     constructor(name, health=100, power=10) {
//         this.name = name; 
//         this.health = health;
//         this.power = power;
//     }

//     damage(power) {
//         this.health -= power
       
//     }

//     user(item) {
//         this.health += item.health;
//         this.power += item.power;
//     }

//     showStatus() {
//         console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
//     }
// }

// class ShootingGame {
//     constructtor(player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//     }

//     getRandomItem () {
//         const health = Math.random() <0.5 ? 0 : 10;
//         const power = Math.random() <0.5 ? 0 : 10;
//         // return {health: health , power : power}
//         return {health , power}; //Shortcut
//     }

//     start() {
//      while (this.player1.health > 0 && this.player2.health >0) {
//         //Tampilin dulu status sekarang
        

//         //Generate random item untuk tiap player dan langsung digunakan
//         const itemPlayer1 = this.getRandomItem();
//         const itemPlayer2 = this.getRandomItem();

//         this.player1.useItem(itemPlayer1);
//         this.player2.useItem(itemPlayer2);
        
//         //player 1 hit player 2 dan sebaliknya:
//         this.player2.damage(this.player1.power);
//         this.player1.damage(this.player2.power);

//         //Tampilin status sekarang setelah kena demage
//         console.log(this.player1.showStatus());
//         console.log(this.player2.showStatus());
//      }

//      if(this.player1.health <=0) {
//         return `${this.player2.name} win` 
//     } else {
//         return `${this.player1.name} win`
//     }
//     }
// }

// const playerA = new Player("budi")
// const playerB = new Player("siti")
// const game = new ShootingGame(playerA,playerB)


// // No.2 :
// class Employee {
//     constructor(name) {
//         this.name = name
//         this.workingHours = 0;
//     }
// }

// class FulltimeEmployee extends Employee {
//     constructor(name) {
//         super(name);
//     }

//     addWorkingHours(hours) {
//         this.workingHours += hours;
//     }

//     calculateToSallary() {
//         const normalRate = 100000;
//         const overTimeRate = 75000;

//     if(this.workingHours <= 6 ) {
//         return {
//             total : "Rp" + (this.workingHours * normalRate).toLocaleString("id-ID");
//         };
//     else {
//         const normlHour = 6;
//         const overTimeHoure = this.workingHours - normalHour;
        
//         return {
//             total : 
//             "Rp" + 
//             (
//                 overTimeHour * overTimeRate + 
//                 normalHour * normalRate
//             ).toLocaleString("id-ID"),
//         }
//     }
//     }
// }