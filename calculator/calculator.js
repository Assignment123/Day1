function backspace(calc)
{
    var size= calc.display.value.length;
    calc.display.value=calc.display.value.substring(0,size-1);
}
function square_root(calc){
    calc.display.value = Math.sqrt(calc.display.value);
}

function log(calc){
    calc.display.value = Math.log10(calc.display.value);
}

function sin(calc){
    calc.display.value = Math.sin(calc.display.value);
}
function cos(calc){
    calc.display.value = Math.cos(calc.display.value);
}
function tan(calc){
    calc.display.value = Math.tan(calc.display.value);
}
function pi(calc){
    calc.display.value = Math.PI * calc.display.value;
}

function calculateFinalValue() {
    console.log(calc.display.value);
}

