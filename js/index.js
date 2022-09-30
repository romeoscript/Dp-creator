let mainBox = document.querySelector('.viewed__dp')
let showBox = document.querySelector('.button__create')
let backDrop = document.querySelector('.backdrop')

showBox.addEventListener('click',()=>{
    mainBox.classList.add('mainbox')
    backDrop.classList.add('backdropFilter')
    
})
backDrop.addEventListener('click',()=>{
    mainBox.classList.remove('mainbox')
    backDrop.classList.remove('backdropFilter')
    
})