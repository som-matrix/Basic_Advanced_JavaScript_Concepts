const name = {
    firstName: 'Satya',
    lastName: 'Swaroop'
}

let printName = function(hometown,state,country,continent){
    console.log(`${this.firstName} ${this.lastName} from ${hometown},${state},${country},${continent}`)
}

let printFullNames = printName.bind(name,'Talcher','Odisha')
printFullNames('India','Asia')

//lets write the polyfill for bind function
Function.prototype.myBind = function(...args){
    let obj = this,
     params = args.slice(1)
    return function(...args2){
      obj.apply(args[0],[...params,...args2])
    }
}

let printFullName = printName.myBind(name,'Talcher','Odisha')
printFullName('India','Asia')