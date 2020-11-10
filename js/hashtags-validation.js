'use strict';

(function () {
  const hashtagInput = document.querySelector('.text__hashtags');
  const HASHTAG_RULES = /^#\w{1,19}$/;
  const MAX_NUMBER_OF_HASHTAGS = 5;

  function preventInvalidFormSubmit() {
    window.form.imageUploadForm.addEventListener('submit', function (evt) {
      if (window.form.imageUploadForm.checkValidity === false) {
        evt.preventDefault();
      }
    });
  }

  function hashtagInputAddListeners() {
    hashtagInput.addEventListener('focus', function () {
      document.removeEventListener('keydown', window.form.onDocumentKeydown);
    });
    hashtagInput.addEventListener('blur', function () {
      document.addEventListener('keydown', window.form.onDocumentKeydown);
    });
    hashtagInput.addEventListener('input', onHashtagsInput);
  }

  function onHashtagsInput() {
    const arrHashtagInputs = hashtagInput.value.toUpperCase().split(' ');
    const arrFilteredHashtagInputs = arrHashtagInputs.filter(function (element) {
      return element !== '';
    });
    const isDuplicatesInArray = arrFilteredHashtagInputs.every(function (item, index, array) {
      return array.indexOf(item) === index;
    });
    hashtagInput.setCustomValidity('');
    if (arrFilteredHashtagInputs.length > MAX_NUMBER_OF_HASHTAGS) {
      hashtagInput.setCustomValidity(window.formMessage.LENGTH);
    } else if (!isDuplicatesInArray) {
      hashtagInput.setCustomValidity(window.formMessage.UNIQUENESS);
    } else {
      for (let i = 0; i < arrFilteredHashtagInputs.length; i++) {
        if (HASHTAG_RULES.test(arrFilteredHashtagInputs[i]) === false) {
          hashtagInput.setCustomValidity(window.formMessage.INVALID);
          break;
        }
      }
    }
  }

  preventInvalidFormSubmit();
  hashtagInputAddListeners();

})();
