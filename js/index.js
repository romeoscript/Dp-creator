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


// show userinformation
const loggedIn = document.querySelector('.logged__in')
let logged = document.querySelector('.logged__out')
console.log(logged)
console.log(loggedIn)

loggedIn.addEventListener('mouseover',()=>{
    logged.classList.add('no_display')
})
loggedIn.addEventListener('mouseout',()=>{
    logged.classList.remove('no_display')
})