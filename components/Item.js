import { View, Text, StyleSheet, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Item = ({ items }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const editItem = (data) => {
    Alert.alert(data);
  };
  const deleteItem = (id) => {
    Alert.alert("Delete", "Do you want to delete this item?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => dispatch({ type: "DELETE", payload: id }) },
    ]);
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>
        {items.first_name} {items.last_name}
      </Text>
      <View style={styles.actionContainer}>
        <Entypo
          name="edit"
          size={18}
          color="green"
          onPress={() => {
            dispatch({ type: "DETAILS", payload: items });
            navigation.navigate("NewRecord");
          }}
          style={styles.actionItem}
        />
        <MaterialIcons
          name="delete"
          size={18}
          color="crimson"
          style={styles.actionItem}
          onPress={() => deleteItem(items.id)}
        />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionItem: {
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
