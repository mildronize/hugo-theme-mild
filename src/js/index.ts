// Test import of styles
import '../styles/index.css'

console.log("my first ts ")

if (window) {
  console.log(window.location.href);
}


async function component() {
  // dynamic imports: https://webpack.js.org/guides/code-splitting/#dynamic-imports
  const { default: _ } = await import('lodash');
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  return element;
}



// Attach App to window scope for inline script HTML
window.App = {
  component
}