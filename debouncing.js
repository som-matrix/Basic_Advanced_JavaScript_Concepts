let counter = 0
const getData = ()=>{
    console.log('Fetching data....',counter++)
}

// Now lets use debouncing

const deBounce = function(fn,delay){
   let timer
    return function(){
        let context = this,
        args = arguments
        clearTimeout(timer)
        timer= setTimeout(()=>{
            fn.apply(context,args);
        },delay);
    }
}

let magicFunction = deBounce(getData,500)