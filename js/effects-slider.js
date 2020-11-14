'use strict';

(function () {
  const effectLevel = window.form.imageUploadForm.querySelector('.img-upload__effect-level');
  const effectLevelInput = effectLevel.querySelector(".effect-level__value");
  const effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  const effectDepthLevel = effectLevel.querySelector('.effect-level__depth');
  const ZERO = 0;
  const ROUNDER = 100;

  function ratioCalc(ratio) {
    const result = ratio * ROUNDER;
    return result;
  }

  function updateSliderValues(ratio) {
    effectLevelPin.style.left = ratioCalc(ratio) + "%";
    effectDepthLevel.style.width = ratioCalc(ratio) + "%";
    effectLevelInput.value = Math.round(ratioCalc(ratio));
    window.onEffectTypeClick.filterChange();
  }

  function onPinMousedown(evt) {
    let effectRatio = null;
    let currentPositionX = evt.clientX;
    const levelLineWidth = evt.target.parentNode.offsetWidth;

    function onPinMouseMove(moveEvent) {
      const pressedX = currentPositionX - moveEvent.clientX;
      let pinMovementX = evt.target.offsetLeft - pressedX;

      if (pinMovementX < ZERO) {
        pinMovementX = ZERO;
      }

      if (pinMovementX > levelLineWidth) {
        pinMovementX = levelLineWidth;
      }

      currentPositionX = moveEvent.clientX;
      effectRatio = pinMovementX / levelLineWidth;

      updateSliderValues(effectRatio);
    }

    function onPinMouseUp() {
      document.removeEventListener("mousemove", onPinMouseMove);
      document.removeEventListener("mouseup", onPinMouseUp);
    }

    document.addEventListener("mouseup", onPinMouseUp);
    document.addEventListener("mousemove", onPinMouseMove);
  }

  effectLevelPin.addEventListener("mousedown", onPinMousedown);
})();
