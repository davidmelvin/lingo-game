<template>
  <div>
    <h1 v-if="isGameOver">Game Over</h1>
    <div v-if="!isGameOver">
      <h1>Round: {{ currRound }}/ {{ totalRounds }}</h1>
      <h1>Target: {{ target }}</h1>
      <ol>
        <li class="guess" v-for="(guess, index) in guesses" :key="index">
          <span
            v-for="(letter, index2) in guess"
            :key="index2"
            v-bind:class="getClassForLetterAt({ guess, index: index2 })"
            >{{ letter }}</span
          >
        </li>
      </ol>
      <form @submit.prevent="submitGuess">
        <input
          type="text"
          placeholder="type your guess!"
          v-model="currGuess"
          v-bind:maxlength="target.length"
          v-bind:minlength="target.length"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { COMPARISON, GuessComparison } from "../game-logic/compare";
import { fiveLetterWords } from "../game-logic/words";
import { GameState } from "../game-logic/gameLogic";

@Component
export default class Game extends Vue {
  public currGuess: string = "";
  gameState = new GameState({ totalRounds: 2, wordLength: 5 });
  public totalRounds = this.gameState.totalRounds;

  get currRound() {
    return this.gameState.currRoundNumber;
  }

  get guessComparisons() {
    return this.gameState.guessComparisons;
  }

  get guesses() {
    return this.gameState.guesses;
  }

  get target() {
    return this.gameState.target;
  }

  get isGameOver() {
    return this.gameState.isGameOver;
  }

  submitGuess() {
    this.gameState.submitGuess(this.currGuess);
    this.currGuess = "";
  }

  getClassForLetterAt({ guess, index }: { guess: string; index: number }) {
    const comparison = this.gameState.getComparisonAtIndex({ guess, index });
    return {
      correct: comparison === COMPARISON.CORRECT,
      misplaced: comparison === COMPARISON.MISPLACED
    };
  }
}
</script>

<style scoped>
li.guess {
  font-size: 2rem;
}
.correct {
  color: red;
}
.misplaced {
  color: #baa72c;
}
</style>
