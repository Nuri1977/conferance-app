const burger = document.querySelector('.burger');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const btnCls = document.querySelector('.a-close');
const fb = document.querySelector('.fb');
const tw = document.querySelector('.tw');
const logo = document.querySelector('.logo');

function showNavbar() {
  burger.classList.add('hide');
  nav1.classList.add('show');
  nav2.classList.add('show');
  btnCls.classList.add('show');
  fb.classList.add('hide');
  tw.classList.add('hide');
  logo.classList.add('hide');
}

function hideNavbar() {
  burger.classList.remove('hide');
  nav1.classList.remove('show');
  nav2.classList.remove('show');
  btnCls.classList.remove('show');
  fb.classList.remove('hide');
  tw.classList.remove('hide');
}

burger.addEventListener('click', showNavbar);
btnCls.addEventListener('click', hideNavbar);
