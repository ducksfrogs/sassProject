const slidePages = document.querySelector('.register__content--form__page');
const firstNextBtn =  document.querySelector('.next-1');

const firstPrevBtn = document.querySelector('.prev-1');
const secondNextBtn =  document.querySelector('.next-2');

const secondPrevBtn = document.querySelector('.prev-2');
const thirdNextBtn =  document.querySelector('.next-3');

const thirdPrevBtn = document.querySelector('.prev-3');
const submitBtn =  document.querySelector('.submit');

const progressStep = document.querySelectorAll('.register__progress--step');

const progressNumber = document.querySelectorAll('.register__progress--step span');

const progressNumber2 = document.querySelectorAll('.fa-check');

let max = 4;
let current = 1;

firstNextBtn.addEventListener('click', () => {
    slidePages.style.marginLeft = "-33%";
    console.log("cline");
});