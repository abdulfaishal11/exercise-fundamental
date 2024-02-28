// Food Ordering Queue

class FoodOrderQueue {
    constructor() {
      this.orders = [];
    }
  
    showOrders() {
      console.log("queue ", this.orders);
    }
  
    randomSec() {
      return Math.floor(Math.random() * 4) + 1;
    }
  
    addOrder(order) {
      this.orders.push(order);
      console.log(`${order} added to queue`);
    }
  
    promise(data, sec) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${data} Done in ${sec} seconds`);
        }, sec * 1000);
      });
    }
  
    async processOrders() {
      let i = 0;
      while (this.orders.length > 0) {
        const result = await this.promise(this.orders[i], this.randomSec());
        this.orders.shift();
        console.log(result);
      }
  
      this.showOrders();
    }
  }
  
  const queue = new FoodOrderQueue();
  
  queue.addOrder("makanan1");
  queue.addOrder("makanan2");
  queue.addOrder("makanan3");
  queue.addOrder("makanan4");
  queue.addOrder("makanan5");
  
  queue.showOrders();
  
  queue.processOrders();
  