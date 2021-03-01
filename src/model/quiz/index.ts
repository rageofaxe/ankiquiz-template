import {
  combine,
  createStore,
  createEvent,
  createEffect,
  attach,
} from "effector";
import * as R from "ramda";
import data from "./data";

// Effector: stores
export const $questions = createStore<App.Question[]>(data);
export const $currentIndex = createStore<number>(0);
const $results = $questions.map(
  R.pipe(R.filter<App.Question>(R.prop("right")), R.length)
);
const $errors = $questions.map(
  R.pipe(R.filter<App.Question>(R.prop("wrong")), R.length)
);

export const $store = combine({
  questions: $questions,
  currentIndex: $currentIndex,
  currentQuestion: combine<number, App.Question[], Function>(
    $currentIndex,
    $questions,
    R.prop
  ),
  isStart: $currentIndex.map(R.equals(0)),
  isEnd: combine(
    $questions,
    $currentIndex,
    R.useWith(R.equals, [R.length, R.inc])
  ),
  progress: combine($errors, $results, $questions, (errors, results, all) =>
    [errors, results, all.length].join(", ")
  ),
});

// Effector: events
export const makeAnswer = createEvent<App.AnswerPayload>("makeAnswer");
export const prevQuestion = createEvent("prevQuestion");
export const nextQuestion = createEvent("nextQuestion");

// Effector: effects
export const finishFx = attach({
  effect: createEffect(alert),
  source: $results,
  mapParams: (_, source) => source,
  name: "finishFx",
});
