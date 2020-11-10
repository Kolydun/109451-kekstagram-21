'use strict';

(function () {
  window.bigPictureCreate = {
    bigPicture: document.querySelector('.big-picture'),
    bigTemplateFill: function (photo) {
      const commentsList = window.bigPictureCreate.bigPicture.querySelector('.social__comments');
      window.bigPictureCreate.bigPicture.querySelector('#big-photo').src = photo.url;
      window.bigPictureCreate.bigPicture.querySelector('.likes-count').textContent = photo.likes;
      window.bigPictureCreate.bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
      window.bigPictureCreate.bigPicture.querySelector('.social__caption').textContent = photo.description;
      removeComments();
      commentsList.appendChild(window.bigPictureComments.createCommentFragment(photo));
      hideElements();
    }
  };

  function removeComments() {
    const commentsList = window.bigPictureCreate.bigPicture.querySelector('.social__comments');
    let lastComment = commentsList.lastElementChild;
    while (lastComment) {
      commentsList.removeChild(lastComment);
      lastComment = commentsList.lastElementChild;
    }
  }

  function hideElements() {
    const commentCount = document.querySelector('.social__comment-count');
    const commentLoader = document.querySelector('.social__comments-loader');
    commentCount.classList.add('hidden');
    commentLoader.classList.add('hidden');
  }
})();
