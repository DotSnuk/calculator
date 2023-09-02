let firstNum, secondNum, displayValue, oper, prevOper, prevNum;
let newNumber = false;
oper = '';
displayValue = '0';

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name !== 'Shift'){
        if (Number.isInteger(parseInt(name))){
            updateValue(parseInt(name));
        }
        switch (name){
            case '=':
                eq();
                break;
            case 'Enter':
                eq();
                break;
            case '-':
                useOperator('sub');
                break;
            case '+':
                useOperator('add');
                break;
            case '/':
                event.preventDefault();
                useOperator('div');
                break;
            case '*':
                useOperator('mul');
                break;
            case '.':
                checkDecimal();
                break;
            default:
                break;
        }
        //console.log('name: ' + name + ' code: ' + code)
    }
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
    o.addEventListener('click', e => {
        useOperator(e.target.id);
    })
})

const deci = document.querySelector('#dot');
deci.addEventListener('click', () => {
    checkDecimal();
})

// clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    document.getElementById('current').innerText = '0';
    document.getElementById('previous').innerText = '0';
    oper = '';
    prevNum = '';
    prevOper = '';
    displayValue = '0';
    firstNum = '';
    newNumber = false;
    changeFontSize(36);
})

// equal
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    eq();
})

const backSpace = document.querySelector('#backspace');
backSpace.addEventListener('click', () => {
    useBackspace();
})

function useOperator(o){
    if (oper !== '' && newNumber === false){
        eq();
    }
    prevNum = '';
    prevOper = '';
    firstNum = displayValue;
    oper = o;
    newNumber = true;
    lastOperation();
}

function useBackspace(){
    let arrayValue = document.getElementById('current').innerText.split('');
    if (arrayValue.length > 1){
        arrayValue.pop();
        document.getElementById('current').innerText = arrayValue.join('');
    } else {
        document.getElementById('current').innerText = '0';
    }
    displayValue = document.getElementById('current').innerText;
    console.log(arrayValue);
}

function lastOperation(){
    const previous = document.querySelector('#previous');
    if (newNumber === true && prevOper !== ''){
        previous.innerText = displayValue + conOpToString(prevOper) + prevNum;
    } else if (newNumber === true) {
        previous.innerText = firstNum + conOpToString(oper);
    } else {
        previous.innerText = firstNum + conOpToString(oper) + displayValue
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
    } else if (oper == '') {
        return;
    } else {
        operate(firstNum, displayValue, oper);
    }
    
    // for when = is pressed multiple times, so it can repeat last input
    if (oper !== ''){
        prevOper = oper;
        prevNum = displayValue;
    }
    lastOperation();

    // check how many decimals
    if (document.getElementById('current').innerText.includes('.')){
        checkDecLength();
    }

    displayValue = document.getElementById('current').innerText;
    checkFontSize();
    newNumber = true;
    oper = '';
}

function checkDecLength(){
    const numbSplit = document.getElementById('current').innerText.split('.');
    if (numbSplit[1].length >= 5){
        document.getElementById('current').innerText = parseFloat(document.getElementById('current').innerText).toFixed(5);
    };
}

function checkDecimal(){
    const numb = document.getElementById('current').innerText;
    if (!numb.includes('.')){
        addDecimal();
    }
}

function addDecimal(){
    document.getElementById('current').innerText += '.';
    displayValue = document.getElementById('current').innerText;
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
    checkFontSize();
}

function checkFontSize(){
    if (displayValue.length >= 12){
        changeFontSize(24);
     } else if (window.getComputedStyle(document.getElementById('current')).fontSize === '24px' && displayValue.length < 12){
            changeFontSize(36);
     }
}

function changeFontSize(i){
    document.getElementById('current').style.fontSize = i + 'px';  
}

function add(a, b){
    if (a.includes('.') || b.includes('.')){
        document.getElementById('current').innerText = parseFloat(a) + parseFloat(b);
    } else {
        document.getElementById('current').innerText = parseInt(a) + parseInt(b);
    }
}

function subtract(a, b){
    if (a.includes('.') || b.includes('.')){
        document.getElementById('current').innerText = parseFloat(a) - parseFloat(b);
    } else {
        document.getElementById('current').innerText = parseInt(a) - parseInt(b);
    }
}

function multiply(a, b){
    if (a.includes('.') || b.includes('.')){
        document.getElementById('current').innerText = parseFloat(a) * parseFloat(b);
    } else {
        document.getElementById('current').innerText = parseInt(a) * parseInt(b);
    }
}

function divide(a, b){
    if (parseInt(b) === 0){
        // need to check if there is decimal as well
        changeFontSize(24);
        document.getElementById('current').innerText = "Error, divide by 0";
        displayValue = '0';
        return;
    }
    if (a.includes('.') || b.includes('.')){
        document.getElementById('current').innerText = parseFloat(a) / parseFloat(b);
    } else {
        document.getElementById('current').innerText = parseInt(a) / parseInt(b);
    }
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