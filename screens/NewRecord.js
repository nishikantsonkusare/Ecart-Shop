import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RecordForm from "../components/RecordForm";
import { add, update } from "../store/actions/stud";

const NewRecord = ({ navigation }) => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.stud.details);
  const _onSubmit = (data) => {
    if (data.type === "UPDATE") {
      delete data.type;
      dispatch(update(data));
    } else {
      dispatch(add(data));
    }
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView style={styles.root} behavior="null">
      <ScrollView>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <RecordForm
          onSubmit={_onSubmit}
          navigation={navigation}
          details={details}
        />
        {/* </TouchableWithoutFeedback> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewRecord;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  group: {
    width: "100%",
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingLeft: 5,
  },
  textField: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#b3b4b3",
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#1e1e1d",
  },
  textArea: {
    width: "100%",
    // height: 120,
    borderWidth: 1,
    borderColor: "#b3b4b3",
    padding: 10,
    borderRadius: 10,
    color: "#1e1e1d",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
  },
  buttonInnerContainer: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
