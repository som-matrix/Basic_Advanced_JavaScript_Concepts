//closure
// let b = 20 // totally public 
function outer(){ //outer scope
    let b = 20 
    function inner(){ //inner scope
      console.log(b)
    }
    // let a = 10
    return inner
}

// outer()() // this is the new way of calling both the outer and its inner
let out = outer() // this is the another way.
out()