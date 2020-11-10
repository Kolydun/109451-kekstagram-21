'use strict';

(function () {
  const commentInput = document.querySelector('.text__description');
  const MAX_COMMENT_LENGTH = 140;

  function commentInputAddListeners() {
    commentInput.addEventListener('focus', function () {
      document.removeEventListener('keydown', window.form.onDocumentKeydown);
    });
    commentInput.addEventListener('blur', function () {
      document.addEventListener('keydown', window.form.onDocumentKeydown);
    });
    commentInput.addEventListener('input', onCommentsInput);
  }

  function onCommentsInput() {
    if (commentInput.value.length >= MAX_COMMENT_LENGTH) {
      commentInput.setCustomValidity(window.formMessage.COMMENT_LENGTH);
    } else {
      commentInput.setCustomValidity('');
    }
  }

  commentInputAddListeners();
})();
