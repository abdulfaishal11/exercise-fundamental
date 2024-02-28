// You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
//     you can perform operations such as adding customers to the queue, calling the next customer, and 
//     counting the number of customers in the queue.

//    constructor:
//    - this.queue

//    method : 
//    - enqueue : menambahkan value baru dalam antrian
//    - dequeue : menghilangkan value paling depan dalam antrian
//    - size : melihat jumlah antrian saat ini
class Queue {
    #container;
    constructor() {
        this.#container = [];
    }

    enqueque (a) {
        //masukan value baru dalam antrian
        this.#container.push(a);
        return `antrian ${a} telah ditambahkan`
    }

    dequeeue(a) {
        //Menghilangkan value paling depan dalam antrian
        this.#container.shift(a)
        return `antrian ${a} telah dihapus`

    }

    getAllElements() {
        //melihat jumlah antrian saat ini
        return this.#container
    }
}

const queue = new Queue();

console.log(queue.enqueque(1));
console.log(queue.enqueque(1));
console.log(queue.enqueque(3));
console.log(queue.enqueque(4));
console.log(queue.enqueque(5));
console.log(queue.enqueque(5));
console.log(queue.enqueque(5));

console.log(queue.getAllElements());

console.log(queue.dequeeue(1));
console.log(queue.dequeeue(2));

console.log(queue.getAllElements());