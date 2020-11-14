'use strict';

(function () {
  const scaleControls = window.form.imageUploadForm.querySelector('.img-upload__scale');
  const photoPreview = window.form.imageUploadForm.querySelector('#photo-prev');
  const scaleSmaller = scaleControls.querySelector('.scale__control--smaller');
  const scaleBigger = scaleControls.querySelector('.scale__control--bigger');
  const scaleValue = scaleControls.querySelector('.scale__control--value');
  const scaleChangeStep = 25;
  const DIVIDER = 100;
  const scaleMax = '100%';
  const scaleMin = '25%';

  function scaleUp(check) {
    if (scaleValue.value !== check) {
      let newScale = parseInt(scaleValue.value, 10) + scaleChangeStep;
      photoPreview.style.transform = 'scale(' + newScale / DIVIDER + ')';
      newScale.toString();
      scaleValue.value = newScale + '%';
    }
  }
  function scaleDown(check) {
    if (scaleValue.value !== check) {
      let newScale = parseInt(scaleValue.value, 10) - scaleChangeStep;
      photoPreview.style.transform = 'scale(' + newScale / DIVIDER + ')';
      newScale.toString();
      scaleValue.value = newScale + '%';
    }
  }
  scaleBigger.addEventListener('click', function () {
    scaleUp(scaleMax);
  });
  scaleSmaller.addEventListener('click', function () {
    scaleDown(scaleMin);
  });
})();
