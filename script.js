// Getting the required elements
var score = document.getElementById("score");
var question = document.getElementById("question");
var user_input = document.getElementById("answer");
var correctness = document.getElementById("correctness");
var submit = document.getElementById("submit");

// Defining a function to update the question
function updateQuestion() {

    // Getting a number
    number1 = Math.floor(Math.random() * 20);

    // Getting a number
    number2 = Math.floor(Math.random() * 20);

    // Displaying the question
    question.innerHTML = number1 + " + " + number2 + " = ?";
}

// Defining a function to check the answer
function checkAnswer() {

    // Checking if the answer is correct
    if (number1 + number2 == user_input.value) {

        // Updating the score
        score.innerHTML = "Score: " + (getScore() + 1);

        // Updating the question
        updateQuestion();

        // Clearing the answer field
        clearAnswer();

        // Changing the color to green
        correctness.style.color = "green";

        // Display the text
        correctness.innerHTML = "Correct!";
    }

    // Otherwise
    else {

        // Changing the color
        correctness.style.color = "red";

        // Display the text
        correctness.innerHTML = "Wrong!";
    }
}

// Function to clear the answer
function clearAnswer() {

    // Clearing the input field
    user_input.value = "";

    // Defining the text
    correctness.innerHTML = "";
}

// Function to get the score
function getScore() {

    // Return the integral part of the score
    return parseInt(score.innerHTML.toString().split("Score: ")[1]);
}

// Calling the function on page load to update the question
document.addEventListener("DOMContentLoaded", updateQuestion);

// Adding an Event Listener to the submit button
submit.addEventListener("click", checkAnswer);