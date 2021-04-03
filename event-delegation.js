// Event delegation
const parent = document.getElementById('container')
parent.addEventListener('keyup',(e)=>{
    if(e.target.type === 'text'){
        e.target.value = e.target.value.toUpperCase()
    }
})