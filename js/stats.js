import {mainContainer, changeScreen, render} from './util.js';
import {menuHeaderTemplate} from './menu-header.js';
import {greetingScreen} from './greeting.js';
import {POINTS, STATS} from './game-data.js';
import {statsBarTemplate} from './stats-bar.js';

const correctAnswerResult = `900`;
const extraLivesAnswerResult = `100`;
const speedAnswerResult = `50`;
const slowAnswerResult = `-100`;

const statsTemplate = `<section class="result">
  <h2 class="result__title">${STATS.TITLE.SUCCESS}</h2>
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2"></td>
      <td class="result__points">× ${POINTS.DEFAULT}</td>
      <td class="result__total">${correctAnswerResult}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">1 <span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">× ${POINTS.EXTRA}</td>
      <td class="result__total">${speedAnswerResult}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">× ${POINTS.EXTRA}</td>
      <td class="result__total">${extraLivesAnswerResult}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">2 <span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">× ${POINTS.SLOW_RESULT}</td>
      <td class="result__total">${slowAnswerResult}</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">950</td>
    </tr>
  </table>
</section>`;

const statsScreen = mainContainer.appendChild(render(menuHeaderTemplate));
statsScreen.appendChild(render(statsTemplate));

const tableElement = statsScreen.querySelector(`td[colspan]`);
tableElement.appendChild(render(statsBarTemplate));

const backButton = statsScreen.querySelector(`.back`);

backButton.addEventListener(`click`, () => changeScreen(greetingScreen));

export {statsScreen};
