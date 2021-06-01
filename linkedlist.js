class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
}
let list = new LinkedList();
LinkedList.prototype.insertAtBeginning = function(data){

        let newNode = new Node(data);

        newNode.next = this.head;

        
        this.head = newNode;
        return this.head;
    }
LinkedList.prototype.insertAtEnd = function(data){
            
            let newNode = new Node(data);
        
            if(!this.head){
                this.head = newNode;
                return this.head;
            }
        
           let tail = this.head;
           while(tail.next !== null){
                tail = tail.next;
           }
           tail.next = newNode;
           return this.head;
        }
        LinkedList.prototype.deleteAt = function(index){
                if (!this.head) {
                     this.head = new Node(data);
                     return;
                 }
            
                if (index === 0) {
                    this.head = this.head.next;
                    return;
                }
            
                const previous = this.getAt(index - 1);
                
                if (!previous || !previous.next) {
                    return;
                }
                
                previous.next = previous.next.next;     
                return this.head
            }