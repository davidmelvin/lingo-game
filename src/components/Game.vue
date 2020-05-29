<template>
  <div>
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

@Component
export default class Game extends Vue {
  //   name: "Game",

  public target: string = "apple";
  public guess: string = "";
  public guessComparisons: Array<Array<GuessComparison>> = Array();

  submitGuess() {
    const guessComparison = compare(this.target, this.guess);
    this.guessComparisons.push(guessComparison);
    this.guess = "";
  }
  letterClass() {
    return {
      correct: COMPARISON.CORRECT == 2,
      misplaced: COMPARISON.MISPLACED == 1
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
  color: yellow;
}
</style>
