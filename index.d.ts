namespace App {
  type Answer = {
    id: number;
    text: string;
    truthy: boolean;
    selected: boolean;
  };

  type AnswerPayload = {
    questionIdx: number;
    answerIdx: number;
    answer: Answer;
  };

  type Question = {
    right: boolean;
    wrong: boolean;
    answered: boolean;
    question: string;
    answers: Answer[];
  };

  type Routes = {
    Quiz: undefined;
    Anki: undefined;
  };
}
