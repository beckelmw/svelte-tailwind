import App from "./App.svelte";

const replaceContainer = function (Component, options) {
  const frag = document.createDocumentFragment();
  const component = new Component(Object.assign({}, options, { target: frag }));

  options.target.replaceWith(frag);

  return component;
};

const app = replaceContainer(App, {
  target: document.querySelector("#site"),
});

export default app;
