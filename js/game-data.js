const LEVELS = {
  START: 1,
  FINISH: 10
};

const LIVES = {
  DEFAULT: 3,
  LAST: 0,
  EMPTY: `img/heart__empty.svg`,
  FULL: `img/heart__full.svg`
};

const POINTS = {
  DEFAULT: 100,
  EXTRA: 50,
  SLOW_RESULT: -50
};

const TIME = {
  START: 0,
  FINISH: 30,
  FAST: 10,
  SLOW: 20
};

const GAME = {
  FAIL: false,
  OVER: true,
  TITLE: [
    `Угадайте для каждого изображения фото или рисунок?`,
    `Угадай, фото или рисунок?`,
    `Найдите рисунок среди изображений`
  ]
};

const ANSWER_TYPES = {
  FAST: 0,
  NORMAL: 1,
  SLOW: 2,
};

const STATS = {
  TITLE: {
    SUCCESS: `Победа!`,
    FAIL: `Фейл`
  },
  PIC: {
    FAST: `stats__result--fast`,
    CORRECT: `stats__result--correct`,
    WRONG: `stats__result--wrong`,
    SLOW: `stats__result--slow`,
    UNKNOWN: `stats__result--unknown`
  }
};

const INTRO = {
  PHRASE: ` Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
};

const GREETING = {
  TITLE: `Лучшие художники-фотореалисты бросают тебе вызов!`,
  RULES: {
    TITLE: `Правила игры просты:`,
    PHRASES: [
      `Нужно отличить рисунок от фотографии и сделать выбор.`,
      `Задача кажется тривиальной, но не думай, что все так просто.`,
      `Фотореализм обманчив и коварен.`,
      `Помни, главное — смотреть очень внимательно.`
    ]
  }
};

const RULES = {
  TITLE: `Правила`,
  PHRASES: [
    `Угадай ${LEVELS.FINISH} раз для каждого изображения фото`,
    ` или рисунок`,
    `Фотографиями или рисунками могут быть оба изображения.`,
    `На каждую попытку отводится ${TIME.FINISH} секунд.`,
    `Ошибиться можно не более ${LIVES.DEFAULT} раз.`
  ]
};

const getRandomValue = (min, max) => Math.floor((Math.random() * (max - min + 1) + min));

const levelsSequence = [];

while (levelsSequence.length < LEVELS.FINISH) {
  levelsSequence.push(getRandomValue(0, 2));
}

const scoring = (answers, numberOfLives) => {
  if (!Array.isArray(answers)) {
    throw new Error(`Answer's format should be of type array`);
  }
  if (answers.length !== LEVELS.FINISH) {
    throw new Error(`Answer's array should have lenght of ${LEVELS.FINISH}`);
  }
  if (!Number.isInteger(numberOfLives) ||
  numberOfLives < LIVES.LAST ||
  numberOfLives > LIVES.DEFAULT) {
    throw new Error(`Number of Lives should be of type number between ${LIVES.LAST} and ${LIVES.DEFAULT}`);
  }
  let numberOfPoints = 0;
  answers.forEach((element) => {
    if (element[0]) {
      numberOfPoints = numberOfPoints + POINTS.DEFAULT;
    }
    if (element[1] <= TIME.FAST) {
      numberOfPoints = numberOfPoints + POINTS.EXTRA;
    } else if (element[1] >= TIME.SLOW) {
      numberOfPoints = numberOfPoints + POINTS.SLOW_RESULT;
    }
  });
  if (numberOfLives > LIVES.LAST) {
    numberOfPoints = numberOfPoints + numberOfLives * POINTS.EXTRA;
  }
  return numberOfPoints;
};

const manageLives = (numberOfLives, answer) => {
  if (!Number.isInteger(numberOfLives) ||
  numberOfLives < LIVES.LAST ||
  numberOfLives > LIVES.DEFAULT) {
    throw new Error(`Number of Lives should be of type number between ${LIVES.LAST} and ${LIVES.DEFAULT}`);
  }
  if (typeof answer !== `boolean`) {
    throw new Error(`Answer should be of type boolean`);
  }
  let remainingLives = numberOfLives;
  if (!answer && numberOfLives > LIVES.LAST) {
    remainingLives = remainingLives - 1;
  } else if (!answer && numberOfLives === LIVES.LAST) {
    return GAME.FAIL;
  }
  return remainingLives;
};

const switchLevel = (currentLevel) => {
  if (!Number.isInteger(currentLevel) ||
  currentLevel < LEVELS.START ||
  currentLevel > LEVELS.FINISH
  ) {
    throw new Error(`current Level should be of type number between ${LEVELS.START} and ${LEVELS.FINISH}`);
  }
  let nextLevel = currentLevel;
  if (currentLevel < LEVELS.FINISH) {
    nextLevel = nextLevel + 1;
  } else {
    nextLevel = GAME.OVER;
  }
  return nextLevel;
};

const returnTypeOfAnswer = (time) => {
  if (!Number.isInteger(time) ||
  time < TIME.START ||
  time > TIME.FINISH) {
    throw new Error(`time should be of type number between ${TIME.START} and ${TIME.FINISH}`);
  }
  let answerType;
  if (time <= TIME.FAST) {
    answerType = ANSWER_TYPES.FAST;
  } else if (time >= TIME.SLOW) {
    answerType = ANSWER_TYPES.SLOW;
  } else {
    answerType = ANSWER_TYPES.NORMAL;
  }
  return answerType;
};

export {GAME, LIVES, POINTS, TIME, STATS, INTRO, GREETING, RULES, levelsSequence, scoring, manageLives, switchLevel, returnTypeOfAnswer};
