// 'use strict';
//
// const ARR_NAMES = [
//   'Артем',
//   'Иван',
//   'Саша',
//   'Антон',
//   'Семен Гаврилович',
//   'Isido999',
//   'Пиченько_21',
//   'Корней_ЧУКОВСКИЙ',
//   'Игнатий',
//   'Егор',
//   'ТрОлЬ_ГоРнОлИжНик',
//   'S.T.A.L.K.E.R',
//   'Киану Ривссс'
// ];
// const ARR_COMMENT_PARTS = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];
//
// const ARR_PHOTO_DESCR = [
//   'Кот на лужайке',
//   'Кот на столе',
//   'Кот на коробке',
//   'Коробка на коте',
//   'Кот на стуле',
//   'Кот под стулом',
//   'Кот в мешке'
// ];
// const PHOTO_NUM_MAX = 25;
// const PHOTO_NUM_MIN = 1;
// const LIKES_NUM_MAX = 200;
// const LIKES_NUM_MIN = 15;
// const AVATAR_MIN = 1;
// const AVATAR_MAX = 6;
// const NAMES_MIN = 1;
// const NAMES_MAX = 13;
// const ARR_PHOTOS = generateRandomPhotos(25);
//
// main();
//
// function main() {
//   const fragment = createPictureFragment(ARR_PHOTOS);
//   const pictureBlock = document.querySelector('.pictures');
//   pictureBlock.appendChild(fragment);
// }
//
// function generateRandomPhotos(number) {
//   const arrPhotos = [];
//   for (let i = 0; i < number; i++) {
//     arrPhotos.push(generateRandomPhoto(i));
//   }
//   return arrPhotos;
// }
//
// function generateRandomPhoto(index) {
//   return {
//     url: 'photos/' + getRandomNum(PHOTO_NUM_MIN, PHOTO_NUM_MAX) + '.jpg',
//     description: ARR_PHOTO_DESCR[getRandomNum(0, ARR_PHOTO_DESCR.length - 1)],
//     likes: getRandomNum(LIKES_NUM_MIN, LIKES_NUM_MAX),
//     comments: getRandomComments(),
//     index: index
//   };
// }
//
// function getRandomComments() {
//   const arrComments = [];
//   for (let i = 0; i < getRandomNum(1, 10); i++) {
//     arrComments.push(getRandomComment());
//   }
//   return arrComments;
// }
//
// function getRandomComment() {
//   return {
//     avatar: 'img/avatar-' + getRandomNum(AVATAR_MIN, AVATAR_MAX) + '.svg',
//     name: ARR_NAMES[getRandomNum(NAMES_MIN, NAMES_MAX)],
//     message: ARR_COMMENT_PARTS[getRandomNum(0, ARR_COMMENT_PARTS.length - 1)]
//       + ARR_COMMENT_PARTS[getRandomNum(0, ARR_COMMENT_PARTS.length - 1)],
//   };
// }

// function createPictureFragment(arrPhotos) {
//   const pictureFragment = document.createDocumentFragment();
//   for (let i = 0; i < arrPhotos.length; i++) {
//     addPhotoToFragment(arrPhotos[i], pictureFragment);
//   }
//   return pictureFragment;
// }
//
// function addPhotoToFragment(photo, pictureFragment) {
//   const pictureElement = fillPhotoTemplate(photo);
//   pictureFragment.appendChild(pictureElement);
// }
//
// function fillPhotoTemplate(photo) {
//   const picture = getPictureTemplate();
//   const pictureElement = picture.cloneNode(true);
//   pictureElement.querySelector('.picture__img').src = photo.url;
//   pictureElement.querySelector('.picture__likes').textContent = photo.likes;
//   pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
//   pictureElement.dataset.index = photo.index;
//   return pictureElement;
// }
//
// function getPictureTemplate() {
//   const pictureTemplate = document.querySelector('#picture').content;
//   const picture = pictureTemplate.querySelector('.picture');
//   return picture;
// }

// function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// Задание 1-2

// const bigPicture = document.querySelector('.big-picture');
//
// function removeComments() {
//   const commentsList = bigPicture.querySelector('.social__comments');
//   let lastComment = commentsList.lastElementChild;
//   while (lastComment) {
//     commentsList.removeChild(lastComment);
//     lastComment = commentsList.lastElementChild;
//   }
// }
//
// function createBigPicture(photo) {
//   const commentsList = bigPicture.querySelector('.social__comments');
//   bigPicture.querySelector('#big-photo').src = photo.url;
//   bigPicture.querySelector('.likes-count').textContent = photo.likes;
//   bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
//   bigPicture.querySelector('.social__caption').textContent = photo.description;
//   removeComments();
//   commentsList.appendChild(createCommentFragment(photo));
//   hideElements();
// }
//
// function hideElements() {
//   const commentCount = document.querySelector('.social__comment-count');
//   const commentLoader = document.querySelector('.social__comments-loader');
//   commentCount.classList.add('hidden');
//   commentLoader.classList.add('hidden');
// }

// function createCommentFragment(photo) {
//   const commentFragment = document.createDocumentFragment();
//   photo.comments.forEach((comment) => {
//     const commentElement = fillCommentTemplate(comment);
//     commentFragment.appendChild(commentElement);
//   });
//   return commentFragment;
// }
//
// function fillCommentTemplate(comment) {
//   const commentTemplate = document.querySelector('#photo-comment').content
//     .querySelector('.social__comment');
//   const commentElement = commentTemplate.cloneNode(true);
//   commentElement.querySelector('.social__picture').src = comment.avatar;
//   commentElement.querySelector('.social__picture').alt = comment.name;
//   commentElement.querySelector('.social__text').textContent = comment.message;
//   return commentElement;
// }

// Задание 2-2
// const smallPicturesBlock = document.querySelector('.pictures');
// const smallPictures = smallPicturesBlock.querySelectorAll('.picture');
// const body = document.querySelector('body');
// const bigPictureClose = document.querySelector('.big-picture__cancel');
// const KEYCODE_ENTER = 13;
//
// function openBigPicture() {
//   body.classList.add('modal-open');
//   bigPictureCreate.classList.remove('hidden');
// }
//
// function onBigPictureCloseClick() {
//   body.classList.remove('modal-open');
//   bigPictureCreate.classList.add('hidden');
// }
//
// function onPictureEnterKeydown(evt) {
//   if (evt.keyCode === KEYCODE_ENTER) {
//     var clickedPicture = evt.target;
//     if (clickedPicture.matches('a')) {
//       showBigPicture(evt.target);
//     }
//   }
// }
//
// function showBigPicture(element) {
//   var smallPhotoIndex = element.dataset.index;
//   createBigPicture(ARR_PHOTOS[smallPhotoIndex]);
//   openBigPicture();
//   document.addEventListener('keydown', onEscKeydown);
// }
//
// function onEscKeydown(evt) {
//   if (evt.keyCode === KEYCODE_ESC) {
//     onBigPictureCloseClick();
//   }
// }
//
// function onSmallPictureClick(evt) {
//   const clickedPicture = evt.target;
//   if (clickedPicture.matches('img')) {
//     showBigPicture(evt.target.parentElement);
//   }
// }
//
// bigPictureClose.addEventListener('click', onBigPictureCloseClick);
// smallPicturesBlock.addEventListener('click', onSmallPictureClick);
// smallPicturesBlock.addEventListener('keydown', onPictureEnterKeydown);

// Задание 2
// const KEYCODE_ESC = 27;
// const MAX_NUMBER_OF_HASHTAGS = 5;
// const imageUploadForm = document.querySelector('.img-upload__form');
// const photoEditWindow = imageUploadForm.querySelector('.img-upload__overlay');
// const bodyWindow = document.querySelector('body');
// const fileUpload = imageUploadForm.querySelector('#upload-file');
// const uploadClose = imageUploadForm.querySelector('#upload-cancel');
//
// // Открытие окна редактирования фото
// function onFileUploadChange() {
//   photoEditWindow.classList.remove('hidden');
//   bodyWindow.classList.add('modal-open');
// }
//
// // Закрытие окна редактирования фото
// function onDocumentKeydown(evt) {
//   if (evt.keyCode === KEYCODE_ESC) {
//     onUploadCloseClick();
//   }
// }
//
// function onUploadCloseClick() {
//   photoEditWindow.classList.add('hidden');
//   bodyWindow.classList.remove('modal--open');
// }
// function uploadWindowAddListeners() {
//   document.addEventListener('keydown', onDocumentKeydown);
//   uploadClose.addEventListener('click', onUploadCloseClick);
//   fileUpload.addEventListener('change', onFileUploadChange);
// }
// uploadWindowAddListeners();

// Валидация хэштегов
// const hashtagInput = document.querySelector('.text__hashtags');
// const HASHTAG_RULES = /^#\w{1,19}$/;
// const formMessage = {
//   UNIQUENESS: 'Повторяющийся хэштег',
//   LENGTH: 'Слишком много хэштегов',
//   INVALID: 'Неправильный хэштег',
//   COMMENT_LENGTH: 'Слишком длинный комментарий',
// };
//
// function preventInvalidFormSubmit() {
//   imageUploadForm.addEventListener('submit', function (evt) {
//     if (imageUploadForm.checkValidity === false) {
//       evt.preventDefault();
//     }
//   });
// }
// function hashtagInputAddListeners() {
//   hashtagInput.addEventListener('focus', function () {
//     document.removeEventListener('keydown', onDocumentKeydown);
//   });
//   hashtagInput.addEventListener('blur', function () {
//     document.addEventListener('keydown', onDocumentKeydown);
//   });
//   hashtagInput.addEventListener('input', onHashtagsInput);
// }
//
// function onHashtagsInput() {
//   const arrHashtagInputs = hashtagInput.value.toUpperCase().split(' ');
//   const arrFilteredHashtagInputs = arrHashtagInputs.filter(function (element) {
//     return element !== '';
//   });
//   const isDuplicatesInArray = arrFilteredHashtagInputs.every(function (item, index, array) {
//     return array.indexOf(item) === index;
//   });
//   hashtagInput.setCustomValidity('');
//   if (arrFilteredHashtagInputs.length > MAX_NUMBER_OF_HASHTAGS) {
//     hashtagInput.setCustomValidity(formMessage.LENGTH);
//   } else if (!isDuplicatesInArray) {
//     hashtagInput.setCustomValidity(formMessage.UNIQUENESS);
//   } else {
//     for (let i = 0; i < arrFilteredHashtagInputs.length; i++) {
//       if (HASHTAG_RULES.test(arrFilteredHashtagInputs[i]) === false) {
//         hashtagInput.setCustomValidity(formMessage.INVALID);
//         break;
//       }
//     }
//   }
// }
//
// preventInvalidFormSubmit();
// hashtagInputAddListeners();


// Валидация комментариев
// const commentInput = document.querySelector('.text__description');
// const MAX_COMMENT_LENGTH = 140;
//
// function commentInputAddListeners() {
//   commentInput.addEventListener('focus', function () {
//     document.removeEventListener('keydown', onDocumentKeydown);
//   });
//   commentInput.addEventListener('blur', function () {
//     document.addEventListener('keydown', onDocumentKeydown);
//   });
//   commentInput.addEventListener('input', onCommentsInput);
// }
//
// function onCommentsInput() {
//   if (commentInput.value.length >= MAX_COMMENT_LENGTH) {
//     commentInput.setCustomValidity(formMessage.COMMENT_LENGTH);
//   } else {
//     commentInput.setCustomValidity('');
//   }
// }
//
// commentInputAddListeners();
