import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Animated, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Border, FontFamily, Padding, FontSize, Color } from "../styles/GlobalStyles";

// 28개의 PNG 이미지를 import 합니다.
const images = [
    require('../assets/images/userguide/ug_1.png'),
    require('../assets/images/userguide/ug_2.png'),
    require('../assets/images/userguide/ug_3.png'),
    require('../assets/images/userguide/ug_4.png'),
    require('../assets/images/userguide/ug_5.png'),
    require('../assets/images/userguide/ug_6.png'),
    require('../assets/images/userguide/ug_7.png'),
    require('../assets/images/userguide/ug_8.png'),
    require('../assets/images/userguide/ug_9.png'),
    require('../assets/images/userguide/ug_10.png'),
    require('../assets/images/userguide/ug_11.png'),
    require('../assets/images/userguide/ug_12.png'),
    require('../assets/images/userguide/ug_13.png'),
    require('../assets/images/userguide/ug_14.png'),
    require('../assets/images/userguide/ug_15.png'),
    require('../assets/images/userguide/ug_16.png'),
    require('../assets/images/userguide/ug_17.png'),
    require('../assets/images/userguide/ug_18.png'),
    require('../assets/images/userguide/ug_19.png'),
    require('../assets/images/userguide/ug_20.png'),
    require('../assets/images/userguide/ug_21.png'),
    require('../assets/images/userguide/ug_22.png'),
    require('../assets/images/userguide/ug_23.png'),
    require('../assets/images/userguide/ug_24.png'),
    require('../assets/images/userguide/ug_25.png'),
    require('../assets/images/userguide/ug_26.png'),
    require('../assets/images/userguide/ug_27.png'),
    require('../assets/images/userguide/ug_28.png')
  ];
  
  const Userguide = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigation = useNavigation();
  
    const handleTouch = () => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };
  
    const handleStart = () => {
      navigation.navigate('Home'); // 'NextPage'를 실제로 이동할 페이지 이름으로 바꾸세요.
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={handleTouch} activeOpacity={1}>
          <Image style={styles.image} source={images[currentImageIndex]} />
        </TouchableOpacity>
        {currentImageIndex === images.length - 1 && (
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>시작하기</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    touchable: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    startButton: {
      position: "absolute",
      bottom: 50,
      paddingVertical: Padding.p_7xs,
      paddingHorizontal: Padding.p_21xl,
      borderRadius: Border.br_81xl,
      backgroundColor: Color.able,
    },
    startButtonText: {
        color: Color.white,
        fontFamily: FontFamily.pretendard,
        lineHeight: 26,
        letterSpacing: -0.5,
        fontSize: FontSize.size_lg,
        textAlign: "center",
        fontWeight: "700"
    },
  });
  
  export default Userguide;
