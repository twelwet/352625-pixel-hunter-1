import {mainContainer, changeScreen, render} from './util.js';
import {gameTemplates} from './game-templates.js';
import {gameHeaderTemplate} from './game-header';
import {statsBarTemplate} from './stats-bar.js';
import {greetingScreen} from './greeting.js';
import {statsScreen} from './stats.js';

const gameScreens = [];

for (let i = 0; i < gameTemplates.length; i++) {
  gameScreens[i] = mainContainer.appendChild(render(gameHeaderTemplate));
  gameScreens[i].appendChild(render(gameTemplates[i]));
  gameScreens[i].querySelector(`.game`).appendChild(render(statsBarTemplate));
  gameScreens[i].querySelector(`.back`).addEventListener(`click`, () => changeScreen(greetingScreen));
}

const levelToggle = [
  [...gameScreens[0].querySelectorAll(`input`)],
  [...gameScreens[1].querySelectorAll(`input`)],
  [...gameScreens[2].querySelectorAll(`.game__option`)]
];

levelToggle[0].forEach((element) => {
  element.addEventListener(`change`, () => {
    if ((levelToggle[0][0].checked || levelToggle[0][1].checked) && (levelToggle[0][2].checked || levelToggle[0][3].checked)) { // Упростить сентенцию
      changeScreen(gameScreens[1]);
    }
  });
});

levelToggle[1].forEach((element) => {
  element.addEventListener(`change`, () => {
    if (levelToggle[1][0].checked || levelToggle[1][1].checked) {
      changeScreen(gameScreens[2]);
    }
  });
});

levelToggle[2].forEach((element) => element.addEventListener(`click`, () => changeScreen(statsScreen)));

export {gameScreens};
