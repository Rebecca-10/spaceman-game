

// create object game and give it its properties 
const game = {
    words: ["banana", "apple"],      // keeping it simple with two word array 
    secretWord: "",                  
    lettersGuessed: [],
    wrongGuesses: 0,
    maxGuesses: 5
};

game.secretWord = game.words[Math.floor(Math.random() * game.words.length)];

// manipulate dom
const output = document.getElementById("output");

// --- Functions ---

// show message output on new line
function display(message) {
    output.textContent += message + "\n";
}

// function??
function getGuessedWord() {
    return game.secretWord
        .split("")
        .map(letter => (game.lettersGuessed.includes(letter) ? letter : "_"))
        .join(" ");
}

// Check word vs guess
function isWordGuessed() {
    return game.secretWord.split("").every(letter => game.lettersGuessed.includes(letter));
}


function takeTurn() {
    
    display("\nWord: " + getGuessedWord());
    display("Guessed letters: " + game.lettersGuessed.join(", "));
    display(`Lives left: ${game.maxGuesses - game.wrongGuesses}\n`);

    //  win/lose condition
    if (isWordGuessed()) {
        display("YOU WIN! The word was: " + game.secretWord);
        return;
    }
    if (game.wrongGuesses >= game.maxGuesses) {
        display("YOU LOST! The word was: " + game.secretWord);
        return;
    }

    // input your letter guess
    let guess = prompt("Guess a letter:").toLowerCase();

    // Validate input taking only letters
    if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
        alert("Please enter a single letter (a-z).");
        takeTurn();
        return;
    }

    // for my double letters or more 
    if (game.lettersGuessed.includes(guess)) {
        alert("You already guessed that letter. Try a different one!");
        takeTurn();
        return;
    }

    // Add letter to guessed array
    game.lettersGuessed.push(guess);

    // Check correct word vs guess
    if (game.secretWord.includes(guess)) {
        display(`Correct guess: "${guess}"!`);
    } else {
        game.wrongGuesses++;
        display(` Wrong guess: "${guess}"!`);
    }

    takeTurn();
}


display("Ready to play Spaceman!");
display(`Your secret word has ${game.secretWord.length} letters.`);

takeTurn(); // first letter go
