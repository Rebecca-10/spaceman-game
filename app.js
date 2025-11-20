//SPACEMAN-GAME


const game = {
    // Creat object game and all its  properties 
    words: ["banana", "apple"],       // Array of possible secret words made it simple with two can be any 
    secretWord: "",                   // hold guessed word after playing
    lettersGuessed: [],               // Array to hold letters the player has guessed
    wrongGuesses: 0,                  // Counter for incorrect guesses we start with 0 since we have full lives 
    maxGuesses: 5,                    // Maximum number of wrong guesses allowed

    //  DOM Elements to manipulate 
    output: document.getElementById("output"),          // Element to display messages
    wordDisplay: document.getElementById("wordDisplay"),// Element to show current word state
    lettersDisplay: document.getElementById("lettersDisplay"), // Element for guessed letters
    livesDisplay: document.getElementById("livesDisplay"),     // Element for lives left
    input: document.getElementById("letterInput"),     // Input box for player guesses
    button: document.getElementById("guessButton"),    // Button to submit guess

    // Start the Game
    start() {
        this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]; // randomise my words from the array 
        this.lettersGuessed = [];   // Reset guessed letters after the play
        this.wrongGuesses = 0;      // Reset wrong guess counter after the play 

        this.output.textContent = ""; // Clear any previous game messages

        this.display(" Ready to play Spaceman!"); // Welcome message
        this.display(`Your secret word has ${this.secretWord.length} letters.`); // Show word length

        this.render();               // Update the displayed word, guesses, and lives
        this.button.disabled = false; // Enable the guess button
        this.button.onclick = () => this.handleGuess(); // Attach guess handler to button
    },

    // Display Messages 
    display(message) {
        this.output.textContent += message + "\n"; // Append a message to the output area
    },

    // Get Current Word State 
    getGuessedWord() {
        // Return word with guessed letters revealed, others as "_"
        return [...this.secretWord]
            .map(letter => (this.lettersGuessed.includes(letter) ? letter : "_"))
            .join(" ");
    },

    // Check if the Word is Fully Guessed 
    isWordGuessed() {
        // Returns true if every letter in the secret word has been guessed
        return [...this.secretWord].every(letter =>
            this.lettersGuessed.includes(letter)
        );
    },

    // Handle Player Guess 
    handleGuess() {
        const guess = this.input.value.toLowerCase(); // Get input and convert to lowercase
        this.input.value = "";                         // Clear input box

        // Validate input: must be a single letter a-z
        if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
            this.display(" Please enter ONE letter.");
            return;
        }

        // Check for repeated guess
        if (this.lettersGuessed.includes(guess)) {
            this.display(`You already guessed "${guess}". Try a new letter.`);
            return;
        }

        this.lettersGuessed.push(guess); // Add guess to guessed letters array

        // Check if guess is correct or wrong
        if (this.secretWord.includes(guess)) {
            this.display(`Correct! "${guess}" is in the word.`);
        } else {
            this.wrongGuesses++; // Increment wrong guess counter
            this.display(`Wrong! "${guess}" is not in the word.`);
        }

        this.render();    // Update displayed word, guesses, lives
        this.checkEnd();  // Check if the game is won or lost
    },

    // Render Word, Letters, and Lives 
    render() {
        this.wordDisplay.textContent = this.getGuessedWord(); // Show current word state
        this.lettersDisplay.textContent = "Guessed: " + this.lettersGuessed.join(", "); // Show guessed letters
        this.livesDisplay.textContent = `Lives left: ${this.maxGuesses - this.wrongGuesses}`; // Show remaining lives
    },

    // Check Win/Loss Conditions 
    checkEnd() {
        if (this.isWordGuessed()) { // Player guessed all letters
            this.display(`YOU WIN! The word was "${this.secretWord}".`);
            this.button.disabled = true; // Disable further guesses
        } 
        else if (this.wrongGuesses >= this.maxGuesses) { // Player ran out of lives
            this.display(`YOU LOST! The word was "${this.secretWord}".`);
            this.button.disabled = true; // Disable further guesses
        }
    }
};

//start the game 
game.start(); // Call the start() method to initialize the game can also use innit keyword 
