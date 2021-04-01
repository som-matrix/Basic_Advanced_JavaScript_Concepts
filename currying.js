// let multiply = function(x,y){
//     console.log(x*y)
// }


// Another method is by closure
let multiply = function(x){
     return function (y){
         console.log(x*y)
     }
}
// let multiplyByTwo = multiply(2)
// multiplyByTwo(3)
multiply(2)(3) //currying
