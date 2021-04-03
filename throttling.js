// Throttling in JavaScript
const expensive = ()=>{
    console.log('It is expensive and you should know its worth')
}
// This will fire even for a little amount of px
// window.addEventListener('resize', betterExpensive)

// We need to throttle this and write a better expensive function

const throttled = (func,limit)=>{
    let flag = true
    return function(){
    //   if that expensive function is somehow taking some arguments or point to this also then we got this
     let context = this,
     args = arguments
     if(flag){
         func.apply(context,args)
         flag = false
         setTimeout(()=>{
             flag = true
         },limit)
     }
    }
}
let betterExpensive = throttled(expensive,500)

// This is now much better
window.addEventListener('resize', betterExpensive)