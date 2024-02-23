import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./NoData.style";
import colors from "../../constants/colors";

export default function NoData() {
  return (
    <View style={styles.container}>
      <FontAwesome name="ban" size={60} color={colors.lightGray} />
      <Text style={styles.text}>No Data Available</Text>
      <Text style={styles.subtext}>
        There is no data to show you right now.
      </Text>
    </View>
  );
}
