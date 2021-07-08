console.log("Hola!")
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class StackUsingSinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    push = (value) => {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    pop = () => {
        if(this.head){
            const top = this.head;
            this.head = this.head.next;
            return top;
        }
        return null;
    }

    peek = () => {
        if(this.head)
        return this.head.value;

        return null;
    }

    isEmpty = () => {
        return this.head === null;
    }

    display = () => {
        if(this.isEmpty()){
            console.log("EMPTY! Just keep track of your pops!");
            return;
        }
        let current = this.head;
        let result = "";
        while(current != null)
        {
            result += current.value+" ";
            current = current.next;
        }
        console.log(result);            
    }
}

(() => {
    const stack = new StackUsingSinglyLinkedList();
    stack.display();
    stack.push(1);
    stack.push(2);
    stack.display();
    stack.pop();
    stack.display();
    stack.pop();
    stack.display();
    stack.pop();
    stack.display();
})();