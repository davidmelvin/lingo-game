export enum COMPARISON {
  INCORRECT = 0,
  MISPLACED = 1,
  CORRECT = 2
}

export interface GuessComparison {
  letter: string;
  comparison: COMPARISON;
}

// should I return a tuple for fixed length?
// TODO needs to be updated to account for multiple occurences of the same letter
// i.e., apple vs asdfa should only match the first 'a' not the 2nd
export const getComparison = ({
  target,
  guess
}: {
  target: string;
  guess: string;
}): Array<GuessComparison> => {
  const result = new Array<GuessComparison>(target.length);
  for (let i = 0; i < target.length; i++) {
    const guessChar = guess[i];
    if (guessChar === target[i]) {
      result[i] = { letter: guessChar, comparison: COMPARISON.CORRECT };
    } else if (target.includes(guess[i])) {
      result[i] = { letter: guessChar, comparison: COMPARISON.MISPLACED };
    } else {
      result[i] = { letter: guessChar, comparison: COMPARISON.INCORRECT };
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
