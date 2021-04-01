// web API that are prebuilt in browsers 
/**
 * setTimeout()
 * console
 * fetch()
 * DOM api or DOM model or DOM tree 
 * localStorage etc...
 */

// The absove api are used by v8 JavaScript engine by a Global Object called "window"
// for e.g
/**
 * window.setTimeout()
 * window.console
 * window.fetch()
 * window.document
 * window.localStorage etc................................
 */

// AS we all know all the program execution takes place inside the call stack inside the JS engine
// so , lets program some code and see how event loop is worked  
console.log("Start")
setTimeout(function cbT(){ //callback timer function cbT() goes to callback queue after 2sec and waits to be executed
  console.log('Timer')
},2000)
document.getElementById('click_me')
.addEventListener('click',function cbe(){ //callback cbe goes to callback queue and waits to be executed
    console.log('Click callback is executed')
})
fetch('https://my-website-virid.vercel.app/')
 .then(function cbf(data){ //callback function goes to the microtask queue as it is attched toa promise and should be executed first when the call stack becomes empty
    console.log('fetched',data)
 })
 .catch(err=>console.log(err))

console.log('End')

// The output will be in this order
/**
 * Start
 * End
 * fetched
 * Timer -- beacuse microtask queue has highest precedance , if their are multiple microtasks callback queue waits for all then it will execute
 */