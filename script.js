let firstNum, secondNum, displayValue, oper;
let newNumber = false;
oper = '';
displayValue = '0';

// numbers
const numbs = document.querySelectorAll('.number');
numbs.forEach(num => {
    num.addEventListener('click', e => {
        updateValue(e.target.id);
    })
})

// operators
const ops = document.querySelectorAll('.op');
ops.forEach(o => {
    o.addEventListener('click', e => {
        if (oper !== '' && newNumber === false){
            eq();
            lastOperation();
        }
        firstNum = displayValue;
        oper = e.target.id;
        newNumber = true;
    })
})

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.getElementById('current').innerText = 0;
    document.getElementById('previous').innerText = '';
    oper = '';
    newNumber = false;
})

// equal
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    eq();
})

function lastOperation(){
    const previous = document.querySelector('#previous');
    let o;
    switch(oper){
        case 'add':
            o = '+';
            break;
        case 'sub':
            o = '-';
            break;
        case 'mul':
            o = 'x';
            break;
        case 'div':
            o = '/';
            break;
        default:
            break;
    }
    if (newNumber === true){
        previous.innerText = firstNum + o;
    } else {
        previous.innerText = firstNum + o + displayValue;
    }
    
}

function eq(){
    operate(firstNum, displayValue, oper);
    lastOperation();
    displayValue = document.getElementById('current').innerText;
    newNumber = true;
}

function updateValue(i){
    if (newNumber === false){
        displayValue === '0' ? document.getElementById('current').innerText = i :
        document.getElementById('current').innerText += i;
    } else {
        document.getElementById('current').innerText = i;
        newNumber = false;
    }
    displayValue = document.getElementById('current').innerText;
}

function add(a, b){
    document.getElementById('current').innerText = parseInt(a) + parseInt(b);
}

function subtract(a, b){
    document.getElementById('current').innerText = parseInt(a) - parseInt(b);
}

function multiply(a, b){
    document.getElementById('current').innerText = parseInt(a) * parseInt(b);
}

function divide(a, b){
    document.getElementById('current').innerText = parseInt(a) / parseInt(b);
}

function operate(a, b, op){
    switch(op){
        case 'add':
            add(a, b);
            break;
        case 'sub':
            subtract(a, b);
            break;
        case 'mul':
            multiply(a, b);
            break;
        case 'div':
            divide(a, b);
            break;
        default:
            break;
    }
}