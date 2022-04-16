import $ from 'jquery';
import themeOperation from './themeOperation';

let state: { theme: any } = {
    theme: null
};
const TargetDOM = 'body';
export enum Theme {
    Light = "light",
    Dark = "dark",
}
export function setThemeMode(mode: Theme) {
    $(TargetDOM).removeClass(`${Theme.Light} ${Theme.Light}`);
    $(TargetDOM).addClass(mode);
}

export default function () {
    themeOperation();
}

// window.__subOnThemeChange("main_website", () => {
//     state = { theme: window.__theme };
// });

// When DOM ready;
$(function() {
    console.log( "ready!" );
    console.log("theme: ", state.theme);
    window.__subscribeOnThemeChange("main_website", () => {
        state = { theme: window.__theme };
        console.log("theme: ", state.theme);
    });
});

// https://web.dev/building-a-theme-switch-component/
// https://github.com/argyleink/gui-challenges/tree/main/theme-switch