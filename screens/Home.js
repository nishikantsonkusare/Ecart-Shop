import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Item from "../components/Item";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const stud = useSelector((state) => state.stud.stud);

  const handlePress = () => {
    dispatch({ type: "DETAILS", payload: "" });
    navigation.navigate("NewRecord");
  };

  const renderItem = ({ item }) => <Item items={item} />;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.buttonContainer}>
        <Pressable
          android_ripple={{ color: "#177900" }}
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.textStyle}>ADD NEW RECORD</Text>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={stud}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30,
  },
  buttonContainer: {
    width: "80%",
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003e2d",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
    margin: 10,
  },
});
