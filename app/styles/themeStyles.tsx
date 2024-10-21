import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    darkcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
    },
    lightcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f5",
    },
    darkText: {
        color: "#f3f4f5",
    },
    lightText: {
        color: "#1a1a1a",
    },
    characterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        flexDirection: "row",
        padding: 10,
        margin: 10,
    },
});

export default styles;