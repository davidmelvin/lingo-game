import { fiveLetterWords } from "./words";
import { getComparison, correctResult, isCorrectGuess } from "../game-logic/compare";
export class GameState {
    constructor({ totalRounds = 5, wordLength = 5 }) {
        this.totalRounds = 5;
        this.currRoundNumber = 1;
        this.wordLength = 5;
        this.targetWordsUsed = Array();
        this.target = "";
        this.score = 0;
        this.guessComparisons = Array();
        this.correctResult = Array();
        this.isGameOver = false;
        this.totalRounds = totalRounds;
        this.wordLength = wordLength;
        this.updateTarget();
        this.targetWordsUsed.push(this.target);
    }
    // TODO: don't repeat targets!
    updateTarget() {
        this.target = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
        this.correctResult = correctResult(this.target);
    }
    advanceRound() {
        if (this.currRoundNumber === this.totalRounds) {
            this.isGameOver = true;
        }
        this.currRoundNumber += 1;
        this.guessComparisons = [];
        this.updateTarget();
    }
    submitGuess(guess) {
        const guessComparison = getComparison({ guess, target: this.target });
        this.guessComparisons.push(guessComparison);
        console.log("guesscomparison: ", guessComparison);
        console.log("this.correctresult: ", this.correctResult);
        // should i short circuit and check if it's a correct guess straight away?
        if (isCorrectGuess(guessComparison)) {
            console.log("correct!");
            this.advanceRound();
        }
    }
}
//# sourceMappingURL=gameLogic.js.map