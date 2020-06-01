import { fiveLetterWords } from "./words";
import { getComparison, correctResult } from "../game-logic/compare";
export class GameState {
    constructor({ totalRounds = 5, wordLength = 5 }) {
        this.totalRounds = 5;
        this.currRoundNumber = 1;
        this.wordLength = 5;
        this.targetWordsUsed = Array();
        this.target = "";
        this.score = 0;
        this.correctResult = Array();
        this.isGameOver = false;
        this.guesses = Array();
        this.guessComparisons = {};
        this.socket = {};
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
        this.guesses = [];
        this.guessComparisons = {};
        this.updateTarget();
    }
    submitGuess(guess) {
        this.guesses.push(guess);
        if (guess === this.target) {
            this.advanceRound();
        }
        this.guessComparisons[guess] = getComparison({ target: this.target, guess });
    }
    getComparisonAtIndex({ guess, index }) {
        return this.guessComparisons[guess][index];
    }
}
//# sourceMappingURL=gameLogic.js.map