// Get the display field element
let displayField = document.querySelector('.display-field');

//Event listener for press "Enter" to calculate
displayField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log(displayField.value);
        calculateResult();
    }
});

// Display only valid input characters
function filterInput() {
    let validDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let validOperators = ['/', '*', '+', '-', '.'];
    const inputValue = displayField.value;
    let filteredValue = '';

    for (const userInput of inputValue) {
        if (validDigits.includes(userInput)) {
            filteredValue += userInput;
        } else if (validOperators.includes(userInput)) {
            if (
                !validOperators.includes(
                    filteredValue[filteredValue.length - 1]
                )
            ) {
                filteredValue += userInput;
            }
        }
    }
    displayField.value = filteredValue;
}

// Display value when click buttons
function displayValue(value) {
    // Check if the button click is the '%' button
    if (value === '%' && displayField.value.length > 0) {
        // Remove =, *, / in front of the input
        if (['/', '*', '='].includes(displayField.value[0])) {
            displayField.value = displayField.value.slice(1);
        }
        try {
            // Check if the value is a number and calculate its percentage
            if (!isNaN(parseFloat(displayField.value) / 100)) {
                console.log(displayField.value);
                displayField.value = '=' + parseFloat(displayField.value) / 100;
            }
        } catch (error) {
            console.log(displayField.value);
            checkForErrors(displayField.value);
        }
    } else if (['/', '*', '+', '-'].includes(value)) {
        if (
            !['/', '*', '+', '-'].includes(
                displayField.value[displayField.value.length - 1]
            )
        ) {
            displayField.value += value;
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
        ['/', '*', '%'].includes(inputValue[0]) ||
        ['/', '*', '%', '+', '-'].includes(inputValue[inputValue.length - 1])
    ) {
        displayField.value = 'Error: Can not start or end with operators';
        return;
    } else {
        displayField.value = 'Error: Invalid input';
    }
}

// Dark theme once click
let darkTheme = false;
function themeSwitch() {
    darkTheme = !darkTheme;
    // select multiple elements
    let digitsButtons = document.querySelectorAll('.digits-buttons');
    let rightButtons = document.querySelectorAll('.right-buttons');
    let topButtons = document.querySelectorAll('.top-buttons');
    if (darkTheme) {
        document.querySelector('.theme-switch').innerHTML = 'LIGHT THEME';
        document
            .querySelector('.theme-switch')
            .classList.add('dark-digits-buttons');
        document.body.classList.add('dark-bg');
        document.querySelector('.container').classList.add('dark-container-bg');
        document
            .querySelector('.display-field')
            .classList.add('dark-display-field');

        for (const button of digitsButtons) {
            button.classList.add('dark-digits-buttons');
        }
        for (const button of rightButtons) {
            button.classList.add('dark-right-buttons');
        }
        for (const button of topButtons) {
            button.classList.add('dark-top-buttons');
        }
    } else {
        document.querySelector('.theme-switch').innerHTML = 'DARK THEME';
        document
            .querySelector('.theme-switch')
            .classList.remove('dark-digits-buttons');
        document.body.classList.remove('dark-bg');
        document
            .querySelector('.container')
            .classList.remove('dark-container-bg');
        document
            .querySelector('.display-field')
            .classList.remove('dark-display-field');
        for (const button of digitsButtons) {
            button.classList.remove('dark-digits-buttons');
        }
        for (const button of rightButtons) {
            button.classList.remove('dark-right-buttons');
        }
        for (const button of topButtons) {
            button.classList.remove('dark-top-buttons');
        }
    }
}
