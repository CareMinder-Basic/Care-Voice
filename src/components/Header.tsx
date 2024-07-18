// src/components/Header.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FontSize, FontFamily, Padding, Border, Color } from '../styles/GlobalStyles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/home/ajou.png')} />
      <View style={styles.statusBar}>
        <View style={[styles.statusItem, styles.waiting]}>
          <Text style={styles.statusText}>대기 1</Text>
        </View>
        <View style={[styles.statusItem, styles.inProgress]}>
          <Text style={styles.statusText}>진행중 1</Text>
        </View>
        <View style={[styles.statusItem, styles.completed]}>
          <Text style={styles.statusText}>완료 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    marginLeft: 10,
    backgroundColor: Color.white,
    //borderBottomWidth: 1,
    borderBottomColor: Color.disable,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statusItem: {
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_106xl,
    marginLeft: 15,
    marginTop: -30,
  },
  waiting: {
    backgroundColor: 'rgba(48, 180, 255, 0.1)',
  },
  inProgress: {
    backgroundColor: 'rgba(242, 70, 121, 0.1)',
  },
  completed: {
    backgroundColor: Color.background1,
  },
  statusText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_base,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.5,
    color: Color.text1,
  },
});

export default Header;