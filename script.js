//включаем калькулятор//
let input = document.querySelector('#result'); //значение, отображаемое на экране//
input.value = 0;
console.log(result);

let previousValue; //предыдущее введенное значение//
let nextValue; //следующее введенное значение//
let currentValue;
let currentMathOperator; //математический оператор, на который произошло нажатие//
let resultPressOfMathOperator;
let helperForMe;

let cleanButton = document.querySelector('.clean__button');
cleanButton.addEventListener('click', cleanAll);
// функция AC - очистить все:
function cleanAll() {
    input.value = 0;
    // previousValue = '';
    previousValue = null;
    // nextValue = null;
    currentMathOperator = null;
};

let offButton = document.querySelector('.off__button');
offButton.addEventListener('click', tearnOffCalculator);
//функция выключения калькулятора//
function tearnOffCalculator() {
    input.value = '';
    // previousValue = '';
    previousValue = null;
    // nextValue = null;
    currentMathOperator = null;
}

const numbers = [0, 1];

numbers.forEach((item) => {
    const element = document.querySelector(`#number_${item}`);
    element.addEventListener('click', () => {
        doSomething(item)
    })
})
//получаем лист со всеми цифровыми кнопками//
let numberButtons = document.querySelectorAll('.number__button');
console.log(numberButtons.length);

numberButtons.forEach(element => element.addEventListener('click', pressNumberButton));
numberButtons.forEach(element => element.addEventListener('keydown', pressNumberButton));


// function pressNumberButton(event) {
//     // проверяем была ли нажата кнопка математического оператора
//     if (!currentMathOperator) {
//         if (input.value === 0) {
//             input.value = event.target.innerHTML;
//         } else {
//             input.value = parseInt(`${input.value}` + `${event.target.innerHTML}`);
//         }
//     } else {
//         if (input.value !== 0 && input.value === previousValue ) {
//             input.value = event.target.innerHTML;
//         } else {
//             input.value = parseInt(`${input.value}` + `${event.target.innerHTML}`);
//         }
//     }
// }



function pressNumberButton(event) {
    // проверяем была ли нажата кнопка математического оператора
    if (!currentMathOperator) {
        if (input.value === 0) {
            input.value = event.target.innerHTML;
        } else {
            input.value = parseInt(`${input.value}` + `${event.target.innerHTML}`);
        }
    } else if (currentMathOperator === '.') {
        input.value = parseFloat(`${previousValue}.${input.value}`);
    } else {
        if (input.value !== 0 && input.value === previousValue) {
            input.value = event.target.innerHTML;
        } else {
            input.value = parseInt(`${input.value}` + `${event.target.innerHTML}`);
        }
    }
}




let mathOperator = document.querySelectorAll('.math__operator');
mathOperator.forEach(element => element.addEventListener('click', pressMathOperator));
mathOperator.forEach(element => element.addEventListener('keydown', pressMathOperator));

//функция нажатия на математический оператор -->//

function pressMathOperator(event) {
    // nextValue = input.value;
    if(currentMathOperator){
        calculateNumbers();
    }

    switch (true) {
        case event.target.classList.contains('exponentiation__button'):
            previousValue = input.value;
            currentMathOperator = 'exp';
            break;
        case event.target.classList.contains('square__root__button'):
            previousValue = input.value;
            currentMathOperator = 'sqrt';
            break;
        case event.target.classList.contains('division__button'):
            previousValue = input.value;
            currentMathOperator = '/';
            break;
        case event.target.classList.contains('multiplication__button'):
            previousValue = input.value;
            currentMathOperator = '*';
            break;
        case event.target.classList.contains('subtraction__button'):
            previousValue = input.value;
            currentMathOperator = '-';
            break;
        case event.target.classList.contains('fraction__button'):
            previousValue = input.value;
            currentMathOperator = '.';

            //траляля//
            break;
        case event.target.classList.contains('addition__button'):
            // debugger;
            previousValue = input.value;
            currentMathOperator = '+';

            console.log(currentMathOperator);
            console.log(previousValue)
            break;
    }
}

let equalsButton = document.querySelector('.equation__button');//ввели знак равно
equalsButton.addEventListener('click', calculateNumbers);
// equalsButton.addEventListener('keydown', calculateNumbers);

//операции калькулятора:
function calculateNumbers() {
    nextValue = input.value;
    switch (currentMathOperator) {
        case 'exp':
            console.log(Math.pow(previousValue, input.value));
            input.value = Math.pow(previousValue, input.value);
            break;
        // case 'sqrt':
        //     console.log(previousValue);
        //     input.value = Math.sqrt(previousValue);
        //     break;
        case '-':
            input.value = parseInt(previousValue) - parseInt(input.value);
            break;
        case '+':
            console.log(currentMathOperator);
            input.value = parseInt(previousValue) + parseInt(input.value);
            break;
        case '*':
            input.value = parseInt(previousValue) * parseInt(input.value);
            break;
        case '/':
            console.log(currentMathOperator);
            input.value = parseInt(previousValue) / parseInt(input.value);
            break;
        // case '.':
        //     console.log(input.value);
        //     input.value = parseInt(`${previousValue}.${input.value}`);
        //     break;            
    }
    // previousValue = input.value;
}

//вычисление квадратного корня

let squareButton = document.querySelector('.square__root__button');
squareButton.addEventListener('click', calculateSquare);
// squareButton.addEventListener('keydown', calculateSquare);

function calculateSquare() {
  input.value = Math.sqrt(input.value);
}
// //делаем число дробным
// let fractionButton = document.querySelector('.fraction__button');
// squareButton.addEventListener('click', makeDecimalNumber);
// squareButton.addEventListener('keydown', makeDecimalNumber);

// function makeDecimalNumber() {
//     input.value = parseInt(`${previousValue}.${input.value}`);
// }





// if (!currentMathOperator) {
//     if (result.value === 0) {
//         result.value = event.target.innerHTML;
//     } else {
//         result.value = parseInt(`${result.value}` + `${event.target.innerHTML}`);
//     }
// } else  {
//     if (result.value === 0) {
//         result.value = event.target.innerHTML;
//     } else {
//         result.value = parseInt(`${result.value}` + `${event.target.innerHTML}`);
//     }
//     }

//  // проверяем была ли нажата кнопка математического оператора
//  if (currentMathOperator !== undefined) {
//     nextValue = result.value;
//  }


//проверяем пустые //





    // switch (true) {
    //     case event.target.classList.contains('square__root__button'):
    //         console.log(event.target.innerHTML);
    //         result.value = `${Math.sqrt(result.value)}`;
    //         break;
    //     case event.target.classList.contains('division__button'):
    //         currentMathOperator = '/';
    //         break;
    //     case event.target.classList.contains('multiplication__button'):
    //         currentMathOperator = '*';
    //         break;
    //     case event.target.classList.contains('subtraction__button'):
    //         currentMathOperator = '-';
    //         break;
    //     case event.target.classList.contains('addition__button'):
    //         currentMathOperator = '+';
    //         break;
    //     case event.target.classList.contains('fraction__button'):
    //         result.value = parseInt(`${result.value}.`);
    //         break;
    //     case event.target.classList.contains('equation__button'):
    //         result.value = previousValue + currentMathOperator + nextValue;
    //         break;
    // }









// // функция деление :
// function divide() {
//     result.value = result.value / inputValue;
// };

// // функция умножение :
// function multiply() {
//     result.value = result.value * inputValue;
// };

// // функция сложение :
// function add() {
//     result.value = result.value + inputValue;
// };










