import { StyleSheet, Text } from "react-native";

type ButtonProps = { onClick: Function; label?: string };

export function Button({ onClick, label }: ButtonProps) {
  return (
    <Text
      style={styles.button}
      onPress={() => {
        onClick();
      }}
    >
      {label}
    </Text>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#d5d5d5",
    borderRadius: 8,
    fontWeight: 600,
  },
});
