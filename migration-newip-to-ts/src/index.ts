import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const changeThemeButton: Element | null = document.querySelector('.change-theme');

if (changeThemeButton) {
    changeThemeButton.addEventListener('click', changeTheme);
}

function changeTheme(): void {
    const doc: HTMLElement = document.documentElement;

    if (doc.getAttribute('data-theme') === 'light') {
        doc.setAttribute('data-theme', 'dark');
    } else {
        doc.setAttribute('data-theme', 'light');
    }
}
