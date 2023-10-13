//https://codepen.io/codeorum/pen/bGedRJO


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitcher.checked = false;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeSwitcher.checked = true;
    }
});

const themeSwitcher = document.querySelector('.theme-switcher input');
const currentTheme = localStorage.getItem('theme');

// check what is current theme right now and activate it
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeSwitcher.checked = true;
    }
}

// switch between themes
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }    
}

// event listener on checkbox change
themeSwitcher.addEventListener('change', switchTheme, false);

