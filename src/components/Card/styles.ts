import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    width: "95%",
    padding: 10,
  },
  topicos: {
    flexDirection: "row",
  },
  image: {
    padding: 5,
    flex: 1
  },
  topic: {
    backgroundColor: colors.lightGrey,
    margin: 5,
    borderRadius: 5,
    padding: 5
  }
})

export default styles