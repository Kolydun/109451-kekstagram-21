'use strict';

(function () {
  window.gallery = {
    ARR_PHOTOS: window.data.generateRandomPhotos(25)
  };
  function createGallery() {
    const fragment = createPictureFragment(window.gallery.ARR_PHOTOS);
    const pictureBlock = document.querySelector('.pictures');
    pictureBlock.appendChild(fragment);
  }
  function createPictureFragment(arrPhotos) {
    const pictureFragment = document.createDocumentFragment();
    for (let i = 0; i < arrPhotos.length; i++) {
      addPhotoToFragment(arrPhotos[i], pictureFragment);
    }
    return pictureFragment;
  }

  function addPhotoToFragment(photo, pictureFragment) {
    const pictureElement = window.templatesFilling.fillPhotoTemplate(photo);
    pictureFragment.appendChild(pictureElement);
  }
  createGallery();
})();
