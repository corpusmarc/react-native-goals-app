import { Text } from "react-native";

import styles from "./Title.style";

export default function Title() {
  return (
    <Text style={styles.text}>
      Goals<Text style={styles.dot}>.</Text>
    </Text>
  );
}
