const bgBox = document.querySelector('.wrap');
const bg = ["bg01.png", "bg02.png", "bg03.png", "bg04.png", "bg05.png"];

const randomImg = bg[Math.floor(Math.random()*bg.length)];

bgBox.style.background = `url(img/${randomImg}) no-repeat`;
bgBox.style.backgroundSize = `1920px 1080px`;
