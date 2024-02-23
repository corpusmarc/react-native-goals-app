import { useState } from "react";
import { Image, Modal, TextInput, View } from "react-native";

import Button from "../button/Button";
import styles from "./AddGoal.style";
import colors from "../../constants/colors";
import logo from "../../../assets/images/goal.png";

export default function AddGoal({ onSubmit, onClose }) {
  const [input, setInput] = useState("");

  const submitHandler = () => {
    const goal = { id: Math.random().toString(), text: input };
    onSubmit(goal);
  };

  return (
    <Modal animationType="fade">
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <TextInput
          value={input}
          onChangeText={setInput}
          autoFocus
          style={styles.textInput}
          placeholder="Enter goal"
          placeholderTextColor={colors.lightGray}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <Button onPress={onClose} text="Cancel" color={colors.darkGray} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={submitHandler}
              text="Add Goal"
              disabled={input.trim().length === 0}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
