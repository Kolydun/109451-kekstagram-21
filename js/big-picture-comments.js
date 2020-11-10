'use strict';

(function () {
  window.bigPictureComments = {
    createCommentFragment: function (photo) {
      const commentFragment = document.createDocumentFragment();
      photo.comments.forEach((comment) => {
        const commentElement = fillCommentTemplate(comment);
        commentFragment.appendChild(commentElement);
      });
      return commentFragment;
    }
  };

  function fillCommentTemplate(comment) {
    const commentTemplate = document.querySelector('#photo-comment').content
      .querySelector('.social__comment');
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    return commentElement;
  }
})();
