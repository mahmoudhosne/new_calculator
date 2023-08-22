'use strict';

let activeField = 0;
// values will store in current number
let currentNumber = [0, '', 0, 0, 0];
// if true active field = 0 else = 1
let active = true;

// function to get dom element
const getDomEle = function (className) {
  return document.querySelector(`.${className}`);
};

let firstField = getDomEle('value-input--0');
let secondField = getDomEle('value-input--2');

const operationSignField = getDomEle('operation');

// all numbers buttons

const btn0 = getDomEle('btn-00');
const btn1 = getDomEle('btn-1');
const btn2 = getDomEle('btn-2');
const btn3 = getDomEle('btn-3');
const btn4 = getDomEle('btn-4');
const btn5 = getDomEle('btn-5');
const btn6 = getDomEle('btn-6');
const btn7 = getDomEle('btn-7');
const btn8 = getDomEle('btn-8');
const btn9 = getDomEle('btn-9');
btn0.addEventListener('click', function () {
  if (currentNumber[0].length > 0) {
    firstField.textContent += btn0.textContent;
    currentNumber[0] = firstField.textContent;
  } else {
    firstField.textContent = btn0.textContent;
  }
});
const btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
// show on screen btns
for (const btn of btns) {
  btn.addEventListener('click', function () {
    if (operationSignField.textContent === '') {
      if (currentNumber[3] > 0) {
        currentNumber[3] = '';
        btnResult.textContent = currentNumber[3];
      }
      activeField = 0;
      firstField.textContent += btn.textContent;
      currentNumber[0] = firstField.textContent;
    } else if (operationSignField.textContent !== '') {
      activeField = 2;
      secondField.textContent += btn.textContent;
      currentNumber[2] = secondField.textContent;
    }
  });
}

// btns equall and result value

// btns operation sign
const devide = getDomEle('btn-devide');
const muiltplye = getDomEle('btn-muiltplye');
const mines = getDomEle('btn-mines');
const plus = getDomEle('btn-plus');
const btnOperationSignsArr = [devide, muiltplye, mines, plus];
for (const operationSign of btnOperationSignsArr) {
  operationSign.addEventListener('click', function () {
    if (firstField.textContent !== '') {
      operationSignField.textContent = operationSign.textContent;
    }
  });
}

// btn Equall

const btnEquall = document.querySelector('.btn-equall');
const btnResult = document.querySelector('.value-result');
btnEquall.addEventListener('click', function () {
  if (
    firstField.textContent !== '' &&
    operationSignField.textContent !== '' &&
    secondField.textContent !== ''
  ) {
    if (operationSignField.textContent === '+') {
      btnResult.textContent =
        +firstField.textContent + +secondField.textContent;
      firstField.textContent = '';
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '-') {
      btnResult.textContent =
        +firstField.textContent - +secondField.textContent;
      firstField.textContent = '';
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '*') {
      btnResult.textContent =
        +firstField.textContent * +secondField.textContent;
      firstField.textContent = '';
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '/') {
      btnResult.textContent =
        +firstField.textContent / +secondField.textContent;
      firstField.textContent = '';
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    }
  }
});
// // //reset all fields

const btnAc = document.querySelector('.btn-ac');
btnAc.addEventListener('click', function () {
  document.querySelector('.value-input--0').textContent = '';
  document.querySelector('.value-input--2').textContent = '';
  document.querySelector('.operation').textContent = '';
  document.querySelector('.value-result').textContent = '';
  activeField = 0;
  active = true;
  currentNumber = [0, '', 0, 0];
});

// close program
const btnClose = getDomEle('btn-close');
const content = getDomEle('content');

btnClose.addEventListener('click', function () {
  content.classList.add('hidden');
});
// =========================================
