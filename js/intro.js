import {changeScreen, render} from './util.js';
import {greetingScreen} from './greeting.js';
import {INTRO} from './game-data.js';

const template = `<section>
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup>${INTRO.PHRASE}</p>
  </section>
</section>`;

const introScreen = render(template);

const asterisk = introScreen.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, () => changeScreen(greetingScreen));

export {introScreen};
