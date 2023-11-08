// Get the display field element
let displayField = document.querySelector(".display-field");

// Display only valid input characters
function filterInput(input) {
    const validInput = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '+', '-'];
    const inputValue = displayField.value;
    let filteredValue = '';
    for (const userType of inputValue) {
        if (validInput.includes(userType)) {
            filteredValue += userType;
        }
    }
    displayField.value = filteredValue;
}

// Display value when click buttons
function displayValue(value) {
    if (value === '%' && displayField.value.length > 0) {
        // Remove = in front of the input
        if (displayField.value[0] === '=' || displayField.value[0] === '*' || displayField.value[0] === '/') {
            displayField.value = displayField.value.slice(1)
        }
        displayField.value = (parseFloat(displayField.value)) / 100;
    } else {
        displayField.value += value;
    }
}

// Clears the calculator when click AC button 
function allClear() {
    displayField.value = '';
}

// Delete the previous characters when click DEL button 
function deletePrev() {
    if (displayField.value.length > 0) {
        displayField.value = displayField.value.slice(0, -1)
    }
}

// Display  result when click = button
function calculateResult() {
    let inputValue = displayField.value.trim();
    // Remove = in front of the result
    if (inputValue[0] === '=') {
        inputValue = inputValue.slice(1)
        console.log(inputValue)
    }
    // Display Error if the input is empty.
    if (inputValue.length === 0) {
        displayField.value = 'Error: Invalid input';
        return;
    }
    //  Display Error if the input is start or end with operators.
    if (inputValue[0] === '/' || inputValue[0] === '*' || inputValue[0] === '%' || inputValue[inputValue.length - 1] == '/' || inputValue[inputValue.length - 1] == '*' || inputValue[inputValue.length - 1] === '%') {
        displayField.value = 'Error: Can not start or end with operators'
        return;
    }
    // Display result if the result is numbers.
    try {
        if (!isNaN(eval(inputValue))) {
            displayField.value = '=' + eval(inputValue).toFixed(2)
        }
        // Display Error if the result is invalid.
        else {
            displayField.value = 'Error: Invalid result'
        }
    } catch (error) {
        displayField.value = 'Error: Invalid input'
    }
}

