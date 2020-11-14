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
  let chosenEffect = '';
  window.effectTypes = {
    Original: effectsList.querySelector('#effect-none'),
    Chrome: effectsList.querySelector('#effect-chrome'),
    Sepia: effectsList.querySelector('#effect-sepia'),
    Marvin: effectsList.querySelector('#effect-marvin'),
    Phobos: effectsList.querySelector('#effect-phobos'),
    Heat: effectsList.querySelector('#effect-heat')
  };
  window.onEffectTypeClick = {
    filterChange: function () {
      if (chosenEffect === window.effectTypes.Original.id) {
        photoPreview.style.filter = 'none';
      } else if (chosenEffect === window.effectTypes.Chrome.id) {
        filterIntensivityCalc('grayscale(' + effectLevelInput.value / DIVIDER + ')');
      } else if (chosenEffect === window.effectTypes.Sepia.id) {
        filterIntensivityCalc('sepia(' + effectLevelInput.value / DIVIDER + ')');
      } else if (chosenEffect === window.effectTypes.Marvin.id) {
        filterIntensivityCalc('invert(' + effectLevelInput.value + "%" + ')');
      } else if (chosenEffect === window.effectTypes.Phobos.id) {
        filterIntensivityCalc('blur(' + ((BLUR_MAX - BLUR_MIN) / DIVIDER * effectLevelInput.value) + 'px)');
      } else if (chosenEffect === window.effectTypes.Heat.id) {
        filterIntensivityCalc('brightness(' + (BRIGHTNESS_MIN + ((BRIGHTNESS_MAX - BRIGHTNESS_MIN) / DIVIDER * effectLevelInput.value)) + ')');
      }
    }
  };

  function filterIntensivityCalc(formula) {
    photoPreview.style.filter = formula;
  }

  function filtersReset() {
    effectLevelPin.style.left = 0 + '%';
    effectDepthLevel.style.width = 0 + '%';
    effectLevelInput.value = 0;
    photoPreview.style.filter = 'none';
  }

  effectsList.addEventListener('change', function (evt) {
    chosenEffect = evt.target.id;
    window.onEffectTypeClick.filterChange();
    if (effectLevel.classList.contains('hidden')) {
      effectLevel.classList.remove('hidden');
    }
    if (chosenEffect === window.effectTypes.Original.id) {
      effectLevel.classList.add('hidden');
    }
    filtersReset();
  });
})();
