//variables for number buttons 
const numbers = document.querySelectorAll(".button.buto");
const wholeScreen = document.querySelector('.wholeScreen');
const clearButton = document.querySelector('.butC');
const allClearButton = document.querySelector('.butAC');

console.log(allClearButton)

numbers.forEach(number => number.addEventListener("click", function(e) {
    console.log(e.target.innerText)
}))
allClearButton.addEventListener('click', function() {
    wholeScreen.innerHTML = "";
})
function add (a,b) {
return a+b
};

function subtract (a,b) {
    return a-b
};

function multiply (a,b) {
    return a*b
};

function divide (a,b) {
    return a/b
};

function operate(firstNumber,operator,secondNumber){
    a = firstNumber;
    b = secondNumber;
    switch (operator) {
        case "+" :
           return add(a,b);
        case '-' :
            return subtract(a,b);
        case '*' :
            return multiply(a,b);
        case '/' :
            return divide(a,b);
}
}
