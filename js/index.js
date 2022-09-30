let mainBox = document.querySelector('.viewed__dp')
let showBox = document.querySelector('.button__create')
let backDrop = document.querySelector('.backdrop')
let displayUl = document.querySelector('.displayUL')
let mainAside = document.querySelector('.mainaside')
let chevy = document.querySelector('.chevy')

showBox.addEventListener('click',()=>{
    mainBox.classList.add('mainbox')
    backDrop.classList.add('backdropFilter')
    
})
backDrop.addEventListener('click',()=>{
    mainBox.classList.remove('mainbox')
    backDrop.classList.remove('backdropFilter')
    
})

displayUl.addEventListener('click',()=>{
    mainAside.classList.toggle('aside1')
    chevy.classList.toggle('chevy1')
})
