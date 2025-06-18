let input = [];
let result = 0;


function updateDisplay(value) {
    input.push(value);
    document.getElementById("display").innerText = input.join("");
}

function calculate() {
    let operation = input.join("");
    let result = eval(operation);
    showResult(result);
    input = [result];
}

function showResult(result) {
    document.getElementById("display").innerText = result;
}

function clearDisplay() {
    input = [];
    document.getElementById("display").innerText = "";
}


function inputNumber(number) {
    input.push(number);
    document.getElementById("display").innerText = input.join("");
}