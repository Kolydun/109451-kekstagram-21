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
    Original: effectsList.querySelector('#effect-none'),
    Chrome: effectsList.querySelector('#effect-chrome'),
    Sepia: effectsList.querySelector('#effect-sepia'),
    Marvin: effectsList.querySelector('#effect-marvin'),
    Phobos: effectsList.querySelector('#effect-phobos'),
    Heat: effectsList.querySelector('#effect-heat')
  };
  let chosenEffect = '';
  window.onEffectTypeClick = {
    filterChange: function () {
      if (chosenEffect === effectTypes.Original.id) {
        photoPreview.style.filter = 'none';
      } else if (chosenEffect === effectTypes.Chrome.id) {
        filterIntensivityCalc('grayscale(' + effectLevelInput.value / DIVIDER + ')');
      } else if (chosenEffect === effectTypes.Sepia.id) {
        filterIntensivityCalc('sepia(' + effectLevelInput.value / DIVIDER + ')');
      } else if (chosenEffect === effectTypes.Marvin.id) {
        filterIntensivityCalc('invert(' + effectLevelInput.value + "%" + ')');
      } else if (chosenEffect === effectTypes.Phobos.id) {
        filterIntensivityCalc('blur(' + ((BLUR_MAX - BLUR_MIN) / DIVIDER * effectLevelInput.value) + 'px)');
      } else if (chosenEffect === effectTypes.Heat.id) {
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
    photoPreview.style.filter = window.onEffectTypeClick.filterChange();
  }

  effectsList.addEventListener('change', function (evt) {
    chosenEffect = evt.target.id;
    window.onEffectTypeClick.filterChange();
    if (effectLevel.classList.contains('hidden')) {
      effectLevel.classList.remove('hidden');
    }
    if (chosenEffect === effectTypes.Original.id) {
      effectLevel.classList.add('hidden');
    }
    filtersReset();
  });
})();
