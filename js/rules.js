import {mainContainer, changeScreen, render} from './util.js';
import {menuHeaderTemplate} from './menu-header.js';
import {greetingScreen} from './greeting.js';
import {gameScreens} from './game.js';
import {RULES} from './game-data.js';

const rulesTemplate = `<section class="rules">
  <h2 class="rules__title">${RULES.TITLE}</h2>
  <ul class="rules__description">
    <li>${RULES.PHRASES[0]}
      <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото">${RULES.PHRASES[1]}
      <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
    <li>${RULES.PHRASES[2]}</li>
    <li>${RULES.PHRASES[3]}</li>
    <li>${RULES.PHRASES[4]}</li>
  </ul>
  <p class="rules__ready">Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</section>`;

const rulesScreen = mainContainer.appendChild(render(menuHeaderTemplate));
rulesScreen.appendChild(render(rulesTemplate));

const backButton = rulesScreen.querySelector(`.back`);

backButton.addEventListener(`click`, () => changeScreen(greetingScreen));

const rulesInput = rulesScreen.querySelector(`.rules__input`);

const rulesButton = rulesScreen.querySelector(`.rules__button`);

rulesInput.addEventListener(`input`, () => {
  rulesButton.disabled = rulesInput.value.trim() === ``;
});

rulesButton.addEventListener(`click`, () => changeScreen(gameScreens[0]));

export {rulesScreen};
