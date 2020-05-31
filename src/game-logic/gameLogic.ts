import { fiveLetterWords } from "./words";
import {
  getComparison,
  correctResult,
  COMPARISON,
  GuessComparison,
  isCorrectGuess
} from "../game-logic/compare";

export class GameState {
  public totalRounds = 5;
  public currRoundNumber = 1;
  public wordLength = 5;
  targetWordsUsed = Array();
  public target = "";
  public score = 0;
  public guessComparisons: Array<Array<GuessComparison>> = Array();
  correctResult: Array<GuessComparison> = Array();
  public isGameOver = false;

  // TODO: don't repeat targets!
  private updateTarget() {
    this.target = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    this.correctResult = correctResult(this.target);
  }

  private advanceRound() {
    if (this.currRoundNumber === this.totalRounds) {
      this.isGameOver = true;
    }
    this.currRoundNumber += 1;
    this.guessComparisons = [];
    this.updateTarget();
  }

  submitGuess(guess: string) {
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

  constructor({ totalRounds = 5, wordLength = 5 }) {
    this.totalRounds = totalRounds;
    this.wordLength = wordLength;
    this.updateTarget();
    this.targetWordsUsed.push(this.target);
  }
}
