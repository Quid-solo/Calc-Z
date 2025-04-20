
// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const inputOutputField = document.querySelector("#inputOutputfield"); // The textarea
    const buttons = document.querySelectorAll(".inputbutton"); // All input buttons
    // const clearButton = document.getElementById("clearButton"); // Clear button
    

    inputOutputField.addEventListener("keydown", (event) => {
        event.preventDefault(); // Stops keyboard input
    });

    const complex = false;
    // Add event listeners to each input button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.dataset.value; // Get the button's value
            if(button.className === "func") complex = true;
            if(value === "backspace") {
                let text = inputOutputField.value;
                const regex = /(sin\(|cos\(|tan\(|log\(|ln\(|sqrt\()$/;
                if (regex.test(text)) {
                    text = text.replace(regex, '');
                } else {
                    text = text.slice(0, -1);
                }
                inputOutputField.value = text;   
            }
            else if(value === "delete") inputOutputField.value = "";
            else if(value === "solve"){
                if(complex === false){
                    const result = eval(inputOutputField.value);
                    inputOutputField.value = result; 
                }
            }

            else inputOutputField.value += value; // Append the value to the textarea

            
            });
    });

                // Clear the input field
                // clearButton.addEventListener("click", () => {
                //     inputField.value = ""; // Clear the textarea
                // });
});



