
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
    return a/b
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

const array = [[1,2,3,'+'], [4,5,6,'-'], [7,8,9,'/'], [0,'=','*']]
const digit = document.querySelector('.digit');
const display = document.querySelector('.display');
let stringResult ="";
for (let u =0; u < 4; u++){
    const row = document.createElement("div");
    for(let i = 0; i <4; i++){
        if(array[u][i] != null){
            const button = document.createElement("button");
            button.textContent = array[u][i];
            if(u == 3 && i == 1){
                button.style.width = "120px";
                button.addEventListener('click', () => {
                    let buttonsClicked = Array.from(document.querySelectorAll("[isClicked=true]"));
                    operator = buttonsClicked.find((item) => ['+', '-', '*', '/'].includes(item.textContent)).textContent;
                    arrayDisplay = stringResult.split(operator);
                    number1 = Number(arrayDisplay[0]);
                    number2 = Number(arrayDisplay[1]);
                    console.log(number1);
                    console.log(number2);
                    console.log(operator);
                    stringResult = operate(operator, number1, number2);
                    display.textContent = stringResult;
                })
            } else {
                button.addEventListener('click', () => {
                button.setAttribute("isClicked", true);
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



