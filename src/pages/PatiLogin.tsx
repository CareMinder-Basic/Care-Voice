import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Color, FontFamily, Padding, Border, FontSize } from "../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const PatiLogin = () => {
  const [name, setName] = useState("");
  const [ph_num, setNum] = useState("");
  const [selectedRegion, setSelectedRegion] = useState('');
  const [regions, setRegions] = useState(["여자", "남자"]);
  const navigation = useNavigation();

  const isButtonEnabled = selectedRegion !== '';

  return (
    <View style={styles.view}>

        <View style={styles.imageContainer}>
            <Image resizeMode="cover" source={require("../assets/images/CM_logo.png")} />
        </View>

        <View style={styles.contentContainer}>
        
            <Text style={styles.text}>
              <Text>{'환영합니다\n여러분의 생활을'}</Text>
              <Text style={[styles.highlight, styles.bold]}>{' 스마트하게 변화시킬 '}</Text>
              <Text style={styles.bold}>케어보이스</Text>
              <Text>입니다</Text>
            </Text>
            
            <Text style={styles.text1}>{`케어마인더를 시작하기 위해 아래의\n정보를 기입해 주세요.`}</Text>
            
            <Image style={styles.line} resizeMode="cover" source={require("../assets/images/Vector_214.png")} />

            <View style={styles.group}>
                <Text style={styles.text2}>환자 성명</Text>
                <TextInput
                  style={styles.text3}
                  placeholder="홍길동"
                  value={name}
                  onChangeText={setName}
                />
            </View>

            <View style={styles.group}>
              <Text style={styles.text2}>성별</Text>

              <Picker
                  selectedValue={selectedRegion}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedRegion(itemValue)}>
                  <Picker.Item style={styles.text3} label="선택" value="" />
                  {regions.map((region, index) => (
                  <Picker.Item style={styles.text3} key={index} label={region} value={region} />
                  ))}
              </Picker>
            </View>
            <View style={styles.group}>
                <Text style={styles.text2}>휴대폰 번호</Text>
                <TextInput
                  style={styles.text3}
                  placeholder="010-1234-5678  "
                  value={ph_num}
                  onChangeText={setNum}
                />
            </View>
        <View style={styles.frameParent}>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={[styles.text4, {color: Color.black}]}>뒤로가기</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.wrapper, { backgroundColor: isButtonEnabled ? Color.able : Color.disable }]}
            disabled={!isButtonEnabled}
            onPress={() => navigation.navigate('Terms')}
          >
            <Text style={[styles.text4, {color: Color.white}]}>시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        flexGrow: 1,
        backgroundColor: Color.white,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    imageContainer: {
        alignItems: "center",
        width: "100%",
        marginTop: -20,
    },
    contentContainer: {
        alignItems: "center",
        marginBottom: -20,
    },
    text: {
        fontSize: FontSize.size_m,
        letterSpacing: -0.5,
        lineHeight: 25,
        color: Color.colorDimgray,
        fontWeight: "400",
        fontFamily: FontFamily.pretendard,
        textAlign: "center",
        marginTop: 10, 
    },
    bold: {
      fontWeight: "700",
    },
    highlight: {
      color: Color.main1,
    },
    text1: {
        lineHeight: 20,
        letterSpacing: -0.4,
        fontSize: FontSize.size_sm,
        color: Color.color,
        fontFamily: FontFamily.pretendard,
        textAlign: "center",
        marginTop: 15, 
        marginBottom: 25,
      },
    line: {
        alignItems: "center",
        width: 500,
        marginBottom: 30,
    },
    group: {
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: "center",
        borderRadius: Border.br_5xs,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke,
        borderStyle: "solid",
        backgroundColor: Color.white,
        width: "40%",
        marginBottom: 20, 
      },
    text2: {
        textAlign: "left",
        color: Color.main1,
        fontWeight: "700",
        fontFamily: FontFamily.pretendard,
        fontSize: FontSize.size_base,
      },
    text3: {
        color: Color.black,
        fontFamily: FontFamily.pretendard,
        fontSize: FontSize.size_sm,
        textAlign: "right",
        marginRight: 20,
    },
    picker: {
        flex: 1,
        marginLeft: 320,
        marginVertical: -20,
    },
    text4: {
        color: Color.text1,
        fontFamily: FontFamily.pretendard,
        lineHeight: 26,
        letterSpacing: -0.5,
        fontSize: FontSize.size_lg,
        textAlign: "center",
        fontWeight: "700"
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
        marginTop: 60,
        marginBottom: -20, 
    },
  });
  
export default PatiLogin;