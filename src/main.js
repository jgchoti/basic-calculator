// Get the display field element
let displayField = document.querySelector(".display-field");

// Display only valid input characters
function filterInput(input) {
    const validInput = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '+', '-'];
    const inputValue = input.value;
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
    displayField.value   += value;
}

// Clears the calculator when click AC button 
function allClear() {
    displayField.value  = '';
}

// Delete the previous characters when click DEL button 
function deletePrev() {
    if (displayField.value.length > 0) {
        displayField.value = displayField.value.slice(0, -1)
    } 
}

// Display the result when click = button
function calculateResult() {
    if (displayField.value.length > 0) {
        displayField.value = displayField.value.slice(0, -1)
    } 
}
