import { fiveLetterWords } from "./words";
import compare, { COMPARISON, GuessComparison } from "../game-logic/compare";

export class GameState {
  public totalRounds = 5;
  public currRoundNumber = 1;
  public wordLength = 5;
  targetWordsUsed = Array();
  public target = "";
  public score = 0;
  public guessComparisons: Array<Array<GuessComparison>> = Array();

  submitGuess(guess: string) {
    const guessComparison = compare({ guess, target: this.target });
    this.guessComparisons.push(guessComparison);
    this.currRoundNumber += 1;
  }

  constructor({ totalRounds = 5, wordLength = 5 }) {
    this.totalRounds = totalRounds;
    this.wordLength = wordLength;
    this.target = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    this.targetWordsUsed.push(this.target);
  }
}
