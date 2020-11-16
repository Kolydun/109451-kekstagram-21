'use strict';

(function () {
  const URL = 'https://21.javascript.pages.academy/kekstagram/data';
  window.load = function (onSuccess, onError) {
    const xhrRequest = new XMLHttpRequest();
    xhrRequest.responseType = 'json';

    xhrRequest.open('GET', URL);

    xhrRequest.addEventListener('load', function () {
      onSuccess(xhrRequest.response);
    });

    xhrRequest.send();
  };
})();
