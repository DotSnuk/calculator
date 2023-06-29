let firstNum, secondNum, displayValue, oper;
displayValue = 0;
const buttons = document.querySelectorAll('.button');
buttons.forEach(b => {
    b.addEventListener('click', e => {
        console.log(e.target.id);
    }
    );
})
const numbs = document.querySelectorAll('.number');
numbs.forEach(num => {
    num.addEventListener('click', e => {
        updateValue(e.target.id);
    })
})

function updateValue(i){
    const value = document.getElementById('current').innerText;
    // if (value === '0'){
    //     document.getElementById('current').innerText = i;
    // } else {
    //     document.getElementById('current').innerText = value + i;
    // }
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