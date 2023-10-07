// Generate a random secret number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Initialize the number of guesses
let numberOfGuesses = 0;

// Function to check the user's guess
function checkGuess() {
    // Get the user's input element and the message display element
    const userGuessInput = document.getElementById("userGuess");
    const messageElement = document.getElementById("message");

    // Convert the user's input to an integer
    const userGuess = parseInt(userGuessInput.value);

    // Check if the user's input is valid (between 1 and 10)
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        // Display an error message if the input is invalid
        messageElement.textContent = "Please enter a valid number between 1 and 10.";
    } else {
        // Increment the number of guesses
        numberOfGuesses++;

        // Check if the user's guess is correct
        if (userGuess === secretNumber) {
            // Display a congratulatory message if the guess is correct
            messageElement.textContent = `Congratulations! You guessed the secret number (${secretNumber}) in ${numberOfGuesses} guesses.`;
            messageElement.style.color = "green";

            // Disable the input field to prevent further guesses
            userGuessInput.disabled = true;
        } else if (userGuess < secretNumber) {
            // Provide feedback to try a higher number if the guess is too low
            messageElement.textContent = "Try a higher number.";
            messageElement.style.color = "blue";
        } else {
            // Provide feedback to try a lower number if the guess is too high
            messageElement.textContent = "Try a lower number.";
            messageElement.style.color = "red";
        }

        // Clear the input field for the next guess and set focus to it
        userGuessInput.value = "";
        userGuessInput.focus();
    }
}
