import * as R from "ramda";

import {
  $currentIndex,
  $questions,
  prevQuestion,
  nextQuestion,
  makeAnswer,
} from "./";

$currentIndex.on(nextQuestion, R.inc).on(prevQuestion, R.dec);
$questions.on(makeAnswer, (state, { answer, questionIdx: i, answerIdx: j }) =>
  state[i].answered
    ? state
    : R.pipe(
        R.set(R.lensPath([i, "answers", j, "selected"]), true),
        R.set(R.lensPath([i, "answered"]), true),
        R.set(R.lensPath([i, "right"]), answer.truthy),
        R.set(R.lensPath([i, "wrong"]), !answer.truthy)
      )(state)
);
