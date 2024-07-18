// src/screens/Home.tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';
import { FontSize, FontFamily, Padding, Border, Color } from '../styles/GlobalStyles';

const Recode = () => {
  return (
    <View style={styles.view}>
      <Header />
      <View style={styles.content}>
        <SideMenu />
        <View style={styles.mainContent}>
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
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Color.white,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  statusItem: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_106xl,
    marginLeft: 15,
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

export default Recode;