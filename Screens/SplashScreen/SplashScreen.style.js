import { StyleSheet } from "react-native";

export default StyleSheet.create({
  splashContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  innerContainer: {
    height: "35%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {},
  logoContainerStack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginTop: 35,
    height: 130,
    width: 130,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  laodingContainer: {},
});
