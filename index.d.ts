namespace App {
  type Answer = {
    id: number;
    text: string;
    istruthy: boolean;
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
}
