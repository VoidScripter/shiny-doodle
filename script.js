function handleClick() {
    let textbox = document.getElementById("textbox");
    let text = textbox.value.trim(); // Remove extra spaces

    if (text === "") {
        alert("Please enter something!");
    } else {
        alert("You entered: " + text);
        textbox.value = ""; // Clears the input field
        textbox.focus(); // Keeps the cursor inside the text box
    }
}
