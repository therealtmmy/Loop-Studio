var burgerMenu = document.getElementById('icon');
var overlay = document.querySelector('.nav-link');

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("icon");
  overlay.classList.toggle("overlay");
});
