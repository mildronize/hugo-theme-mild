// Ref: https://github.com/thundermiracle/gatsby-simple-blog/blob/ae77d3301b1ea1f8479a86aedf67f57385dd93ea/src/html.js

/**
 * 
 */

/* eslint-disable no-empty */
export default function themeOperation() {
  const onThemeChangeFuncObj = {};
  let preferredTheme;

  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.body.className = newTheme;
    Object.values(onThemeChangeFuncObj).forEach(func => func(newTheme));
  }

  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {}

  // Set Local storage `theme` when user change theme profile
  // theme: light or dark
  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  };

  window.__subscribeOnThemeChange = function(key, func) {
    onThemeChangeFuncObj[key] = func;
  };

  window.__unsubscribeOnThemeChange = function(key) {
    Reflect.deleteProperty(onThemeChangeFuncObj, key);
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
}
