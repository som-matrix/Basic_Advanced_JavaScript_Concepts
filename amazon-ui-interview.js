// Amazon UI interview questions
let sum = function(a){

    return function(b){
        if(b){
            return sum(a+b) //Recursion
        }
        return a
    }
}
console.log(sum(1)(2)(3)(4)())