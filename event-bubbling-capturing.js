//Event bubbling and capturing
document.getElementById('grandparent')
.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('Grandparent clicked')
}) //true
document.getElementById('parent')
.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('parent clicked')
})
document.getElementById('child')
.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('child clicked')
})