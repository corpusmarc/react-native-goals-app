import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 180,
    marginHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  textInput: {
    borderColor: colors.white,
    borderRadius: 8,
    borderWidth: 2,
    color: colors.white,
    fontSize: 20,
    marginVertical: 16,
    padding: 16,
    width: "90%",
  },
});

export default styles;
