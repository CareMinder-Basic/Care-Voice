import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Border, FontFamily, Padding, FontSize, Color } from "../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const TermsModal = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonText, setButtonText] = useState("다음으로");
  const navigation = useNavigation();

  const toggleCheckbox = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setButtonText(newCheckedState ? "시작하기" : "다음으로");
  };

  const isButtonEnabled = isChecked;

  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>약관 동의서</Text>
          <Text style={styles.subtitle}>약관을 끝까지 확인해야 동의 가능합니다.</Text>
        </View>
        <ScrollView style={styles.termsContainer}>
          <Text style={styles.termTitle}>약관 동의 조항 제목이 노출됩니다.</Text>
          <Text style={styles.termContent}>약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다.</Text>
          <Text style={styles.termTitle}>약관 동의 조항 제목이 노출됩니다.</Text>
          <Text style={styles.termContent}>약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다.</Text>
          <Text style={styles.termTitle}>약관 동의 조항 제목이 노출됩니다.</Text>
          <Text style={styles.termContent}>약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다.</Text>
          <Text style={styles.termTitle}>약관 동의 조항 제목이 노출됩니다.</Text>
          <Text style={styles.termContent}>약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다.</Text>
          <Text style={styles.termTitle}>약관 동의 조항 제목이 노출됩니다.</Text>
          <Text style={styles.termContent}>약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다.</Text>
          <Text style={styles.termTitle}>약관 동의 조항 제목이 노출됩니다.</Text>
          <Text style={styles.termContent}>약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다.</Text>
        </ScrollView>
        
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            onPress={toggleCheckbox}
          />
          <Text style={styles.checkboxLabel}>이용 약관에 동의합니다.</Text>
        </View>

        <View style={styles.frameParent}>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={[styles.text4, {color: Color.black}]}>취소</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.wrapper, { backgroundColor: isButtonEnabled ? Color.able : Color.disable }]}
            disabled={!isButtonEnabled}
            onPress={() => navigation.navigate('Userguide')}
          >
            <Text style={[styles.text4, {color: Color.white}]}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C8E94",
  },
  modalContainer: {
    width: "60%",
    padding: 20,
    borderRadius: 32,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -0.5,
    color: Color.black,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 6,
    color: Color.text1,
    lineHeight: 20,
    letterSpacing: -0.4,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.pretendard,
    fontWeight: "500",
  },
  termsContainer: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: Color.background1,
    borderRadius: 24,
  },
  termTitle: {
    fontSize: FontSize.size_smi,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: -0.4,
    fontFamily: FontFamily.pretendard,
    marginTop: 10,
    marginHorizontal: 20,
  },
  termContent: {
    fontSize: FontSize.size_xs,
    color: Color.text1,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: -0.4,
    fontFamily: FontFamily.pretendard,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: Color.colorWhitesmoke,
    marginRight: 10,
    borderRadius: 10,
  },
  checkboxChecked: {
    backgroundColor: Color.main1,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_21xl,
    borderRadius: Border.br_81xl,
    alignItems: "center",
    width: "48%",
    backgroundColor: "#007BFF",
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  wrapper: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_17xl,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
  },
  frameParent: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 5, 
  },
  text4: {
    color: Color.text1,
    fontFamily: FontFamily.pretendard,
    lineHeight: 26,
    letterSpacing: -0.5,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontWeight: "700"
},
});

export default TermsModal;