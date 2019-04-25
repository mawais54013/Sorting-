var Queue = function(){
    this.items = [];

    this.enqueue =function(element) {
        this.items.push(element);
    }

    this.dequeue = function() {
        this.items.shift();
    }

    this.getFirst = function() {
        return this.items[0];
    }

    this.isEmpty = function() {
        return this.items.length === 0; 
    }

    this.size = function() {
        return this.items.length;
    }
}


var newQueue = new Queue();

newQueue.enqueue("Jerome");
newQueue.enqueue("Robert");
newQueue.enqueue("Ricky");
newQueue.enqueue("Sasha");

console.log(newQueue.getFirst());

// var arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// console.log(arr[0]);