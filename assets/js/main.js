/*MOSTRA E TIRA MENU*/
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

/*MOSTRA MENU*/
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show_menu')
    })
}
/*TIRA MENU*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu')
    })
}
/*TIRA MENU MOBILE*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))