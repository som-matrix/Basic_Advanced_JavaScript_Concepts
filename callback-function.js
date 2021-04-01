// Callback function
// Function called back later inside a scope chain and it does not block the main thread
// Not blockimg the main thread
setTimeout(function(){
    console.log("Timer is finished")
},5000)

let a = function (y){
    console.log('a is called');
    y()
}
a(function b(){ // callback function used as argument
    console.log('b is called')
})

// Callback example with event-listners
// document.getElementById('click_me').addEventListener('click',function(){ //this takes a callback function and it will be invoked when the event is dispatched
//     console.log('Button is clicked')
// })

//closures with event listeners 
function attachEvent(){
    let count = 1
    document.getElementById('click_me').addEventListener('click',function(){ //this takes a callback function and it will be invoked when the event is dispatched
        console.log(`Button is clicked ${count} times`)
        count++
    })
}
attachEvent() // this function is the closure of its lexical child