import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, Image } from "react-native";
import { FontSize, FontFamily, Padding, Border, Color } from "../styles/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  
  const isLoginEnabled = id.length > 0 && pw.length > 0;

  const handleLogin = () => {
    if (id === "user1234" && pw === "12345678") {
      navigation.navigate("Start");
    } else {
      setErrorMessage("아이디나 비밀번호가 틀렸습니다. 입력하신 정보를 다시 검토해 주세요");
    }
  };
  
  return (
    <View style={styles.container}>
      
      <View style={styles.leftContainer}>
        <Image style={styles.backgroundImage} source={require("../assets/images/CM_base.png")} />
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.title}>CAREMINDER</Text>
        <Text style={styles.subtitle}>케어마인더에 오신걸 환영합니다.</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Image style={styles.idpw} source={require("../assets/images/ID_logo.png")}/>
            <TextInput
              style={styles.input}
              placeholder="ID"
              value={id}
              onChangeText={setId}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Image style={styles.idpw} source={require("../assets/images/PW_logo.png")}/>
            <TextInput
              style={styles.input}
              placeholder="PW"
              value={pw}
              secureTextEntry={true}
              onChangeText={setPw}
            />
          </View>
        </View>

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <TouchableOpacity
          style={[styles.loginButton, { backgroundColor: isLoginEnabled ? Color.able : Color.disable }]}
          disabled={!isLoginEnabled}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  leftContainer: {
    flex: 816,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 523,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_xl,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 36,
    letterSpacing: 7.2,
    lineHeight: 72,
    fontWeight: "600",
    color: Color.black,
    fontFamily: FontFamily.pretendard,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.pretendard,
    fontWeight: "500",
    color: Color.text1,
    textAlign: "center",
    marginBottom: 40,
  },
  idpw:{
    marginRight: 10,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs,
    padding: Padding.p_3xs,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.pretendard,
    color: Color.color,
  },
  errorMessage: {
    fontFamily: FontFamily.pretendard,
    fontSize: 13,
    letterSpacing: -0.2,
    lineHeight: 20,
    color: Color.red,
    textAlign: "center",
    marginBottom: 20,
    marginTop: -10,
  },
  loginButton: {
    width: "100%",
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: FontSize.size_m,
    fontFamily: FontFamily.pretendard,
    color: Color.white,
  },
});

export default Login;