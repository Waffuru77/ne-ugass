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
    let menubackground= this.getAttribute('data-menu-background')

    document.documentElement.style.setProperty('--background1', background1)
    document.documentElement.style.setProperty('--background2', background2)
    document.documentElement.style.setProperty('--text', text)
    document.documentElement.style.setProperty('--active', active)
    document.documentElement.style.setProperty('--menu-background', menubackground)
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