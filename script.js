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

function operate(x, op, y){
    if(op == '+'){
        return add(x,y );
    }
    else if(op == '-'){
        return substract(x,y );
    }
    else if(op =='*'){
        return multiply(x,y );
    }
    else if(op == '/'){
        return divide(x,y );
    }
}

let result = document.getElementById("result");

let nums = document.querySelectorAll("num");




//test
console.log(add(3, 5))
console.log(substract(3, 5))
console.log(multiply(3, 5))
console.log(divide(3, 5))
console.log(operate(3,'+',5))