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



/*TIRA E MOSTRA HABILIDADES*/
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
/////


/*ABAS DE QUALIFICAÇÕES*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


/*ABRE E FECHA OS MODAIS DOS SERVIÇOS*/
const modalViews = document.querySelectorAll('.services_modal')
    modalBtns = document.querySelectorAll('.services_button')
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*Deixando o nav menu claro para o usuario*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*Alterar background do header*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >=80){
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


/*Exibe scroll para cima*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up')
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll')
    }else{
        scrollTop.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollTop)

/*ATIVA MODO ESCURO*/
const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'fa-sun-o'


const selectedTheme = localStorage.getItem('selected_theme')
const selectedIcon = localStorage.getItem('selected_icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon-o' : 'fa-sun-o'



if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon-o' ? 'add' : 'remove'](iconTheme)

}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})




function enviaEmail(valida){
    verifica = valida.toString()
    assunto = document.getElementById('assunto')
    textoAssunto = assunto.value

    mensagem = document.getElementById('msg')
    textoMsg = mensagem.value

    botao = document.getElementById('botaoEmail')
    textoErro = document.getElementById('erroEmail')

    if(textoAssunto==='' || textoMsg===''){
        textoErro.outerHTML ='<p id="erroEmail" style="visibility: visible; font-size: 12px; padding-top: 5px">Preencha todos os campos para enviar o email</p>'
        return;
    }
    email = 'mailto:arthurfpeixoto@gmail.com?subject='+textoAssunto+'&amp;body='+textoMsg
    if(verifica === '0') {
        botao.outerHTML = '<a onclick="enviaEmail(1)" id="botaoEmail" class="button button_flex btn_pointer" href="' + email + '" target="_blank">Enviar mensagem <i class="fa fa-paper-plane-o button_icon"></i></a>'
        textoErro.outerHTML = '<p id="erroEmail" style="visibility: visible; font-size: 12px; padding-top: 5px">Clique novamente para confirmar</p>'

    }else if(verifica === '1'){
        assunto.value = ''
        mensagem.value = ''
        botao.outerHTML = '<a onclick="enviaEmail(0)" id="botaoEmail" class="button button_flex btn_pointer"  target="_blank">Validar email</a>'
        textoErro.outerHTML = '<p id="erroEmail" style="visibility: hidden; font-size: 12px; padding-top: 5px"></p>'
    }



}