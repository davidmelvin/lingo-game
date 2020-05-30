import { fiveLetterWords } from "./words";
import compare from "../game-logic/compare";
export class GameState {
    constructor({ totalRounds = 5, wordLength = 5 }) {
        this.totalRounds = 5;
        this.currRoundNumber = 1;
        this.wordLength = 5;
        this.targetWordsUsed = Array();
        this.target = "";
        this.score = 0;
        this.guessComparisons = Array();
        this.totalRounds = totalRounds;
        this.wordLength = wordLength;
        this.target = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
        this.targetWordsUsed.push(this.target);
    }
    submitGuess(guess) {
        const guessComparison = compare({ guess, target: this.target });
        this.guessComparisons.push(guessComparison);
        this.currRoundNumber += 1;
    }
}
//# sourceMappingURL=gameLogic.js.map