// Define UI Variables 

const buttons = document.querySelectorAll('.display');

const calcInput = document.querySelector('#calc-input');

const clrButton = document.querySelector('#clr_button');

const delButton = document.querySelector('#del_button');

const equalButton = document.querySelector('#equal');

//Add Event Listeners
buttons.forEach (
    function(currentButton) {
        currentButton.addEventListener("click",display);
});

clrButton.addEventListener("click",clear);

delButton.addEventListener("click",del);

equalButton.addEventListener("click",equals);

function display(e) {
    let val = e.target.textContent;
    calcInput.value += val;
}

function clear() {
    calcInput.value = '';
}

function del() {
    calcInput.value = calcInput.value.substr(0,calcInput.value.length-1);
}

function equals() {
    let result = 0;
    let prodResult = 1;
    let exp, op;
    let val = '';
    let ops = new Array();
    let sqnum = 0;

    exp = calcInput.value;

    for (let i = 0; i < exp.length; i++) {
        if ('/*-+√^'.indexOf(exp[i]) > -1) {
            ops.push(val);
            val = '';
            op = exp[i];
        }

        else {
            val += exp[i];
        }   
    }
    if (op == '√') {
        for (let i = 1; i < exp.length; i++) {
            sqnum += exp[i];
        }
        
    }
    else {
        ops.push(val);
    }

    if (op == '+') {
        result = add(ops);
        calcInput.value = result;
    }

    else if (op == '-') {
        result = sub(ops[0],ops[1]);
        calcInput.value = result;
    }

    else if (op == '*') {
        result = multiply(ops)
        calcInput.value = result;
        
    }

    else if (op == '/') {
        result = divide(ops[0],ops[1]);
        calcInput.value = result;
    }
    
    else if (op == '√') {
        result = square(sqnum);
        calcInput.value = result;
    }

    else if (op == '^') {
        result = power(ops[0],ops[1]);
        calcInput.value = result;
    }
}

function add(numbers) {
    let summ = 0;

    for (let i = 0; i < numbers.length; i++) {
        summ += Number(numbers[i]);
    }

    return summ;
}

function sub(num1,num2) {
    return Number(num1)-Number(num2);
}
function multiply(numbers) {
    let prod = 1;

    for (let i = 0; i < numbers.length; i++) {
        prod *= Number(numbers[i]);
    }

    return prod;
}

function divide(num1,num2) {
    if ((num2) == 0) {
        return "Error!"
    }

    else {
        result = Number(num1) / Number(num2);
        return result.toFixed(2);
    } 
}

function square(num) {
    return Number(num) ** 0.5;
}

function power(num1,num2) {
    return Math.pow(Number(num1),Number(num2));
}