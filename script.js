
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
    return a*b
}

let number1 = 0;
let number2 = 0;
let operator = '+';

function operate(ope, nb1, nb2) {
    if(ope === '+'){
        add(nb1,nb2);
    }else if(ope === '-'){
        subtract(nb1,nb2);
    }else if(ope === '*'){
        mutliply(nb1,nb2);
    }else{
        divide(nb1,nb2);
    }
}

const array = [['1','2','3','+'], ['4','5','6','-'], ['7','8','9','/'], ['0','=','*']]
const digit = document.querySelector('.digit');
for (let u =0; u < 4; u++){
    const row = document.createElement("div");
    for(let i = 0; i <4; i++){
        if(array[u][i] != null){
            const button = document.createElement("button");
            if(u == 3 && i == 1){
                button.style.width = "120px";
            }
            button.textContent = array[u][i];
            row.appendChild(button);
        }
    }
    digit.appendChild(row);
}
