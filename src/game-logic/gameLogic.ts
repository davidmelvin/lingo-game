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
  correctResult: Array<GuessComparison> = Array();
  public isGameOver = false;
  public guesses: string[] = Array();
  public guessComparisons: { [guess: string]: COMPARISON[] } = {};

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
    this.guesses = [];
    this.guessComparisons = {};
    this.updateTarget();
  }

  submitGuess(guess: string) {
    this.guesses.push(guess);
    if (guess === this.target) {
      this.advanceRound();
    }
    this.guessComparisons[guess] = getComparison({ target: this.target, guess });
  }

  constructor({ totalRounds = 5, wordLength = 5 }) {
    this.totalRounds = totalRounds;
    this.wordLength = wordLength;
    this.updateTarget();
    this.targetWordsUsed.push(this.target);
  }

  public getComparisonAtIndex({ guess, index }: { guess: string; index: number }) {
    return this.guessComparisons[guess][index];
  }
}
