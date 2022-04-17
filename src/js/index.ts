// import $ from 'jquery';
// import Prism from 'prismjs';
// console.log("my first ts ")

// if (window) {
//   console.log(window.location.href);
// }


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
// // On document ready
// $(function () {
//   Prism.highlightAll();
// });

// <pre tabindex="0" class="chroma line-numbers" data-line="8">
// $('code[class*="language-"], pre[class*="language-"]').attr('data-line', '8');

// $('.highlight').attr('data-line', '8');

