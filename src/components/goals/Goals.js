import { FlatList, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./Goals.style";
import colors from "../../constants/colors";

export default function Goals({ goals, onDelete }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <FontAwesome
              name="trash"
              size={24}
              color={colors.orange}
              onPress={() => onDelete(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}
