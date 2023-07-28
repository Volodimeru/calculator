//variables for number buttons 
const numbers = document.querySelectorAll(".button.buto");
const wholeScreen = document.querySelector('.wholeScreen');
const clearButton = document.querySelector('.butC');
const allClearButton = document.querySelector('.butAC');
const upScereen = document.querySelector(".butscreen.up");
const recentScreen = document.querySelector(".butscreen.recent");
const operations = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");






let numbersText = [];
let reCentNumbers = 0;
let operator = 0;
let answer = ''




// numbers.forEach(number => number.addEventListener("click", function(e) {
//     numbersText.push(e.target.innerText);
//     updateRecentScreen();
// }));

// function updateRecentScreen() {
//     reCentNumbers = numbersText.join("");
//     recentScreen.innerText = reCentNumbers;
// }
operations.forEach(operand => operand.addEventListener("click", operators));

numbers.forEach(number => number.addEventListener("click", numbersOnScreen));

clearButton.addEventListener('click', clearButtonAction)
upScereen.innerText = ''
recentScreen.innerText = ''
allClearButton.addEventListener('click', function() {
    operator = ''
    reCentNumbers = '';
    answer = '';
    numbersText = [];
    upScereen.innerText = ''
    recentScreen.innerText = '0'
})

function operators(e) {
        operator = e.target.innerText;
        
        firstNumber = reCentNumbers
        upScereen.innerText = firstNumber+operator;
        secondNumber = reCentNumbers
        console.log("=",answer)

         numbersText = [];
    console.log("mi")
    // firstNumber = reCentNumbers
    console.log(firstNumber)
    
    recentScreen.innerText = ''
    answer = operate(firstNumber,operator,secondNumber)
    secondNumber=answer
}

function numbersOnScreen(e) {
    numbersText.push(e.target.innerText);
    recentScreen.innerText = reCentNumbers
    for (i=0; i<numbersText.length; i++) {
        reCentNumbers = numbersText.join("")
        }
        recentScreen.innerText = reCentNumbers
        console.log({reCentNumbers})
}

function clearButtonAction() {
    numbersText.pop();
    for (i=0; i<numbersText.length; i++) {
        let reCentNumbers = numbersText.join("")
        recentScreen.innerText=reCentNumbers
    }
    if (numbersText.length == 0){
        recentScreen.innerText = "0"
    }
}
function equality() {
    secondNumber=reCentNumbers;
    upScereen.innerText = firstNumber+operator+secondNumber+"=";
    console.log(firstNumber)
    console.log(operator)
    console.log(secondNumber)
    if (operator === "×") {
        operator = "*"
    }else if (operator === "÷") {
        operator = "/"
    }
    let answer = operate(firstNumber,operator,secondNumber);
    console.log("=",answer)
    recentScreen.innerText = answer;
    reCentNumbers=answer;
}

equalsButton.addEventListener('click', equality);


function add (a,b) {
return a+b;
};

function subtract (a,b) {
    return a-b;
};

function multiply (a,b) {
    return a*b;
};

function divide (a,b) {
    return a/b;
};
function percent (a,b) {
    return (a*b)/100;
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
            return divide(a,b);
        case '%' :
            return percent(a,b);
}
}
