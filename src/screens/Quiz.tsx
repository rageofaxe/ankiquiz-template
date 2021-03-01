import React from "react";
import { Text, View, Button } from "react-native";
import { useStore } from "effector-react";
import {
  $store,
  makeAnswer,
  nextQuestion,
  prevQuestion,
  finishFx,
} from "../model/quiz";

import "../model/init";

const CButton = (props: any) => {
  if (!props.visible) {
    return null;
  }

  return (
    <Button
      onPress={props.onClick}
      title={props.title}
      disabled={props.disabled}
    />
  );
};

export default function App() {
  const { currentQuestion, currentIndex, isEnd, isStart, progress } = useStore(
    $store
  );

  console.log("currentQuestion", currentQuestion.answers);

  return (
    <View>
      <Text>Progress: {progress}</Text>
      <Text>Question: {currentQuestion.question}</Text>
      <View>
        <Text>Variants:</Text>
        <>
          {currentQuestion.answers.map((answer, answerIdx) => (
            <View key={answer.id}>
              <CButton
                onClick={() =>
                  makeAnswer({ answer, questionIdx: currentIndex, answerIdx })
                }
                title={answer.text}
                visible
              />
            </View>
          ))}
        </>
        <CButton onClick={prevQuestion} title={"Previous"} visible={!isStart} />
        <CButton
          onClick={finishFx}
          title={"Finish"}
          visible={isEnd}
          disabled={!currentQuestion.answered}
        />
        <CButton
          onClick={nextQuestion}
          title={"Next"}
          visible={!isEnd}
          disabled={!currentQuestion.answered}
        />
      </View>
    </View>
  );
}
