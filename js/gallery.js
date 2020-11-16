'use strict';

(function () {

  function createGallery(data) {
    const fragment = createPictureFragment(data);
    const pictureBlock = document.querySelector('.pictures');
    pictureBlock.appendChild(fragment);
    console.log(data);
  }

  function onLoadPictures(data) {
    createGallery(data);
    window.data = data;
  }

  function createPictureFragment(arrPhotos) {
    const pictureFragment = document.createDocumentFragment();
    for (let i = 0; i < arrPhotos.length; i++) {
      arrPhotos[i].index = i;
      addPhotoToFragment(arrPhotos[i], pictureFragment);

    }
    return pictureFragment;
  }

  function addPhotoToFragment(photo, pictureFragment) {
    const pictureElement = window.templatesFilling.fillPhotoTemplate(photo);
    pictureFragment.appendChild(pictureElement);
  }
  window.load(onLoadPictures);
})();
