'use strict';

const ARR_NAMES = [
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
const ARR_COMMENT_PARTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const ARR_PHOTO_DESCR = [
  'Кот на лужайке',
  'Кот на столе',
  'Кот на коробке',
  'Коробка на коте',
  'Кот на стуле',
  'Кот под стулом',
  'Кот в мешке'
];
const PHOTO_NUM_MAX = 25;
const PHOTO_NUM_MIN = 1;
const LIKES_MAX = 200;
const LIKES_MIN = 15;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const NAMES_MIN = 1;
const NAMES_MAX = 13;

main();

function main() {
  let arrPhotos = generateRandomPhotos(25);
  let fragment = createPictureFragment(arrPhotos);
  let pictureBlock = document.querySelector('.pictures');
  pictureBlock.appendChild(fragment);
}

function generateRandomPhotos(number) {
  let arrPhotos = [];
  for (let i = 0; i < number; i++) {
    arrPhotos[i] = generateRandomPhoto();
  }
  return arrPhotos;
}

function generateRandomPhoto() {
  return {
    url: 'photos/' + getRandomNum(PHOTO_NUM_MIN, PHOTO_NUM_MAX) + '.jpg',
    description: ARR_PHOTO_DESCR[getRandomNum(0, ARR_PHOTO_DESCR.length - 1)],
    likes: getRandomNum(LIKES_MIN, LIKES_MAX),
    comments: getRandomComments(),
  };
}

function getRandomComments() {
  const arrComments = [];
  for (let j = 0; j < getRandomNum(1, 10); j++) {
    arrComments[j] = getRandomComment();
  }
  return arrComments;
}

function getRandomComment() {
  return {
    avatar: 'img/avatar-' + getRandomNum(AVATAR_MIN, AVATAR_MAX) + '.svg',
    name: ARR_NAMES[getRandomNum(NAMES_MIN, NAMES_MAX)],
    message: ARR_COMMENT_PARTS[getRandomNum(0, ARR_COMMENT_PARTS.length - 1)]
      + ARR_COMMENT_PARTS[getRandomNum(0, ARR_COMMENT_PARTS.length - 1)],
  };
}

function createPictureFragment(arrPhotos) {
  let pictureFragment = document.createDocumentFragment();
  for (let i = 0; i < arrPhotos.length; i++) {
    addPhotoToFragment(arrPhotos[i], pictureFragment);
  }
  return pictureFragment;
}

function addPhotoToFragment(photo, pictureFragment) {
  let pictureElement = fillPhotoTemplate(photo);
  pictureFragment.appendChild(pictureElement);
}

function fillPhotoTemplate(photo) {
  let picture = getPictureTemplate();
  let pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
}

function getPictureTemplate() {
  let pictureTemplate = document.querySelector('#picture').content;
  let picture = pictureTemplate.querySelector('.picture');
  return picture;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
