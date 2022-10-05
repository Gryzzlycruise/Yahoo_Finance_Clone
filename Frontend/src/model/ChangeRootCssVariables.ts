import {Theme} from "../context/ThemeContext";

export function changeRootCssVariables (theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
        'body-background',
        'navbar-background',
        'component-background',
        'component-shadow',
        'text-color'
    ];

    components.forEach(component => {
        root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
}