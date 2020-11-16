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

  function onEscKeydown(evt) {
    if (evt.keyCode === window.util.KEYCODE_ESC) {
      onBigPictureCloseClick();
    }
  }

  function onSmallPictureClick(evt) {
    if (evt.target.closest('.picture') !== null) {
      const clickedPictureIndex = evt.target.closest('.picture').dataset.index;
      const clickedPictureObject = window.data.find(function (photo) {
        return photo.index === parseInt(clickedPictureIndex, 10);
      });
      window.bigPictureCreate.bigTemplateFill(clickedPictureObject);
      openBigPicture();
      document.addEventListener('keydown', onEscKeydown);
    }
  }

  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  smallPicturesBlock.addEventListener('click', onSmallPictureClick);
})();
