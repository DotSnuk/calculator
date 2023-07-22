let firstNum, secondNum, displayValue, oper, prevOper, prevNum;
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
        }
        firstNum = displayValue;
        oper = e.target.id;
        newNumber = true;
        lastOperation();
    })
})

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.getElementById('current').innerText = '0';
    document.getElementById('previous').innerText = '0';
    oper = '';
    displayValue = '0';
    firstNum = '';
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
    // switch(oper){
    //     case 'add':
    //         o = '+';
    //         break;
    //     case 'sub':
    //         o = '-';
    //         break;
    //     case 'mul':
    //         o = 'x';
    //         break;
    //     case 'div':
    //         o = '/';
    //         break;
    //     default:
    //         break;
    // }
    if (newNumber === true){
        previous.innerText = firstNum + o;
    } else {
        previous.innerText = firstNum + o + displayValue;
    }
    
}

function conOpToString(o){
    switch(o){
        case 'add':
            return '+';
        case 'sub':
            return '-';
        case 'mul':
            return 'x';
        case 'div':
            return '/';
        default:
            break;
    }
}

function eq(){
    if (newNumber){
        operate(displayValue, prevNum, prevOper)
    } else {
        operate(firstNum, displayValue, oper);
    }
    
    // for when = is pressed multiple times, so it can repeat last input
    // need to work on lastOperation, so it shows correct information
    if (oper !== ''){
        prevOper = oper;
        prevNum = displayValue;
    }
    lastOperation();
    displayValue = document.getElementById('current').innerText;
    newNumber = true;
    oper = '';
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