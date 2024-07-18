// src/components/SideMenu.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontSize, FontFamily, Color } from '../styles/GlobalStyles';

const SideMenu = () => {
  return (
    <View style={styles.sideMenu}>
      <Image style={styles.sideMenuIcon} source={require('../assets/images/home/home.png')} />
      <Text style={styles.sideMenuText}>홈</Text>
      <Image style={styles.sideMenuIcon} source={require('../assets/images/home/request.png')} />
      <Text style={styles.sideMenuText}>요청 내역</Text>
      <Image style={styles.sideMenuIcon} source={require('../assets/images/home/mypage.png')} />
      <Text style={styles.sideMenuText}>마이페이지</Text>
      <Image style={styles.sideMenuIcon} source={require('../assets/images/home/settings.png')} />
      <Text style={styles.sideMenuText}>설정</Text>
      <Image style={styles.belowIcon} source={require('../assets/images/home/info.png')} />
      <Text style={styles.sideMenuText}>사용방법</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    width: 100,
    backgroundColor: Color.white,
//    borderRightWidth: 1,
    borderRightColor: Color.disable,
    alignItems: 'center',
    paddingVertical: 20,
  },
  sideMenuIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  belowIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
    marginTop: 280,
  },
  sideMenuText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: '600',
    color: Color.disable,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SideMenu;