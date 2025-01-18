import { StyleSheet, Text, TextInput, View } from "react-native";
import { isCorvertibleToNumber } from "@/utils";

type AnswerProps = { value: string; setAnswer: Function };

export function AnswerForm({ value, setAnswer }: AnswerProps) {
  //Check if input is correct and update value
  function handleAnswerChange(text: string) {
    if (isCorvertibleToNumber(text)) {
      setAnswer(text);
    }
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.textInputLabel}>Twoja odpowiedź:</Text>

      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text: any) => {
          handleAnswerChange(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputLabel: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
  textInput: {
    textAlign: "center",
    width: 150,

    backgroundColor: "#d5d5d5",

    fontSize: 16,

    paddingBlock: 24,
    borderRadius: 8,
  },
  formContainer: {
    justifyContent: "center",
    gap: 8,
  },
});
