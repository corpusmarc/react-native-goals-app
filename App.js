import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import AddGoal from "./src/components/add-goal/AddGoal";
import Button from "./src/components/button/Button";
import Goals from "./src/components/goals/Goals";
import NoData from "./src/components/no-data/NoData";
import Title from "./src/components/title/Title";
import colors from "./src/constants/colors";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const submitHandler = (goal) => {
    setGoals((currentGoals) => [...currentGoals, goal]);
    toggelModal();
  };

  const deleteHandler = (id) => {
    setGoals((currentGoals) =>
      currentGoals.filter((currentGoal) => currentGoal.id !== id)
    );
  };

  const toggelModal = () => setIsModal((currentIsModal) => !currentIsModal);

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Title />

          {goals.length === 0 ? (
            <NoData />
          ) : (
            <Goals goals={goals} onDelete={deleteHandler} />
          )}

          <Button text="Add Goal" onPress={toggelModal} />
        </SafeAreaView>
      </SafeAreaProvider>

      {isModal && <AddGoal onSubmit={submitHandler} onClose={toggelModal} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mint,
    flex: 1,
    paddingHorizontal: 8,
  },
});
