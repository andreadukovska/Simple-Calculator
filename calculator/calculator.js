//Funktion for deleting all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

//Function for displaying all the values
function display( value ) {
    document.getElementById("result").value += value;
}

//Functionn for evaluating the expression and result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

