import React, { useState } from "react";

const NumberGuessingGame = () => {
    const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1); // Generate random number 1-100
    const [guess, setGuess] = useState(""); // User's guess
    const [feedback, setFeedback] = useState("..."); // Feedback for the user

    // Updates guess state as user types
    const handleChange = (event) => {
        setGuess(event.target.value);
    };

    // Compares user's guess to the secret number
    const handleGuess = () => {
        const guessNumber = parseInt(guess, 10);
        if (isNaN(guessNumber)) {
            setFeedback("Please enter a valid number!");
        } else if (guessNumber < secretNumber) {
            setFeedback("Too low!");
        } else if (guessNumber > secretNumber) {
            setFeedback("Too high!");
        } else {
            setFeedback("You guessed it!");
        }
    };

    return (
        <div>
            <h2>Number Guessing Game</h2>
            <p>Guess a number between 1 and 100.</p>
            <input
                type="text"
                value={guess}
                onChange={handleChange}
                placeholder="Enter your guess"
            />
            <button onClick={handleGuess}>Guess</button>
            <strong>{feedback}</strong>
        </div>
    );
};

export default NumberGuessingGame;

