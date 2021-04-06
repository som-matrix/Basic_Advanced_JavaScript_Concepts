const selectFile = document.querySelector('.file-type')
const getImage = async (e)=>{
    let file = e.target.files[0]
    const base64 = await getBase64(file)
    console.log(base64)
    
}
selectFile.addEventListener('change',getImage)

const getBase64 = (file) => new Promise((resolve, reject) => {
  let reader = new FileReader()  
  reader.readAsDataURL(file)
  reader.onload = ()=>resolve(reader.result)
  reader.onerror = (error)=>reject(error)
})
