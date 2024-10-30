function checkName() {
    const nameInput = document.getElementById("nameInput");
    const result = document.getElementById("result");

    if (nameInput.value === "Michael Ritchie", "Michael", "Mike") {
        result.textContent = "You are a loyalist.";
    } else {
        result.textContent = "You are not a loyalist.";
    }
}
