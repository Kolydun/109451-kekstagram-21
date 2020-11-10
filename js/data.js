'use strict';
(function () {
  const ARR_NAMES = [
    'Артем',
    'Иван',
    'Саша',
    'Антон',
    'Семен Гаврилович',
    'Isido999',
    'Пиченько_21',
    'Корней_ЧУКОВСКИЙ',
    'Игнатий',
    'Егор',
    'ТрОлЬ_ГоРнОлИжНик',
    'S.T.A.L.K.E.R',
    'Киану Ривссс'
  ];
  const ARR_COMMENT_PARTS = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const ARR_PHOTO_DESCR = [
    'Кот на лужайке',
    'Кот на столе',
    'Кот на коробке',
    'Коробка на коте',
    'Кот на стуле',
    'Кот под стулом',
    'Кот в мешке'
  ];
  const PHOTO_NUM_MAX = 25;
  const PHOTO_NUM_MIN = 1;
  const LIKES_NUM_MAX = 200;
  const LIKES_NUM_MIN = 15;
  const AVATAR_MIN = 1;
  const AVATAR_MAX = 6;
  const NAMES_MIN = 1;
  const NAMES_MAX = 13;

  window.data = {
    generateRandomPhotos: function (number) {
      const arrPhotos = [];
      for (let i = 0; i < number; i++) {
        arrPhotos.push(generateRandomPhoto(i));
      }
      return arrPhotos;
    }
  };

  function generateRandomPhoto(index) {
    return {
      url: 'photos/' + window.util.getRandomNum(PHOTO_NUM_MIN, PHOTO_NUM_MAX) + '.jpg',
      description: ARR_PHOTO_DESCR[window.util.getRandomNum(0, ARR_PHOTO_DESCR.length - 1)],
      likes: window.util.getRandomNum(LIKES_NUM_MIN, LIKES_NUM_MAX),
      comments: getRandomComments(),
      index: index
    };
  }

  function getRandomComments() {
    const arrComments = [];
    for (let i = 0; i < window.util.getRandomNum(1, 10); i++) {
      arrComments.push(getRandomComment());
    }
    return arrComments;
  }

  function getRandomComment() {
    return {
      avatar: 'img/avatar-' + window.util.getRandomNum(AVATAR_MIN, AVATAR_MAX) + '.svg',
      name: ARR_NAMES[window.util.getRandomNum(NAMES_MIN, NAMES_MAX)],
      message: ARR_COMMENT_PARTS[window.util.getRandomNum(0, ARR_COMMENT_PARTS.length - 1)]
        + ARR_COMMENT_PARTS[window.util.getRandomNum(0, ARR_COMMENT_PARTS.length - 1)],
    };
  }
})();
