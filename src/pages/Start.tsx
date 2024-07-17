import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Color, FontFamily, Padding, Border, FontSize } from "../styles/GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const Start = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [regions, setRegions] = useState(["중환자실", "응급실", "구역 1", "구역 2"]);
  const navigation = useNavigation();

  const isButtonEnabled = selectedRegion !== '';

  return (
    <View style={styles.view}>

        <View style={styles.imageContainer}>
            <Image resizeMode="cover" source={require("../assets/images/CM_logo.png")} />
        </View>

        <View style={styles.contentContainer}>
        
            <Text style={styles.text}>시작하기</Text>
            <Text style={styles.text1}>{`케어마인더를 시작하기 위해 아래의\n정보를 기입해 주세요.`}</Text>
            
            <Image style={styles.line} resizeMode="cover" source={require("../assets/images/Vector_214.png")} />

            <View style={styles.group}>
                <Text style={styles.text2}>태블릿 이름</Text>
                <Text style={styles.text3}>Samsung galaxy tab 12</Text>
            </View>
            
            <View style={styles.group}>
            <Text style={styles.text2}>구역 설정</Text>

            <Picker
                selectedValue={selectedRegion}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedRegion(itemValue)}>
                <Picker.Item style={styles.text3} label="선택해주세요." value="" />
                {regions.map((region, index) => (
                <Picker.Item style={styles.text3} key={index} label={region} value={region} />
                ))}
            </Picker>
        </View>

        <View style={styles.frameParent}>
          <TouchableOpacity style={styles.wrapper}>
            <Text style={[styles.text4, {color: Color.black}]}>뒤로가기</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.wrapper, { backgroundColor: isButtonEnabled ? Color.able : Color.disable }]}
            disabled={!isButtonEnabled}
            onPress={() => navigation.navigate('Intro')}
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
        marginTop: -30,
    },
    contentContainer: {
        alignItems: "center",
        marginBottom: -20,
    },
    text: {
        fontSize: FontSize.size_m,
        letterSpacing: -0.5,
        //lineHeight: 30,
        color: Color.main1,
        fontWeight: "700",
        fontFamily: FontFamily.pretendard,
        textAlign: "center",
        marginTop: 10, 
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
    },
    picker: {
        flex: 1,
        marginLeft: 230,
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
        marginTop: 100,
        marginBottom: -20, 
    },
  });
  
export default Start;