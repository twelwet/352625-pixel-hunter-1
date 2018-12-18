import {mainContainer, changeScreen, render} from './util.js';
import {gameTemplates} from './game-templates.js';
import {gameHeaderTemplate} from './game-header';
import {statsBarTemplate} from './stats-bar.js';
import {greetingScreen} from './greeting.js';
import {statsScreen} from './stats.js';
import {game} from './game-data.js';

const createScreen = (state) => {
  const screen = mainContainer.appendChild(render(gameHeaderTemplate(state)));
  screen.appendChild(render(gameTemplates[state.levels[state.levelNum].getType()]));
  screen.querySelector(`.game`).appendChild(render(statsBarTemplate(state)));
  screen.querySelector(`.back`).addEventListener(`click`, () => changeScreen(greetingScreen));
  return screen;
};

const gameScreenOne = createScreen(game);

const toggles = gameScreenOne.querySelectorAll(`.game__option input`);

toggles.forEach((element) => {
  element.addEventListener(`change`, () => {
    if ((toggles[0].checked || toggles[1].checked) && (toggles[2].checked || toggles[3].checked)) {
      game.setLevelNum();
      changeScreen(createScreen(game));
    }
  });
});

export {gameScreenOne};
