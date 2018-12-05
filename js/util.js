const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper;
};

const mainContainer = document.querySelector(`#main`);

const changeScreen = (element) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(element);
};

export {mainContainer, render, changeScreen};
