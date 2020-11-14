'use strict';
(function () {
  window.form = {
    imageUploadForm: document.querySelector('.img-upload__form'),
    onDocumentKeydown: function (evt) {
      if (evt.keyCode === window.util.KEYCODE_ESC) {
        onUploadCloseClick();
      }
    }
  };
  window.formMessage = {
    UNIQUENESS: 'Повторяющийся хэштег',
    LENGTH: 'Слишком много хэштегов',
    INVALID: 'Неправильный хэштег',
    COMMENT_LENGTH: 'Слишком длинный комментарий',
  };
  const photoEditWindow = window.form.imageUploadForm.querySelector('.img-upload__overlay');
  const bodyWindow = document.querySelector('body');
  const fileUpload = window.form.imageUploadForm.querySelector('#upload-file');
  const uploadClose = window.form.imageUploadForm.querySelector('#upload-cancel');
  const effectLevel = window.form.imageUploadForm.querySelector('.img-upload__effect-level');

  // Открытие окна редактирования фото
  function onFileUploadChange() {
    photoEditWindow.classList.remove('hidden');
    bodyWindow.classList.add('modal-open');
    effectLevel.classList.add('hidden');

  }

  // Закрытие окна редактирования фото
  function onUploadCloseClick() {
    photoEditWindow.classList.add('hidden');
    bodyWindow.classList.remove('modal--open');
  }

  function uploadWindowAddListeners() {
    document.addEventListener('keydown', window.form.onDocumentKeydown);
    uploadClose.addEventListener('click', onUploadCloseClick);
    fileUpload.addEventListener('change', onFileUploadChange);
  }

  uploadWindowAddListeners();
})();
