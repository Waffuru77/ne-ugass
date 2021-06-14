const colors = document.getElementsByClassName('colors');

let i;
for(i = 0;i<colors.length;i++) {
    colors[i].addEventListener('click', changecolor)
}

function changecolor() {
    let background1 = this.getAttribute('data-background1')
    let background2 = this.getAttribute('data-background2')
    let text= this.getAttribute('data-text')
    let active= this.getAttribute('data-active')
    let active2= this.getAttribute('data-active2')
    let menubackground= this.getAttribute('data-menu-background')
    let boxbackground= this.getAttribute('data-box-background')
    let boxtext= this.getAttribute('data-box-text')
    let button1background= this.getAttribute('data-button1-background')
    let button2background= this.getAttribute('data-button2-background')
    let button1text= this.getAttribute('data-button1-text')

    document.documentElement.style.setProperty('--background1', background1)
    document.documentElement.style.setProperty('--background2', background2)
    document.documentElement.style.setProperty('--text', text)
    document.documentElement.style.setProperty('--active', active)
    document.documentElement.style.setProperty('--active2', active2)
    document.documentElement.style.setProperty('--menu-background', menubackground)
    document.documentElement.style.setProperty('--box-background', boxbackground)
    document.documentElement.style.setProperty('--box-text', boxtext)
    document.documentElement.style.setProperty('--button1-background', button1background)
    document.documentElement.style.setProperty('--button2-background', button2background)
    document.documentElement.style.setProperty('--button1-text', button1text)
}

function MenuHome() {
    window.location.href = "./index.html";
}

function MenuGames() {
    window.location.href = "./games.html";
}

function MenuDiscord() {
    window.location.href = "./discord.html";
}