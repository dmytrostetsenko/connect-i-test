const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__item-link')
const body = document.body;

const burger = () =>{
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('_active')
        menuBody.classList.toggle('_active');
        body.classList.toggle('_lock');
    });
    menuLinks.forEach((item) => {
        item.addEventListener('click', () => {
            menuIcon.classList.remove('_active')
            menuBody.classList.remove('_active');
            body.classList.remove('_lock');
        })
    })
}

export default burger;