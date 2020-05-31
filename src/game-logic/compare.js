export var COMPARISON;
(function (COMPARISON) {
    COMPARISON[COMPARISON["INCORRECT"] = 0] = "INCORRECT";
    COMPARISON[COMPARISON["MISPLACED"] = 1] = "MISPLACED";
    COMPARISON[COMPARISON["CORRECT"] = 2] = "CORRECT";
})(COMPARISON || (COMPARISON = {}));
const getLetterCounts = (word) => {
    let counts = {};
    [...word].forEach(letter => {
        counts[letter] = (counts[letter] | 0) + 1;
    });
    return counts;
};
// should I return a tuple for fixed length?
// TODO needs to be updated to account for multiple occurences of the same letter
// i.e., apple vs asdfa should only match the first 'a' not the 2nd
// TODO: needs lots of error checking and potentially a simpler output..
export const getComparison = ({ target, guess }) => {
    const result = new Array(target.length);
    let unmatchedTargetLetters = getLetterCounts(target);
    console.log("before: ", unmatchedTargetLetters);
    for (let i = 0; i < target.length; i++) {
        const guessChar = guess[i];
        if (guessChar === target[i]) {
            result[i] = { letter: guessChar, comparison: COMPARISON.CORRECT };
        }
        unmatchedTargetLetters[guessChar]--;
    }
    for (let i = 0; i < target.length; i++) {
        const guessChar = guess[i];
        if (result[i]) {
            continue;
        }
        else if (unmatchedTargetLetters[guessChar] >= 1) {
            result[i] = { letter: guessChar, comparison: COMPARISON.MISPLACED };
            unmatchedTargetLetters[guessChar]--;
        }
        else {
            result[i] = { letter: guessChar, comparison: COMPARISON.INCORRECT };
        }
    }
    console.log("after: ", unmatchedTargetLetters);
    return result;
};
export const correctResult = (target) => {
    return [...target].map(c => {
        return { letter: c, comparison: COMPARISON.CORRECT };
    });
};
export const isCorrectGuess = (guessComparison) => {
    return guessComparison.every(({ comparison }) => comparison === COMPARISON.CORRECT);
};
//# sourceMappingURL=compare.js.map