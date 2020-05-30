<template>
  <div>
    <h1>Round: {{ currRound }}/ {{ totalRounds }}</h1>
    <h1>Target: {{ target }}</h1>
    <ol>
      <li class="guess" v-for="(guessComparison, index) in guessComparisons" :key="index">
        <!--How to get GuessComparison interface here? -->
        <span
          v-for="(letterData, index2) in guessComparison"
          :key="index2"
          v-bind:class="letterClass(letterData.comparison)"
          >{{ letterData.letter }}</span
        >
      </li>
    </ol>
    <form @submit.prevent="submitGuess">
      <input
        type="text"
        placeholder="type your guess!"
        v-model="guess"
        v-bind:maxlength="target.length"
        v-bind:minlength="target.length"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import compare, { COMPARISON, GuessComparison } from "../game-logic/compare";
import { fiveLetterWords } from "../game-logic/words";
import { GameState } from "../game-logic/gameLogic";

@Component
export default class Game extends Vue {
  public guess: string = "";
  gameState = new GameState({ totalRounds: 5, wordLength: 5 });
  public totalRounds = this.gameState.totalRounds;

  get currRound() {
    return this.gameState.currRoundNumber;
  }

  get guessComparisons() {
    return this.gameState.guessComparisons;
  }

  get target() {
    return this.gameState.target;
  }

  submitGuess() {
    this.gameState.submitGuess(this.guess);
    this.guess = "";
  }

  letterClass(letterComparison: COMPARISON) {
    return {
      correct: COMPARISON.CORRECT == letterComparison,
      misplaced: COMPARISON.MISPLACED == letterComparison
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
