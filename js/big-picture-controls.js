'use strict';

(function () {
  const smallPicturesBlock = document.querySelector('.pictures');
  const body = document.querySelector('body');
  const bigPictureClose = document.querySelector('.big-picture__cancel');

  function openBigPicture() {
    body.classList.add('modal-open');
    window.bigPictureCreate.bigPicture.classList.remove('hidden');
  }

  function onBigPictureCloseClick() {
    body.classList.remove('modal-open');
    window.bigPictureCreate.bigPicture.classList.add('hidden');
  }

  function onPictureEnterKeydown(evt) {
    if (evt.keyCode === window.util.KEYCODE_ENTER) {
      var clickedPicture = evt.target;
      if (clickedPicture.matches('a')) {
        showBigPicture(evt.target);
      }
    }
  }

  function showBigPicture(element) {
    var smallPhotoIndex = element.dataset.index;
    window.bigPictureCreate.bigTemplateFill(window.gallery.ARR_PHOTOS[smallPhotoIndex]);
    openBigPicture();
    document.addEventListener('keydown', onEscKeydown);
  }

  function onEscKeydown(evt) {
    if (evt.keyCode === window.util.KEYCODE_ESC) {
      onBigPictureCloseClick();
    }
  }

  function onSmallPictureClick(evt) {
    var clickedPicture = evt.target;
    if (clickedPicture.matches('img')) {
      showBigPicture(evt.target.parentElement);
    }
  }

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  smallPicturesBlock.addEventListener('click', onSmallPictureClick);
  smallPicturesBlock.addEventListener('keydown', onPictureEnterKeydown);
})();
