var Stack = function(){
    this.items = [];

    this.push=function(element) {
        this.items.push(element);
    }

    this.pop = function() {
        return this.items.pop();
    }

    this.peek = function() {
        return this.items[this.items.length -1];
    }

    this.isEmpty = function() {
        return this.items.length === 0;
    }

    this.clear = function() {
        this.item = [];
    }
}

var newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(4);

console.log(newStack.peek());