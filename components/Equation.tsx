import { StyleSheet, Text, View } from "react-native";

type EquationProps = { firstNumber: number; secondNumber: number };

export function Equation({ firstNumber, secondNumber }: EquationProps) {
  return (
    <View style={styles.numbersContainer}>
      <Text style={styles.number}>{firstNumber}</Text>

      <Text style={styles.number}>X</Text>

      <Text style={styles.number}>{secondNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numbersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    padding: 24,
  },
  number: {
    fontSize: 24,
    fontWeight: 600,
  },
});
