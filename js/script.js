// Save the reference to text-field into a variable.
let textField = document.querySelector("input");

// Save the reference to new-item button into a variable.
let addButton = document.querySelector("button");

// Save the reference to unordered list into a variable.
let itemList = document.querySelector(".item-list");

// Save the reference to paragraph for feedback
let feedback = document.querySelector(".feedback");


// Start function addItem.
function addItem(){

    // Create list-item and store output in a variable.
    let listItem = document.createElement("li");

    // Check if user entered the value in input text-field.
    if(textField.value !== ""){

        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        listItem.textContent = textField.value;

        // Append list item to unordered list.
        itemList.appendChild(listItem);

        // Clear a feedback-message.
        feedback.textContent = "";

        // Clear the text-field.
        textField.value = "";

        // Put the cursor back to text-field
        textField.focus();
    }

    // Otherwise:
    else{

        // Print the message nothing entered in the paragraph "feedback"
        feedback.textContent = "Nothing entered!";
    }

}
// End function addItem.


// Register your function addItem for click event on button.
addButton.addEventListener("click", addItem);
