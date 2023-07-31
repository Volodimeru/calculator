//variables for number buttons 
const numbers = document.querySelectorAll(".button.buto");
const wholeScreen = document.querySelector('.wholeScreen');
const clearButton = document.querySelector('.butC');
const allClearButton = document.querySelector('.butAC');
const recentScreen = document.querySelector(".butscreen.recent");
const operations = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");


let numbersText = [];
let reCentNumbers = 0;
let operator = 0;
let answer = 0;

operations.forEach(operand => operand.addEventListener("click", operators));

numbers.forEach(number => number.addEventListener("click", numbersOnScreen));

clearButton.addEventListener('click', clearButtonAction)
recentScreen.innerText = ''

allClearButton.addEventListener('click', allClear);
function allClear() {
    operator = null
    reCentNumbers = null;
    answer = null;
    numbersText = [];
    recentScreen.innerText = null
}
function operators(e) {
        operator = e.target.innerText;
        firstNumber = recentScreen.innerText
        numbersText = [];
}

function numbersOnScreen(e) {
    numbersText.push(e.target.innerText);
    for (i=0; i<numbersText.length; i++) {
        reCentNumbers = numbersText.join("")
        }
        recentScreen.innerText = reCentNumbers
}

function clearButtonAction() {
    numbersText.pop();
    for (i=0; i<numbersText.length; i++) {
        let reCentNu = numbersText.join("")
        recentScreen.innerText=reCentNu
    }
    if (numbersText.length == 0){
        recentScreen.innerText = "0"
    }
}

function equality() {
    secondNumber=reCentNumbers;
    if (operator === "×") {
        operator = "*"
    }else if (operator === "÷") {
        operator = "/"
    }
    answer = operate(firstNumber,operator,secondNumber);
    recentScreen.innerText = answer;
    reCentNumbers=answer;
}

equalsButton.addEventListener('click', equality);


function add (a,b) {
return (a+b);
};

function subtract (a,b) {
    return (a-b);
};

function multiply (a,b) {
    return (a*b);
};

function divide (a,b) {
       return (a/b)
     };

function percent (a,b) {
    return ((a*b)/100).toFixed(8);
}

function operate(firstNumber,operator,secondNumber){
    a = Number(firstNumber);
    b = Number(secondNumber);
    switch (operator) {
        case "+" :
           return add(a,b);
        case '-' :
            return subtract(a,b);
        case '*' :
            return multiply(a,b);
        case '/' :
            if (b === 0) 
                return "HEY! THIS IS NOT ALLOWED!"
                else return divide(a,b)
        case '%' :
            return percent(a,b);
}
}

window.addEventListener("keydown", function(e) {
    console.log(e)
    const num = ['1',"2","3","4","5","6","7","8","9","0","."];
    const ope = ["+",'-',"*","/",'%'];
    if (num.includes(e.key)) { 
        console.log(e)
        numbersText.push(e.key);
        recentScreen.innerText = reCentNumbers;
        for (i=0; i<numbersText.length; i++) {
            reCentNumbers = numbersText.join("")
            }
            recentScreen.innerText = reCentNumbers;
    } else if (ope.includes(e.key)) {
        operator = e.key
        firstNumber = recentScreen.innerText
        numbersText = [];
    } else if (e.key == 'Backspace') {clearButtonAction()
    } else if (e.key == "=") {equality()
    } else if (e.key == "Delete") {allClear()
    }
});