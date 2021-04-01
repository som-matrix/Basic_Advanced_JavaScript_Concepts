
// Function statement
function a(){
    console.log('a called')
}
// Function expression
let b = function (){
    console.log('b called')
}

// Anonymous Function
// let c = function (){

// }

// Named function expression
let d = function xyz(){
    // but
    console.log(xyz)
    console.log('d is called')
}
d()
// xyz() -- this is a refrence error

// First class Function
// The ability of a function that can be used as a value , or can be defined inside another function or can also be returned from a function
// let c = function (param){
   
//    console.log(param)
// }
// c(function(){ // as a argument to a function
    
// })
let c = function (){

   return  function(){

   }
   
}
console.log(c()) // returned as a function from a function