var number = "";
var number1 = 0;
var  number2 = 0;
var operation;
function registerNumber(num){
  number = number+num;
  writeOnCalculatorScreen(parseInt(number));
}


function writeOnCalculatorScreen(value){
$("#resultScreen").text(value);
}
function registerOperation(operation){
  this.operation = operation;
  number1 = number;
  number = "";
}

function callOperation(number1, number2){
  switch (operation){
    case "+" :  console.log("addition");
    return add(number1, number2);

    case "-" :  console.log("subtraction");
    return subtract(number1, number2);

    case "*" :  console.log("multiplication");
    return multiply(number1, number2);

    case "/" :  console.log("division");
    return divide(number1, number2);

  }

}

$("#cancelButton").click(function(){
  console.log("bring back screen to initial state");
  number="";
  $("#resultScreen").text("0");
});

function getResult(){
if(operation==="+" || operation==="-" ||  operation==="*" ||  operation==="/" ){
number2 = number;
number  = "";
console.log(number1);
console.log(number2);
number = callOperation(parseInt(number1), parseInt(number2));
operation = "";
}
if(number != ""){
$("#resultScreen").text(number);
number="";
}else{
  $("#resultScreen").text("0");
}
}
