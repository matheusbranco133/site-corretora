const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    const menuAberto = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !menuAberto);
    menuToggle.setAttribute('aria-label', menuAberto ? 'Abrir menu' : 'Fechar menu');
    menu.classList.toggle('is-open', !menuAberto);
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu')
    });
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        menu.classList.remove('is-open')
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
});