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
const LIKES_NUM_MAX = 200;
const LIKES_NUM_MIN = 15;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const NAMES_MIN = 1;
const NAMES_MAX = 13;
const ARR_PHOTOS = generateRandomPhotos(25);

main();

function main() {
  const fragment = createPictureFragment(ARR_PHOTOS);
  const pictureBlock = document.querySelector('.pictures');
  pictureBlock.appendChild(fragment);
}

function generateRandomPhotos(number) {
  const arrPhotos = [];
  for (let i = 0; i < number; i++) {
    arrPhotos.push(generateRandomPhoto());
  }
  return arrPhotos;
}

function generateRandomPhoto() {
  return {
    url: 'photos/' + getRandomNum(PHOTO_NUM_MIN, PHOTO_NUM_MAX) + '.jpg',
    description: ARR_PHOTO_DESCR[getRandomNum(0, ARR_PHOTO_DESCR.length - 1)],
    likes: getRandomNum(LIKES_NUM_MIN, LIKES_NUM_MAX),
    comments: getRandomComments(),
  };
}

function getRandomComments() {
  const arrComments = [];
  for (let i = 0; i < getRandomNum(1, 10); i++) {
    arrComments.push(getRandomComment());
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
  const pictureFragment = document.createDocumentFragment();
  for (let i = 0; i < arrPhotos.length; i++) {
    addPhotoToFragment(arrPhotos[i], pictureFragment);
  }
  return pictureFragment;
}

function addPhotoToFragment(photo, pictureFragment) {
  const pictureElement = fillPhotoTemplate(photo);
  pictureFragment.appendChild(pictureElement);
}

function fillPhotoTemplate(photo) {
  const picture = getPictureTemplate();
  const pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
}

function getPictureTemplate() {
  const pictureTemplate = document.querySelector('#picture').content;
  const picture = pictureTemplate.querySelector('.picture');
  return picture;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Задание 1-2

const bigPicture = document.querySelector('.big-picture');

function createBigPicture(photo) {
  const body = document.querySelector('body');
  body.classList.add('modal-open');
  bigPicture.querySelector('#big-photo').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.social__comments').appendChild(createCommentFragment(photo));
  // bigPicture.classList.remove('hidden');
  hideElements();
}

function hideElements() {
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.social__comments-loader');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
}

function createCommentFragment(photo) {
  const commentFragment = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    const commentElement = fillCommentTemplate(comment);
    commentFragment.appendChild(commentElement);
  });
  return commentFragment;
}

function fillCommentTemplate(comment) {
  const commentTemplate = document.querySelector('#photo-comment').content
    .querySelector('.social__comment');
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
}

createBigPicture(ARR_PHOTOS[0]);

// Задание 2

const photoEditWindow = document.querySelector('.img-upload__overlay');
const bodyWindow = document.querySelector('body');
const fileUpload = document.querySelector('#upload-file');
const uploadClose = document.querySelector('#upload-cancel');


// Открытие окна редактирования фото
function openUploadWindow() {
  fileUpload.addEventListener('change', function () {
    photoEditWindow.classList.remove('hidden');
    bodyWindow.classList.add('modal-open');
  });
}

// Закрытие окна редактирования фото
function onCloseDocumentKeydown(evt) {
  if (evt.keyCode === 27) {
    uploadCloseWindow();
  }
}

function uploadCloseWindow() {
  photoEditWindow.classList.add('hidden');
  bodyWindow.classList.remove('modal--open');
}
function closeUploadWindow() {
  document.addEventListener('keydown', onCloseDocumentKeydown);
  uploadClose.addEventListener('click', uploadCloseWindow);
}

openUploadWindow();
closeUploadWindow();

// Валидация хэштегов
const hashtagInput = document.querySelector('.text__hashtags');
const HASHTAG_RULES = /^#\w{1,19}$/;

hashtagInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onCloseDocumentKeydown);
});
hashtagInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onCloseDocumentKeydown);
});
hashtagInput.addEventListener('input', splitHashtags);

function arrayDuplicatesCheck(arrayElement, array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (arrayElement.toUpperCase() === array[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}

function splitHashtags(evt) {
  const arrHashtagInputs = hashtagInput.value.split(' ');
  for (let i = 0; i < arrHashtagInputs.length; i++) {
    if (HASHTAG_RULES.test(arrHashtagInputs[i]) === false) {
      hashtagInput.setCustomValidity('Неправильный хэштег');
      evt.preventDefault();
      return;
    }
    if (arrayDuplicatesCheck(arrHashtagInputs[i], arrHashtagInputs) > 1) {
      hashtagInput.setCustomValidity('Повторяющийся хэштег');
      evt.preventDefault();
      return;
    }
    if (arrHashtagInputs.length > 5) {
      hashtagInput.setCustomValidity('Слишком много хэштегов');
      evt.preventDefault();
      return;
    } else {
      hashtagInput.setCustomValidity('');
    }
  }
}


