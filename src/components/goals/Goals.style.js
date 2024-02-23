import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    paddingBottom: 4,
  },
  item: {
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 16,
  },
  itemText: {
    color: colors.white,
  },
});

export default styles;
