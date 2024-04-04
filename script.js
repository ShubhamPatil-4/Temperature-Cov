function convert() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var tempUnit = document.getElementById("tempUnit").value;
    var result = document.getElementById("result");

    if (tempUnit === "celsius") {
        var convertedTemp = (inputTemp * 9/5) + 32;
        result.innerText = inputTemp + " Celsius = " + convertedTemp.toFixed(2) + " Fahrenheit";
    } else {
        var convertedTemp = (inputTemp - 32) * 5/9;
        result.innerText = inputTemp + " Fahrenheit = " + convertedTemp.toFixed(2) + " Celsius";
    }
}