//Variables
const headerText = 'Web Developer';

const headerAnimation = document.querySelector('.header__animation');
const main = document.querySelector('.main').getBoundingClientRect().top;

const scroll = event => {
    window.scrollTo({ top: main, left: 0, behavior: "smooth" });
}
const headerDown = document.querySelector('.header__down--wrap').addEventListener('click', scroll);

let timeoutAdd = step => {
    setTimeout(() => {
        headerAnimation.textContent = headerText.slice(0, step);
    }, 300 * step);
}
let timeoutDelete = step => {
    setTimeout(() => {
        headerAnimation.textContent = headerText.slice(0, -step);
    }, 300 * (headerText.length + step));
}

const headerLoop = () => {
    for (let index = 0; index <= headerText.length; index++) {
        timeoutAdd(index);
        timeoutDelete(index);
    }
}
headerLoop();
setInterval(() => {
    headerLoop();
}, (headerText.length * 300) * 2.2);





