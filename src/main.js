// Get the display field element
let displayField = document.querySelector('.display-field');

// Display only valid input characters
function filterInput(input) {
    const validInput = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '/',
        '*',
        '+',
        '-'
    ];
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
    // Check if the button click is the '%' button
    if (value === '%' && displayField.value.length > 0) {
        // Remove =, *, / in front of the input
        if (
            displayField.value[0] === '=' ||
            displayField.value[0] === '*' ||
            displayField.value[0] === '/'
        ) {
            displayField.value = displayField.value.slice(1);
        }
        try {
            // Check if the value is a number and calculate its percentage
            if (!isNaN(parseFloat(displayField.value) / 100)) {
                displayField.value = '=' + parseFloat(displayField.value) / 100;
            }
        } catch (error) {
            checkForErrors(inputValue);
        }
    } else {
        // If the button click is not '%', display the value to the displayField
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
        displayField.value = displayField.value.slice(0, -1);
    }
}

// Display  result when click = button
function calculateResult() {
    let inputValue = displayField.value.trim();
    // Remove = in front of the result
    if (inputValue[0] === '=') {
        inputValue = inputValue.slice(1);
        console.log(inputValue);
    }

    // Display result if the result is numbers.
    try {
        if (!isNaN(eval(inputValue))) {
            displayField.value = '=' + eval(inputValue).toFixed(2);
        }
    } catch (error) {
        checkForErrors(inputValue);
    }
}

// Check for error and display to users
function checkForErrors(inputValue) {
    // Display Error if the input is empty.
    if (inputValue.length === 0) {
        displayField.value = 'Error: Invalid input';
        return;
    }
    //  Display Error if the input is start or end with operators.
    else if (
        inputValue[0] === '/' ||
        inputValue[0] === '*' ||
        inputValue[0] === '%' ||
        inputValue[inputValue.length - 1] == '/' ||
        inputValue[inputValue.length - 1] == '*' ||
        inputValue[inputValue.length - 1] === '%'
    ) {
        displayField.value = 'Error: Can not start or end with operators';
        return;
    } else {
        displayField.value = 'Error: Invalid input';
    }
}
