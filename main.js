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

/* -------------------------------------------------- */
/*                  DATABASE                     */
/* -------------------------------------------------- */
const speakers = [
  {
    id: 1,
    name: 'Amedeo Pirlo',
    imageUrl: 'images/isntructor-01.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    para2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 2,
    name: 'Julia Sandoval',
    imageUrl: 'images/isntructor-02.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    para2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 3,
    name: 'Roman Szeliga',
    imageUrl: 'images/isntructor-03.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    para2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 4,
    name: 'Jesse Daniel',
    imageUrl: 'images/isntructor-04.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    para2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 5,
    name: 'Camilla Row',
    imageUrl: 'images/isntructor-05.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    para2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    id: 6,
    name: 'Hanley Daves',
    imageUrl: 'images/isntructor-06.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    para2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];

/* -------------------------------------------------- */
/*                 RENDERING CARDS                    */
/* -------------------------------------------------- */
const cardContent = document.querySelector('#cards-render');
let cardObject = {};
const btnMore = document.querySelector('.btn-more');
const btnLess = document.querySelector('.btn-less');

const rendeCards = () => {
  cardContent.innerHTML = '';
  for (let i = 0; i < speakers.length; i += 1) {
    cardObject = speakers[i];
    let showMore = '';
    if (cardObject.id > 2) showMore = 'show-more';
    const content = `
    <li>
      <div class="profile-img ${showMore}">
        <img src="${cardObject.imageUrl}" alt="intructor 1">
      </div>
      <div id="profile-info" class="${showMore}">
        <h3>${cardObject.name}</h3>
        <h4>${cardObject.para1}</h4>
        <hr/>
        <h5>${cardObject.para2}</h5>
      </div>
    </li>
    `;
    cardContent.innerHTML += content;
  }
  btnMore.classList.remove('hide');
  btnLess.classList.remove('show');
};

const rendeCards1 = () => {
  cardContent.innerHTML = '';
  for (let i = 0; i < speakers.length; i += 1) {
    cardObject = speakers[i];
    let showMore = '';
    if (cardObject.id > 6) showMore = 'show-more';
    const content = `
    <li>
      <div class="profile-img ${showMore}">
        <img src="${cardObject.imageUrl}" alt="intructor 1">
      </div>
      <div id="profile-info" class="${showMore}">
        <h3>${cardObject.name}</h3>
        <h4>${cardObject.para1}</h4>
        <hr/>
        <h5>${cardObject.para2}</h5>
      </div>
    </li>
    `;
    cardContent.innerHTML += content;
  }
  btnMore.classList.add('hide');
  btnLess.classList.add('show');
};

rendeCards();

/* -------------------------------------------------- */
/*                 SHOW MORE TOGLER                   */
/* -------------------------------------------------- */
btnMore.addEventListener('click', rendeCards1);
btnLess.addEventListener('click', rendeCards);