console.log('js connected')

const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
    themeToggle.textContent = theme === 'dark'? '☀️' : '🌙';
    };

    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('()prefers-color-scheme: dark').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'; 

        localStorage.setItem('theme', nextTheme);
        applyTheme(nextTheme);
    });
}