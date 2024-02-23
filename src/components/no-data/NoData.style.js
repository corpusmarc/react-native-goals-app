import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    color: colors.lightGray,
    fontSize: 16,
    marginTop: 4,
  },
  text: {
    color: colors.darkGray,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
});

export default styles;
