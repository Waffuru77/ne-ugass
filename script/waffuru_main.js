const colors = document.getElementsByClassName('colors');

let i;
for(i = 0;i<colors.length;i++) {
    colors[i].addEventListener('click', changecolor)
}

function changecolor() {
    let background = this.getAttribute('data-background')
    let clipbackground = this.getAttribute('data-clip-background')
    let text= this.getAttribute('data-text')
    let buttonbackground= this.getAttribute('data-button-background')
    let boxbackground= this.getAttribute('data-box-background')
    let active= this.getAttribute('data-active')

    document.documentElement.style.setProperty('--background', background)
    document.documentElement.style.setProperty('--clip-background', clipbackground)
    document.documentElement.style.setProperty('--text', text)
    document.documentElement.style.setProperty('--button-background', buttonbackground)
    document.documentElement.style.setProperty('--box-background', boxbackground)
    document.documentElement.style.setProperty('--active', active)
}

function MenuHome() {
    window.location.href = "./waffuru.html";
}

function MenuYoutube() {
    window.location.href = "./youtube.html";
}

function MenuVideos() {
    window.location.href = "./videos.html";
}

function MenuNeugass() {
    window.location.href = "./index.html";
}

function MyChannel() {
    window.location.href = "https://www.youtube.com/channel/UCOJT-YXfSqKdUxBIqLMDs8Q"
}