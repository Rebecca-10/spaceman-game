SPACEMAN
A player must loose after a certain number of guesses 
Must have: win or loose condition 


Start the game and show a welcome message. Ready to play spaceman!
Choose a random secret word from a list of words. Im starting with 2 word array 
Create a line of blank spaces for each letter in the word so the player knows how long it is.
Set the number of wrong guesses the player is allowed !! Any number of choice I choose 5
Keep a list of all letters the player has guessed.Repeat the following steps until the player either guesses the whole word or uses up all their chances:
Show the player the word progress (letters they’ve guessed and blanks).
Show the player which letters they have already guessed.
Show how many guesses they have left.
Ask the player to guess a letter.
Make sure the player’s input is valid (only one letter, not already guessed).
Add the letter to the list of guessed letters.
If the letter is in the secret word, reveal that letter in the word.
If the letter is NOT in the word, take away one life and update the spaceman graphic or stage.
If player inputs a double letter let them know its already used 
     When the loop ends, check if the player won or lost:
If the player guessed the whole word, show a winning message.
If they ran out of guesses, show a losing message and reveal the word.
