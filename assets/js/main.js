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



const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function ShowSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', ShowSkills)
})
