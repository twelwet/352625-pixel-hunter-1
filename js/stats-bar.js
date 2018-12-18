const statsBarTemplate = (state) => `<ul class="stats">
  ${new Array(10 - state.levelNum)
  .fill(`<li class="stats__result stats__result--unknown"></li>`)
  .join(``)}
</ul>`;

export {statsBarTemplate};
