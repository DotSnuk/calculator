let firstNum, secondNum, displayValue, oper;
let newNumber = false;
oper = '';
displayValue = 0;
// const buttons = document.querySelectorAll('.button');
// buttons.forEach(b => {
//     b.addEventListener('click', e => {
//         console.log(e.target.id);
//     }
//     );
// })

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
        firstNum = parseInt(document.getElementById('current').innerText);
        oper = e.target.id;
        newNumber = true;
    })
})

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', e => {
    document.getElementById('current').innerText = 0;
})

// equal
const equal = document.querySelector('#equal');
equal.addEventListener('click', e => {
    secondNum = parseInt(document.getElementById('current').innerText);
    operate(firstNum, secondNum, oper);
    lastOperation();
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
    previous.innerText = firstNum + o + secondNum;
}



function updateValue(i){
    const value = document.getElementById('current').innerText;
    if (newNumber === false){
        value === '0' ? document.getElementById('current').innerText = i :
                     document.getElementById('current').innerText += i;
    } else {
        document.getElementById('current').innerText = i;
        newNumber = false;
    }
    
}



function add(a, b){
    document.getElementById('current').innerText = a + b;
}

function subtract(a, b){
    document.getElementById('current').innerText = a - b;
}

function multiply(a, b){
    document.getElementById('current').innerText = a * b;
}

function divide(a, b){
    document.getElementById('current').innerText = a / b;
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