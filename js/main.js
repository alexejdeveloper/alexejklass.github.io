//Variables
const headerText = 'Web Developer';

const headerAnimation = document.querySelector('.header__animation');
const main = document.querySelector('.main').getBoundingClientRect().top;
const techs = document.querySelectorAll('.main__icons img');
document.querySelector('footer').addEventListener('click', () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }));

document.querySelectorAll('div.cube').forEach(value => {
    value.addEventListener('mouseover', (event) => {
        document.querySelectorAll('div.cube').forEach(value => value.classList.remove('rotate'));
        event.currentTarget.classList.add('rotate');
    }) 
})

const chooseTech = (event) => {
    const cubes = document.querySelectorAll('div.cube');
    techs.forEach(value => value.classList.remove('active'));
    const visibleCubes = document.querySelectorAll('div.cube.' + event.target.className);

    cubes.forEach(value => {
        value.style.display = "none";
    });
    visibleCubes.forEach(value => {
        value.style.display = "block";
    });
    event.target.classList.add('active');

};

techs.forEach(value => value.addEventListener('click', chooseTech));



const scroll = event => {
    window.scrollTo({ top: main + 100, left: 0, behavior: "smooth" });
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

function UnCryptMailto(s) {
    var n = 0;
    var r = "";
    for (var i = 0; i < s.length; i++) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
            n = 128;
        }
        r += String.fromCharCode(n - 1);
    }
    return r;
}

function linkTo_UnCryptMailto(s) {
    location.href = UnCryptMailto(s);
}



