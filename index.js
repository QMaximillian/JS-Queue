class Queue {
  constructor(){
    this.queue = [];
  }

  get length(){
    return this.queue.length
  }

  enqueue(item){
    this.queue.push(item)
  }

  dequeue(item){
    return this.queue.shift()
  }

  peek(){
    return this.queue[0]
  }

  isEmpty(){
    return this.length === 0
  }
}

let holidays = new Queue()
holidays.isEmpty()

holidays.enqueue('Halloween')
holidays.enqueue('Christmas')
holidays.enqueue("Valentine's")

console.log(holidays)

console.log(holidays.dequeue())

console.log(holidays.peek())
