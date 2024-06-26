import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('')
  }
  return (
    <Modal visible={props.showModal} animationType="slide" >
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
      <TextInput
        style={styles.TextInput}
        placeholder="My goals"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
    <View style={styles.buttonContainer}>
        <View style={styles.button} >
      <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
      </View  >
      <View style={styles.button} >
      <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
      </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
    padding: 16,

    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,

  },
  buttonContainer: {

    flexDirection: "row",
  },
  button: {
    marginTop: 8,
    width: "40%",
    marginHorizontal: 8,
  }
});
