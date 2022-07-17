import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paadingBottom: 40,
  },
  logoContainer: {
    marginTop: 20,
  },
  signinst: {
    width: 320,
    height: 500,
    padding: 30,
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#363434",
    borderRadius: 10,
    borderColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainerStack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginTop: 35,
    height: 110,
    width: 110,
  },
  text: {
    color: "white",
    fontSize: 22,
  },
  seperatorStack: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seperatorEnd: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.65)",
    width: 80,
  },
  seperatorStart: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.65)",
    width: 80,
  },
  userText: {
    color: "white",
    marginBottom: 5,
    fontSize: 15,
    padding: 2,
  },
  textI: {
    color: "white",
    backgroundColor: "#1E1E1E",
    width: 280,
    height: 40,
    borderRadius: 5,
    padding: 10,
  },
  pressStyleSign: {
    width: 280,
    height: 45,
    borderRadius: 3,
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  pressStyleReg: {
    width: 280,
    height: 45,
    borderRadius: 3,
    backgroundColor: "#FF4E43",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  pressStyleText: {
    color: "#FFFFFF",
    fontSize: 17,
  },

  // inputFieldLastChild: {
  // 	marginTop: -18,
  // },
  btmContainer: {
    marginBottom: 40,
  },
});
