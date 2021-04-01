function Counter(){
  
    let count = 0  // this is now encapsulated 
    let store = 'jn' // no use smartly garbage collected when the function is called
    this.incrementCounter = function(){
        count++;
        console.log(count)
    }
    this.decrementCounter = function(){
        count--;
        console.log(count)
    }

}

let mainCounter = new Counter
mainCounter.incrementCounter()
mainCounter.incrementCounter()
mainCounter.decrementCounter()

let secondaryCounter = new Counter
secondaryCounter.incrementCounter()
secondaryCounter.incrementCounter()
secondaryCounter.decrementCounter()