import {TIME, LIVES} from './game-data.js';

const gameHeaderTemplate = `<header class="header">
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>
  <div class="game__timer">${TIME.START}</div>
  <div class="game__lives">
    <img src="${LIVES.EMPTY}" class="game__heart" alt=" Missed Life" width="31" height="27">
    <img src="${LIVES.EMPTY}" class="game__heart" alt="Life" width="31" height="27">
    <img src="${LIVES.FULL}" class="game__heart" alt="Life" width="31" height="27">
  </div>
</header>`;

export {gameHeaderTemplate};
