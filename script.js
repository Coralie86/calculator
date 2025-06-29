
function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function mutliply(a,b) {
    return a*b
}

function divide(a,b) {
    if(b == 0){
        return 'Error Division by 0';
    }else {
        return (a/b).toFixed(5);
    }    
}

let number1 = 0;
let number2 = 0;
let operator = '+';

function operate(ope, nb1, nb2) {
    if(ope === '+'){
        return add(nb1,nb2);
    }else if(ope === '-'){
        return subtract(nb1,nb2);
    }else if(ope === '*'){
        return mutliply(nb1,nb2);
    }else{
        return divide(nb1,nb2);
    }
}

const array = [[1,2,3,'+'], [4,5,6,'-'], [7,8,9,'/'], [0, '.', '=','*']]
const digit = document.querySelector('.digit');
const display = document.querySelector('.display');
let hasBeenCalculated = false;
let stringResult ="";

for (let u =0; u < 4; u++){
    const row = document.createElement("div");
    for(let i = 0; i <4; i++){
        if(array[u][i] != null){
            const button = document.createElement("button");
            button.textContent = array[u][i];
            button.id = String(array[u][i]);
            if(u == 3 && i == 2){
                button.addEventListener('click', () => {
                    calculate();
                })
            } else {
                button.addEventListener('click', () => {
                if(hasBeenCalculated == true){
                    clearDisplay();
                    hasBeenCalculated = false;
                }
                if(u== 3 && i==1){
                    button.disabled = true;
                }
                if(['+', '-', '*', '/'].includes(array[u][i])){
                    buttonToUpdate = document.getElementById('.');
                    buttonToUpdate.disabled =false;
                }
                stringResult += array[u][i].toString();
                display.textContent = stringResult;
                }
            )
            }
            row.appendChild(button);
        }
    }
    digit.appendChild(row);
}

function clearDisplay() {
    stringResult = "";
    display.textContent = stringResult;
}

function calculate() {
        operator = stringResult.split('').find((item) => ['+', '-', '*', '/'].includes(item));
        arrayDisplay = stringResult.split(operator);
        number1 = Number(arrayDisplay[0]);
        number2 = Number(arrayDisplay[1]);
        stringResult = operate(operator, number1, number2);                   
        display.textContent = stringResult;
        hasBeenCalculated = true;
        buttonToUpdate.disabled =false;
}

function borrowDisplay () {
    stringResult = display.textContent.split('');
    stringResult.pop();
    stringResult = stringResult.join('');
    display.textContent = stringResult;
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => clearDisplay())

const borrow = document.querySelector('.back');
borrow.addEventListener('click', () => {
    borrowDisplay();
})

document.addEventListener("keydown", (event => {
    const keyName = event.key;
    if(keyName ==='Enter'){
        calculate();
    }else if (keyName === 'Backspace'){
        borrowDisplay();
    }else {
        if(hasBeenCalculated == true){
            clearDisplay();
            hasBeenCalculated = false;
        }
        stringResult += keyName;
        display.textContent = stringResult;
    }
    
}))