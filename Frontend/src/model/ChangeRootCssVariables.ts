import {Theme} from "../context/ThemeContext";

export function changeRootCssVariables (theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;
    const components = [
        'body-background',
        'navbar-background',
        'component-background',
        'component-shadow',
        'text-color',
        'news-text_main-color',
        'news-border',
        'news-text_secondary-color',
        'news-background',
        'button-background'
    ];

    components.forEach(component => {
        root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
}