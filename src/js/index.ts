// import './types';
import * as _ from 'lodash';
import injectThemeSwitcher, { setThemeMode } from './DarkMode';
// Test import of styles
import '../styles/index.css'

console.log("my first ts ")

if (window) {
  console.log(window.location.href);
}

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  return element;
}



// Attach App to window scope for inline script HTML
window.App = {
  component,
  setThemeMode,
  injectThemeSwitcher
}
// Attach jQuery to window scope for inline script HTML
window.$ = require("jquery");