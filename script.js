function handleClick() {
    let textbox = document.getElementById("textbox");
    let text = textbox.value;

    if (text.trim() === "") {
        alert("Please enter something!");
    } else {
        alert("You entered: " + text);
        textbox.value = ""; // Clear the text box after clicking enter
        textbox.focus(); // Keep the text box active
    }
}
