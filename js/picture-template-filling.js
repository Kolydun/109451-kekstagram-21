'use strict';
(function () {
  window.templatesFilling = {
    fillPhotoTemplate: function (photo) {
      const picture = getPictureTemplate();
      const pictureElement = picture.cloneNode(true);
      pictureElement.querySelector('.picture__img').src = photo.url;
      pictureElement.querySelector('.picture__likes').textContent = photo.likes;
      pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
      pictureElement.dataset.index = photo.index;
      return pictureElement;
    }
  };

  function getPictureTemplate() {
    const pictureTemplate = document.querySelector('#picture').content;
    const picture = pictureTemplate.querySelector('.picture');
    return picture;
  }
})();
