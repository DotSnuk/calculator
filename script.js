let firstNum, secondNum, displayValue, oper;
displayValue = 0;
const buttons = document.querySelectorAll('.button');
buttons.forEach(b => {
    b.addEventListener('click', e => {
        console.log(e.target.id);
    }
    );
})

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
    firstNum = parseInt(document.getElementById('current').innerText);
})

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', e => {
    document.getElementById('current').innerText = 0;
})


function updateValue(i){
    const value = document.getElementById('current').innerText;
    value === '0' ? document.getElementById('current').innerText = i :
                     document.getElementById('current').innerText += i;
}



function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
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