const hamburgerButton=document.getElementById('hamburger')
const navLiLst=document.getElementById('nav-list')

function toggleButton(){
    navLiLst.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)