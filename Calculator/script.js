let count = 0;

document.addEventListener("DOMContentLoaded", function () {

  //listen for keydown events

  document.addEventListener("keydown", function (event) {
    // Get the pressed key as a string
    const key = event.key;

    // Check if the pressed key is a digit (0-9), an operator (+, -, *, /), or equals (=)
    if (/[\d+\-*/=]/.test(key)) {
      showValue(key);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //keyup events
  document.addEventListener("keyup", function (event) {
    // Check if the key code is 13 (Enter key)
    if (event.keyCode === 13) {
      // Call your function or perform an action when Enter is pressed
      showValue('=');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // keydown events
  document.addEventListener("keydown", function (event) {
    // Check if the key code is 8 (Backspace key)
    if (event.keyCode === 8) {
      handleBackspace();
    }
  });
});

// Backspace key press
function handleBackspace() {
  let result = document.getElementById("result");
  let currentValue = result.value;

  // Remove the last character from the input field
  result.value = currentValue.slice(0, -1);
}


function showValue(digit) {
  let result = document.getElementById("result");

  if (digit != "=") {
    result.value += digit;

    if (count >= 1) {
      clrScreen();
      result.value += digit;
      count = 0;
    }
  } else {
    count++;
    ans = document.getElementById("result").value;
    
    //separate an expression into operands and operators 
    let expression = ans.match(/(\d+(\.\d+)?)([+\-*/])(\d+(\.\d+)?)/);
    console.log(ans, " ", expression);

    if (expression) {
      console.log("separation:");
      let operand1 = parseFloat(expression[1]);
      let operator = expression[3];
      let operand2 = parseFloat(expression[4]);

      console.log(operand1 + " " + operator + " " + operand2);
      let output = null;
      //calculatins
      if (operator == "+") output = operand1 + operand2;
      else if (operator == "-") output = operand1 - operand2;
      else if (operator == "*") output = operand1 * operand2;
      else if (operator == "/") output = operand1 / operand2;

      document.getElementById("result").value = output;
      console.log(output);
    } 
    else document.getElementById("result").value = "undefined";
  }
}
    function buttonClick(value)
    {
        showValue(value);
    }
//clear screen funtion
function clrScreen() {
  document.getElementById("result").value = "";
}
