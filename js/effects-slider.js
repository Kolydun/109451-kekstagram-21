'use strict';

(function () {
  const effectLevel = window.form.imageUploadForm.querySelector('.img-upload__effect-level');
  const effectLevelInput = effectLevel.querySelector(".effect-level__value");
  const effectLevelPin = effectLevel.querySelector('.effect-level__pin');
  const effectDepthLevel = effectLevel.querySelector('.effect-level__depth');

  function ratioCalc(ratio) {
    const result = ratio * 100;
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

      if (pinMovementX < 0) {
        pinMovementX = 0;
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
