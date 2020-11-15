'use strict';

(function () {
  window.util = {
    getRandomNum: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    KEYCODE_ENTER: 13,
    KEYCODE_ESC: 27,
  };
})();
