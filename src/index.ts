import * as _ from 'lodash';

console.log("my first ts ")

if(window){
    console.log(window.location.href);
}

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

  return element;
}

declare global {
  interface Window {
    App?: any;
  }
}

// Register to use external
window.App = {
  component
}