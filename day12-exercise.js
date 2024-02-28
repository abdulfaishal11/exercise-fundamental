class Queue {
    constructor (order, reject) {
        this.order = []
     
    }

    queuing (order) {
        while (this.order.includes(order)) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(`${this.order} on ordering`);
                }, 3000);
              });
            };
    }

    
}


const queuing = new Queue ()
console.log(queuing.queuing(""));









