var banner = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocabanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banner[bannerAtual];
}
 var timer = setInterval(trocabanner,4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocabanner,4000);
        controle.className = 'pause';
    }
    return false;
}