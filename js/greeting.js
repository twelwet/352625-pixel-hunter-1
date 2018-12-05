import {changeScreen, render} from './util.js';
import {rulesScreen} from './rules.js';
import {GREETING} from './game-data.js';

const template = `<section>
  <section class="greeting central--blur">
    <img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
    <div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*</div>
    <div class="greeting__challenge">
      <h3 class="greeting__challenge-title">${GREETING.TITLE}</h3>
      <p class="greeting__challenge-text">${GREETING.RULES.TITLE}</p>
      <ul class="greeting__challenge-list">
        <li>${GREETING.RULES.PHRASES[0]}</li>
        <li>${GREETING.RULES.PHRASES[1]}</li>
        <li>${GREETING.RULES.PHRASES[2]}</li>
        <li>${GREETING.RULES.PHRASES[3]}</li>
      </ul>
    </div>
    <button class="greeting__continue" type="button">
      <span class="visually-hidden">Продолжить</span>
      <svg class="icon" width="64" height="64" viewBox="0 0 64 64" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-right"></use>
      </svg>
    </button>
  </section>
</section>`;

const greetingScreen = render(template);

const nextButton = greetingScreen.querySelector(`.greeting__continue`);

nextButton.addEventListener(`click`, () => changeScreen(rulesScreen));

export {greetingScreen};
