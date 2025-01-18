import { AnswerForm, Button, Equation } from "@/components";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [numbers, setNumbers] = useState<[number, number]>([2, 2]);
  const [answer, setAnswer] = useState<string>("");
  const [notification, setNotification] = useState<string>("");
  const [answerLogs, setAnswerLogs] = useState<Array<Object>>([]);

  //Draw two numbers from range 1 to 21 (includes both ends)
  function getRandomNumbers(): [number, number] {
    const firstNumber = Math.round(Math.random() * 20 + 1);
    const secondNumber = Math.round(Math.random() * 20 + 1);

    return [firstNumber, secondNumber];
  }

  //Handle button click and check if user's answer is correct
  function handleCheckButtonClick(answer: number) {
    if (answer === numbers[0] * numbers[1]) {
      console.log("Dobra odpowiedź!");
      setAnswer("");
      setNumbers(getRandomNumbers());
      setNotification("Poprawna odpowiedź!");
      setAnswerLogs([
        ...answerLogs,
        {
          firstNumber: numbers[0],
          secondNumber: numbers[1],
          answer,
          isCorrect: true,
        },
      ]);
      return;
    } else {
      console.log("Sprobuj ponownie");
      setNotification("Zła odpowiedź!");
      setAnswerLogs([
        ...answerLogs,
        {
          firstNumber: numbers[0],
          secondNumber: numbers[1],
          answer,
          isCorrect: false,
        },
      ]);
      return;
    }
  }

  return (
    <View style={styles.body}>
      {/* Randomized equation */}
      <Equation firstNumber={numbers[0]} secondNumber={numbers[1]} />

      {/* Answer Form */}
      <AnswerForm value={answer} setAnswer={setAnswer} />

      <Button
        label="Sprawdź wynik"
        onClick={() => {
          handleCheckButtonClick(Number(answer));
        }}
      />

      <Text style={{ color: "#000" }}>{notification}</Text>

      <View>
        {answerLogs
          .map((e: any) => {
            return (
              <Text>
                {e.firstNumber} X {e.secondNumber} = {e.answer} |||{" "}
                {e.isCorrect === true ? "DOBRZE" : "ŹLE"}
              </Text>
            );
          })
          .reverse()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
