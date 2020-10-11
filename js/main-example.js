let arrPhotos = generateRandomPhotos(25);
let fragmetn = createPictureFragment(arrPhotos);
pictureBlock.appendChild(fragmetn);

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
    arrComments[j] = getRandomComment()
  }
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
  let pictureElement = picture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
}



