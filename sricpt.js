console.log('js connected')

const themeToggle = document.querySelector('.theme-toggle')

if (themeToggle) {
    const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
    themeToggle.textContent = theme === 'dark'? '☀️' : '🌙';
    };

    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('()prefers-color-scheme: dark').matches;
}