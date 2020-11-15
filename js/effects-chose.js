'use strict';

(function () {
  const effectsList = window.form.imageUploadForm.querySelector('.effects__list');
  const photoPreview = window.form.imageUploadForm.querySelector('#photo-prev');
  const effectLevel = window.form.imageUploadForm.querySelector('.img-upload__effect-level');
  const effectLevelInput = effectLevel.querySelector(".effect-level__value");
  const effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  const effectDepthLevel = effectLevel.querySelector('.effect-level__depth');
  const BLUR_MAX = 3;
  const BLUR_MIN = 0;
  const BRIGHTNESS_MAX = 3;
  const BRIGHTNESS_MIN = 1;
  const DIVIDER = 100;
  const RESET_VALUE = 100;
  const effectTypes = {
    ORIGINAL: effectsList.querySelector('#effect-none'),
    CHROME: effectsList.querySelector('#effect-chrome'),
    SEPIA: effectsList.querySelector('#effect-sepia'),
    MARVIN: effectsList.querySelector('#effect-marvin'),
    PHOBOS: effectsList.querySelector('#effect-phobos'),
    HEAT: effectsList.querySelector('#effect-heat')
  };
  let chosenEffect = '';
  window.effectChose = {
    onFilterTypeClick: function () {
      if (chosenEffect === effectTypes.ORIGINAL.id) {
        photoPreview.style.filter = 'none';
      } else if (chosenEffect === effectTypes.CHROME.id) {
        filterIntensivityCalc('grayscale(' + effectLevelInput.value / DIVIDER + ')');
      } else if (chosenEffect === effectTypes.SEPIA.id) {
        filterIntensivityCalc('sepia(' + effectLevelInput.value / DIVIDER + ')');
      } else if (chosenEffect === effectTypes.MARVIN.id) {
        filterIntensivityCalc('invert(' + effectLevelInput.value + "%" + ')');
      } else if (chosenEffect === effectTypes.PHOBOS.id) {
        filterIntensivityCalc('blur(' + ((BLUR_MAX - BLUR_MIN) / DIVIDER * effectLevelInput.value) + 'px)');
      } else if (chosenEffect === effectTypes.HEAT.id) {
        filterIntensivityCalc('brightness(' + (BRIGHTNESS_MIN + ((BRIGHTNESS_MAX - BRIGHTNESS_MIN) / DIVIDER * effectLevelInput.value)) + ')');
      }
    }
  };

  function filterIntensivityCalc(formula) {
    photoPreview.style.filter = formula;
  }

  function filtersReset() {
    effectLevelPin.style.left = RESET_VALUE + '%';
    effectDepthLevel.style.width = RESET_VALUE + '%';
    effectLevelInput.value = RESET_VALUE;
    photoPreview.style.filter = window.effectChose.onFilterTypeClick();
  }

  effectsList.addEventListener('change', function (evt) {
    chosenEffect = evt.target.id;
    window.effectChose.onFilterTypeClick();
    if (effectLevel.classList.contains('hidden')) {
      effectLevel.classList.remove('hidden');
    }
    if (chosenEffect === effectTypes.ORIGINAL.id) {
      effectLevel.classList.add('hidden');
    }
    filtersReset();
  });
})();
