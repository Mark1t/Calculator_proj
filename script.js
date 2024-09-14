function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(){
    let equation = resultdisplay.value;
    let operatorIndex = equation.search(/[+\-*\/]/);
    let operator = equation[operatorIndex];

    let n1 = Number(equation.slice(0,operatorIndex));
    let n2 = Number(equation.slice(operatorIndex + 1));

    console.log(n1, operator, n2);

    if(n1 == '' || n2 == '' || operator == ''){
        resultdisplay.value = resultdisplay.value;
    }
    if(operator == '+'){
        resultdisplay.value = add(n1, n2);
    }
    else if(operator == '-'){
        resultdisplay.value = substract(n1, n2);
    }
    else if(operator =='*'){
        resultdisplay.value = multiply(n1, n2);
    }
    else if(operator == '/'){
        if(n2 == 0){
            resultdisplay.value = "The universe.. is crashing!";
        }
        else{
            resultdisplay.value = divide(n1, n2);
        }
    }
    else {
        resultdisplay.value = "Error occured!";
    }
}

let resultdisplay = document.getElementById("result")

let clearbut = document.getElementById("clear")
clearbut.addEventListener('click',clearDisplay)

//resultdisplay.value = "5"
let inp = document.getElementsByClassName("add")
//console.log(inp)

for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('click', updateDisplay)
    
}

function updateDisplay(){
    resultdisplay.value += this.textContent;
}

function clearDisplay(){
    resultdisplay.value = "";
}

let calculate = document.getElementById("calc");
calculate.addEventListener('click', operate);
