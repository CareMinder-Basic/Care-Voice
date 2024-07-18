// src/components/Footer.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontSize, FontFamily, Color, Border } from '../styles/GlobalStyles';

const Footer = () => {
  return (
    <View style={styles.footer}>
        <Image style={styles.footerIcon} source={require('../assets/images/home/alert.png')} />
        <Text style={styles.alertText}>
            환자분들의 시급함을 충분히 인지하고 있으나 응급실이라는 특성상 우선순위에 맞추어 진료중이오니 현재 응급환자가 몰려 지연이 발생하고 있습니다. 양해 부탁드립니다.
        </Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    //borderTopWidth: 1,
    borderTopColor: Color.disable,
    marginHorizontal: 100,
  },
  footerside: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginRight: 20,

  },
  footerText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: '600',
    color: Color.disable,
  },
  footeralert: {
    marginLeft: 40,
  },
  alertText: {
    flex: 1,
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: '500',
    color: Color.text1,
    textAlign: 'left',
    marginRight: 8,
  },
});

export default Footer;