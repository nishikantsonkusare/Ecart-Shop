import { useState, memo } from "react";
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

const RecordForm = ({ details, onSubmit, navigation }) => {
  const [first_name, setFirstName] = useState(
    details ? details.first_name : ""
  );
  const [last_name, setLastName] = useState(details ? details.last_name : "");
  const [emailCheck, setEmailCheck] = useState(details ? details.email : "");
  const [address, setAddress] = useState(details ? details.address : "");
  const [email, setEmail] = useState(details ? details.email : "");
  const [phone, setPhone] = useState(details ? details.phone : "");

  const checkEmail = (emailID) => {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (res.test(emailID)) {
      setEmail(emailID);
    } else {
      setEmail("");
    }
    setEmailCheck(emailID);
  };

  const checkPhone = (phoneno) => {
    if (!isNaN(phoneno)) {
      setPhone(phoneno);
    }
  };

  const _onSubmit = async () => {
    if (
      !first_name ||
      !last_name ||
      !email ||
      !phone ||
      !address ||
      phone.length <= 9
    ) {
      return Alert.alert("Warning", "Kindly provide all information.");
    }
    let obj = {
      first_name,
      last_name,
      email,
      phone,
      address,
    };
    if (details) {
      obj.type = "UPDATE";
      obj.id = details.id;
    }
    onSubmit(obj);
    setFirstName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setEmailCheck("");
    setPhone("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}>First Name</Text>
        <TextInput
          placeholder="Enter First Name"
          value={first_name}
          style={styles.textField}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Last Name</Text>
        <TextInput
          placeholder="Enter Last Name"
          value={last_name}
          style={styles.textField}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="sample@mail.com"
          value={emailCheck}
          style={styles.textField}
          onChangeText={checkEmail}
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Mobile No.</Text>
        <TextInput
          placeholder="9595959595"
          value={phone}
          style={styles.textField}
          maxLength={10}
          keyboardType="number-pad"
          onChangeText={checkPhone}
        />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Address</Text>
        <TextInput
          placeholder="Address"
          value={address}
          style={[styles.textArea]}
          multiline
          numberOfLines={5}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonInnerContainer}>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            android_ripple={{ color: "pink" }}
            style={[styles.button, { backgroundColor: "crimson" }]}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.buttonInnerContainer}>
          <Pressable
            onPress={_onSubmit}
            android_ripple={{ color: "pink" }}
            style={[styles.button, { backgroundColor: "green" }]}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default memo(RecordForm);

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
