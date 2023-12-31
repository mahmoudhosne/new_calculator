'use strict';

let activeField = 0;
// values will store in current number
let currentNumber = ['', '', '', 0];
// if true active field = 0 else = 1
let active = true;

// function to get dom element
const getDomEle = function (className) {
  return document.querySelector(`.${className}`);
};

// function removing number by number using line 256

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
  if (firstField.textContent !== '' && operationSignField.textContent === '') {
    firstField.textContent += btn0.textContent;
    currentNumber[0] = firstField.textContent;
  } else if (
    firstField.textContent !== '' &&
    operationSignField.textContent !== ''
  ) {
    if (secondField.textContent > 0) {
      secondField.textContent += btn0.textContent;
      currentNumber[2] = secondField.textContent;
    } else {
      secondField.textContent = btn0.textContent;
    }
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
      firstField.textContent += btn.textContent;
      currentNumber[0] = firstField.textContent;
    } else {
      secondField.textContent += btn.textContent;
      currentNumber[2] = secondField.textContent;
    }
  });
}

// btns operation sign
const devide = getDomEle('btn-devide');
const muiltplye = getDomEle('btn-muiltplye');
const mines = getDomEle('btn-mines');
const plus = getDomEle('btn-plus');
const btnPercentage = getDomEle('btn-percentge');
const btnOperationSignsArr = [devide, muiltplye, mines, plus, btnPercentage];
for (const operationSign of btnOperationSignsArr) {
  operationSign.addEventListener('click', function () {
    if (currentNumber[3] > 0) {
      firstField.textContent = currentNumber[3];
      btnResult.textContent = '';
    }
    if (firstField.textContent !== '') {
      activeField = 2;
      operationSignField.textContent = operationSign.textContent;
      currentNumber[1] = operationSignField.textContent;
    }
  });
}

// btn Equall

const btnEquall = getDomEle('btn-equall');
const btnResult = getDomEle('value-result');
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
      currentNumber[1] = operationSignField.textContent;
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '-') {
      btnResult.textContent =
        +firstField.textContent - +secondField.textContent;
      firstField.textContent = '';
      currentNumber[1] = operationSignField.textContent;
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '*') {
      btnResult.textContent =
        +firstField.textContent * +secondField.textContent;
      firstField.textContent = '';
      currentNumber[1] = operationSignField.textContent;
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '/') {
      btnResult.textContent =
        +firstField.textContent / +secondField.textContent;
      currentNumber[1] = operationSignField.textContent;
      firstField.textContent = '';
      operationSignField.textContent = '';
      secondField.textContent = '';
      currentNumber[3] = btnResult.textContent;
    } else if (operationSignField.textContent === '%') {
      let percentage = +firstField.textContent * +secondField.textContent;
      btnResult.textContent = percentage / 100;
      firstField.textContent = '';
      currentNumber[1] = operationSignField.textContent;
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
  currentNumber = [0, '', 0, 0];
});

document.addEventListener('keydown', function (e) {
  if (e.key >= 0) {
    if (e.key === '0') {
      if (
        firstField.textContent === '' &&
        operationSignField.textContent === ''
      ) {
        firstField.textContent = e.key;
        btnResult.textContent = '';
      } else if (
        firstField.textContent > 0 &&
        operationSignField.textContent === ''
      ) {
        if (btnResult.textContent >= 0) {
          btnResult.textContent = '';
          currentNumber[3] = btnResult.textContent;
        }
        firstField.textContent += e.key;
        currentNumber[0] = firstField.textContent;
      } else if (
        firstField.textContent > 0 &&
        operationSignField.textContent !== ''
      ) {
        if (secondField.textContent === '') {
          secondField.textContent = e.key;
        } else if (secondField.textContent > 0) {
          if (currentNumber[3] > 0) {
            currentNumber[3] = '';
            btnResult.textContent = currentNumber[3];
          }
          secondField.textContent += e.key;
          currentNumber[2] = secondField.textContent;
        }
      }
    } else {
      if (operationSignField.textContent === '') {
        if (currentNumber[3] > 0) {
          currentNumber[3] = '';
          btnResult.textContent = currentNumber[3];
        }
        firstField.textContent += e.key;
      } else {
        if (currentNumber[3] > 0) {
          currentNumber[3] = '';
          btnResult.textContent = currentNumber[3];
        }
        secondField.textContent += e.key;
      }
    }
  } else if (
    e.key === '+' ||
    e.key === '-' ||
    e.key === '*' ||
    e.key === '/' ||
    e.key === '%'
  ) {
    if (firstField.textContent >= 0 && btnResult.textContent === '') {
      operationSignField.textContent = e.key;
    } else if (btnResult.textContent >= 0) {
      firstField.textContent = btnResult.textContent;
      currentNumber[0] = firstField.textContent;
      operationSignField.textContent = e.key;
      btnResult.textContent = '';
      currentNumber[3] = btnResult.textContent;
    }
  } else if (e.key === 'Enter') {
    if (operationSignField.textContent !== '') {
      if (operationSignField.textContent === '+') {
        btnResult.textContent =
          +firstField.textContent + +secondField.textContent;
        currentNumber[3] = btnResult.textContent;
        firstField.textContent = '';
        operationSignField.textContent = '';
        secondField.textContent = '';
      } else if (operationSignField.textContent === '-') {
        btnResult.textContent =
          +firstField.textContent - +secondField.textContent;
        currentNumber[3] = btnResult.textContent;
        firstField.textContent = '';
        operationSignField.textContent = '';
        secondField.textContent = '';
      } else if (operationSignField.textContent === '*') {
        btnResult.textContent =
          +firstField.textContent * +secondField.textContent;
        currentNumber[3] = btnResult.textContent;
        firstField.textContent = '';
        operationSignField.textContent = '';
        secondField.textContent = '';
      } else if (operationSignField.textContent === '/') {
        btnResult.textContent =
          +firstField.textContent / +secondField.textContent;
        currentNumber[3] = btnResult.textContent;
        firstField.textContent = '';
        operationSignField.textContent = '';
        secondField.textContent = '';
      } else if (operationSignField.textContent === '%') {
        let percentage = +firstField.textContent * +secondField.textContent;
        btnResult.textContent = percentage / 100;
        currentNumber[3] = btnResult.textContent;
        firstField.textContent = '';
        operationSignField.textContent = '';
        secondField.textContent = '';
      }
    }
  } else if (e.key === 'Backspace') {
    if (btnResult.textContent <= 0 || btnResult.textContent > 0) {
      btnResult.textContent = '';
      currentNumber[3] = btnResult.textContent;
      if (
        secondField.textContent >= 0 &&
        operationSignField.textContent !== '' &&
        firstField.textContent >= 0
      ) {
        let cut = secondField.textContent;
        cut = cut.split('');
        cut = cut.slice(0, -1);
        secondField.textContent = cut.join('');
        currentNumber[2] = secondField.textContent;

        if (
          operationSignField.textContent !== '' &&
          secondField.textContent === ''
        ) {
          let cut = operationSignField.textContent;
          cut = cut.split('');
          cut = cut.slice(0, -1);
          operationSignField.textContent = cut.join('');
          currentNumber[1] = operationSignField.textContent;
        }
      } else if (
        firstField.textContent >= 0 &&
        operationSignField.textContent === '' &&
        secondField.textContent === ''
      ) {
        let cut = firstField.textContent;
        cut = cut.split('');
        cut = cut.slice(0, -1);
        firstField.textContent = cut.join('');
        currentNumber[0] = firstField.textContent;
      }
    }
  }
});

// btn remove num by num

const btnRemoveNumByNum = getDomEle('btn-x');
// const removNumByNum = (current, i, field) => {
//   let cut = current.split('');
//   cut = cut.slice(0, -1);
//   cut = cut.join('');
//   current = cut;
//   i = current;
//   field = i;
// };

btnRemoveNumByNum.addEventListener('click', function () {
  if (btnResult.textContent > 0) {
    btnResult.textContent = '';
  }
  let [firstNum, operationSign, secondNum] = currentNumber;
  if (firstNum >= 0 && operationSign !== '' && secondNum >= 0) {
    let cut = secondNum;
    cut = cut.split('');
    cut = cut.slice(0, -1);
    secondNum = cut.join('');
    currentNumber[2] = secondNum;
    secondField.textContent = currentNumber[2];
    if (operationSign !== '') {
      if (secondNum === '') {
        console.log('random string');
        let cut = operationSign;
        cut = cut.split('');
        cut = cut.slice(0, -1);
        operationSign = cut.join('');
        currentNumber[1] = operationSign;
        operationSignField.textContent = currentNumber[1];
      }
    }
  } else if (firstNum >= 0 && operationSign === '' && secondNum >= 0) {
    let cut = firstNum;
    cut = cut.split('');
    cut = cut.slice(0, -1);
    firstNum = cut.join('');
    currentNumber[0] = firstNum;
    firstField.textContent = currentNumber[0];
  }
});

// close program
const btnClose = getDomEle('btn-close');
const content = getDomEle('content');

btnClose.addEventListener('click', function () {
  content.classList.add('hidden');
});
// =========================================
