import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    padding: 16,
  },
  pressed: {
    opacity: 0.9,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
