function checkCode() {
    const correctCode = "1205"; // <-- change this to her birthday or special code
    const userInput = document.getElementById("codeInput").value;
    const error = document.getElementById("error");

    if (userInput === correctCode) {
        document.querySelector(".container").style.display = "none";
        document.getElementById("messageBox").classList.remove("hidden");
    } else {
        error.textContent = "Wrong code... try again 💔";
    }
}