// call , apply , bind
let name1 = {
    firstName:'Satya',
    lastName: 'Swaroop',
    printFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let name2 = {
    firstName: 'MS',
    lastName: 'Dhoni'
}

// suppose we have a separte method 
let printFullBio = function(state,city){
    console.log(`${this.firstName} ${this.lastName} from ${state},${city} `)
}

// printFullBio.call(name1,'Odisha')
// printFullBio.call(name2,'Ranchi')

// Same function expression with apply
printFullBio.apply(name1,['Odisha','Talcher'])
printFullBio.apply(name2,['Jharkhand','Ranchi'])

// now with bind
// bind creates a copy of that function so we can call it whenever we want
let printAllDetails = printFullBio.bind(name1,'Odisha','Talcher')
console.log(printAllDetails) //copy of printFullBio()