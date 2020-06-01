export enum COMPARISON {
  INCORRECT = 0,
  MISPLACED = 1,
  CORRECT = 2
}

export interface GuessComparison {
  letter: string;
  comparison: COMPARISON;
}

const getLetterCounts = (word: string) => {
  let counts: { [letter: string]: number } = {};
  [...word].forEach(letter => {
    counts[letter] = (counts[letter] | 0) + 1;
  });
  return counts;
};
// should I return a tuple for fixed length?
// TODO needs to be updated to account for multiple occurences of the same letter
// i.e., apple vs asdfa should only match the first 'a' not the 2nd
// TODO: needs lots of error checking and potentially a simpler output..
export const getComparison = ({
  target,
  guess
}: {
  target: string;
  guess: string;
}): Array<COMPARISON> => {
  const result = new Array<COMPARISON>(target.length);
  let unmatchedTargetLetters = getLetterCounts(target);
  for (let i = 0; i < target.length; i++) {
    const guessChar = guess[i];
    if (guessChar === target[i]) {
      result[i] = COMPARISON.CORRECT;
      unmatchedTargetLetters[guessChar]--;
    }
  }
  for (let i = 0; i < target.length; i++) {
    const guessChar = guess[i];
    if (result[i]) {
      continue;
    } else if (unmatchedTargetLetters[guessChar] >= 1) {
      result[i] = COMPARISON.MISPLACED;
      unmatchedTargetLetters[guessChar]--;
    } else {
      result[i] = COMPARISON.INCORRECT;
    }
  }
  return result;
};

export const correctResult = (target: string): Array<GuessComparison> => {
  return [...target].map(c => {
    return { letter: c, comparison: COMPARISON.CORRECT };
  });
};

export const isCorrectGuess = (guessComparison: GuessComparison[]): boolean => {
  return guessComparison.every(({ comparison }) => comparison === COMPARISON.CORRECT);
};
