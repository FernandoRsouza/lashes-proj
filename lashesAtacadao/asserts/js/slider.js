var imgs = [];
var slider;
var imgAtual;
var maxImg;
function preRecarregar() {
  var im = 1;
  for (var i = 0; i < 7; i++){
    imgs[i] = new Image();
    imgs[i].src = "../img/im" + im + ".jpg";
    im++;
    
  }

}
function carregarImg(img) {
  slider.style.backgroundImage = "url('"+imgs[img].src+"') no-repeat";
  
  
}
function init() {
  preRecarregar();
  imgAtual = 1;
  maxImg = imgs.length;
  slider = document.getElementById('slider-header');
  carregarImg(imgAtual);
}

