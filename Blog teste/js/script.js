const headerbtn = document.getElementById('headerButton');
const items = document.getElementById('navItems');
const main =  document.getElementById('main');


headerbtn.addEventListener('click', () => {
    items.classList.toggle('hide')
    items.addEventListener('mouseleave', () => {
        items.classList.add('hide')
        main.addEventListener('click', () => {
            items.classList.add('hide')
        });
    });
});