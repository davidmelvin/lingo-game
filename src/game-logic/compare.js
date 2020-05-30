export var COMPARISON;
(function (COMPARISON) {
    COMPARISON[COMPARISON["INCORRECT"] = 0] = "INCORRECT";
    COMPARISON[COMPARISON["MISPLACED"] = 1] = "MISPLACED";
    COMPARISON[COMPARISON["CORRECT"] = 2] = "CORRECT";
})(COMPARISON || (COMPARISON = {}));
// should I return a tuple for fixed length?
// TODO needs to be updated to account for multiple occurences of the same letter
// i.e., apple vs asdfa should only match the first 'a' not the 2nd
const compare = ({ target, guess }) => {
    const result = new Array(target.length);
    for (let i = 0; i < target.length; i++) {
        const guessChar = guess[i];
        if (guessChar === target[i]) {
            result[i] = { letter: guessChar, comparison: COMPARISON.CORRECT };
        }
        else if (target.includes(guess[i])) {
            result[i] = { letter: guessChar, comparison: COMPARISON.MISPLACED };
        }
        else {
            result[i] = { letter: guessChar, comparison: COMPARISON.INCORRECT };
        }
    }
    return result;
};
export default compare;
//# sourceMappingURL=compare.js.map