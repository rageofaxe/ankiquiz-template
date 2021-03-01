namespace App {
  type Question = {
    right: boolean;
    wrong: boolean;
    answered: boolean;
  };

  type AnswerPayload = {
    questionIdx: number;
    answerIdx: number;
    answer: any;
  };
}
