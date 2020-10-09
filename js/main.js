'use strict';
let arrObjects = [];
let arrNames = [
  'Артем',
  'Иван',
  'Саша',
  'Антон',
  'Семен Гаврилович',
  'Isido999',
  'Пиченько_21',
  'Корней_ЧУКОВСКИЙ',
  'Игнатий',
  'Егор',
  'ТрОлЬ_ГоРнОлИжНик',
  'S.T.A.L.K.E.R',
  'Киану Ривссс'
];
let arrCommentsParts = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let arrDescription = [
  'Кот на лужайке',
  'Кот на столе',
  'Кот на коробке',
  'Коробка на коте',
  'Кот на стуле',
  'Кот под стулом',
  'Кот в мешке'
];


let randomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < 25; i++) {
  let arrComments = [];
  for (let j = 0; j < randomNum(1, 10); j++) {
    arrComments [j] = {
      avatar: 'img/avatar-' + randomNum(1, 6) + '.svg',
      name: arrNames[randomNum(1, 13)],
      message: arrCommentsParts[randomNum(0, arrCommentsParts.length - 1)]
        + arrCommentsParts[randomNum(0, arrCommentsParts.length - 1)],
    };
  }
  arrObjects[i] = {
    url: 'photos/' + randomNum(1, 25) + '.jpg',
    description: arrDescription[randomNum(0, arrDescription.length - 1)],
    likes: randomNum(15, 200),
    comments: arrComments,
  };
}

let picturesBlock = document.querySelector('.pictures');
let pictureTemplate = document.querySelector('#picture').content;
let picture = pictureTemplate.querySelector('.picture');
let pictureFragment = document.createDocumentFragment();

for (let i = 0; i < arrObjects.length; i++) {
  let pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = arrObjects[i].url;
  pictureElement.querySelector('.picture__likes').textContent = arrObjects[i].likes;
  pictureElement.querySelector('.picture__comments').textContent = arrObjects[i].comments.length;
  pictureFragment.appendChild(pictureElement);
  picturesBlock.appendChild(pictureFragment);
}

