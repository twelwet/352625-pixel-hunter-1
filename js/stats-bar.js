import {STATS} from './game-data.js';

const statsBarTemplate = `<ul class="stats">
  <li class="stats__result ${STATS.PIC.WRONG}"></li>
  <li class="stats__result ${STATS.PIC.SLOW}"></li>
  <li class="stats__result ${STATS.PIC.FAST}"></li>
  <li class="stats__result ${STATS.PIC.CORRECT}"></li>
  <li class="stats__result ${STATS.PIC.UNKNOWN}"></li>
  <li class="stats__result ${STATS.PIC.UNKNOWN}"></li>
  <li class="stats__result ${STATS.PIC.UNKNOWN}"></li>
  <li class="stats__result ${STATS.PIC.UNKNOWN}"></li>
  <li class="stats__result ${STATS.PIC.UNKNOWN}"></li>
  <li class="stats__result ${STATS.PIC.UNKNOWN}"></li>
</ul>`;

export {statsBarTemplate};
