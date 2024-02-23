import { Pressable, Text } from "react-native";

import styles from "./Button.style";
import colors from "../../constants/colors";

export default function Button({ text, color, disabled, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color ?? colors.orange },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
