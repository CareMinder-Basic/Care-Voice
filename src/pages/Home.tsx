import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';
import { Color, FontSize, FontFamily, Border, Padding } from '../styles/GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.view}>
      <Header />
      <View style={styles.mainContent}>
        <SideMenu />
        <View style={styles.leftContent}>
          <View style={styles.tabBar}>
            <TouchableOpacity style={[styles.tabItem, { backgroundColor: Color.main1 }]}>
              <Text style={[styles.tabText, { color: Color.white }]}>병원 안내</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text style={styles.tabText}>빠른 요청</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text style={styles.tabText}>식사 안내</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text style={styles.tabText}>기타 서비스</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.groupParent}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>병원 안내</Text>
                <View style={styles.sectionContent}>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame35.png")} />
                    <Text style={styles.cardText}>병원 만족도 조사</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame36.png")} />
                    <Text style={styles.cardText}>병원 소식</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame37.png")} />
                    <Text style={styles.cardText}>병원 홈페이지</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame38.png")} />
                    <Text style={styles.cardText}>의료진 소개</Text>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>빠른 요청</Text>
                <View style={styles.sectionContent}>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame45.png")} />
                    <Text style={styles.cardText}>시트교체</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame46.png")} />
                    <Text style={styles.cardText}>수액교체</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame47.png")} />
                    <Text style={styles.cardText}>화장실 사용 요청</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame48.png")} />
                    <Text style={styles.cardText}>화장실 위치</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame48097965.png")} />
                    <Text style={styles.cardText}>주차 관련 문의</Text>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>식사 안내</Text>
                <View style={styles.sectionContent}>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame49.png")} />
                    <Text style={styles.cardText}>환자 식단 안내</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame50.png")} />
                    <Text style={styles.cardText}>식단 이력 조회</Text>
                  </View>
                  <View style={styles.card}>
                    <Image style={styles.cardIcon} source={require("../assets/images/menu/Frame51.png")} />
                    <Text style={styles.cardText}>식사 만족도 조사</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.rightContent}>
          <View style={styles.voiceContent}>
          <LinearGradient
              style={styles.voiceContentGradient}
              locations={[0, 1]}
              colors={['#5d6dbe', '#607aff']}
              useAngle={true}
              angle={155.81}
            />
            <Text style={styles.voiceContentTitle}>요청사항을 말씀해주세요</Text>
            <Text style={styles.voiceContentSubtitle}>자동으로 간호사에게 전달됩니다.</Text>
            <TouchableOpacity style={styles.voiceButton} onPress={() => navigation.navigate('Recode')}>
              <Text style={styles.voiceButtonText}>음성 요청하기</Text>
            </TouchableOpacity>
            <Image
              style={styles.voiceIcon}
              resizeMode="cover"
              source={require("../assets/images/home/Group759.png")}
            />
          </View>
          <View style={styles.AdContent}>
            {/* 안내 및 광고 콘텐츠 */}
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
  mainContent: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
  },
  leftContent: {
    borderRadius: 24,
    backgroundColor: "#eff1f9",
    flex: 3,
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContent: {
    flex: 5,
    marginHorizontal: 15,
  },
  voiceContent: {
    flex: 5,
    borderRadius: 24,
    backgroundColor: "#eff1f9",
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  AdContent: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: Color.disable,
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: Padding.p_7xs,
    marginTop: 10,
  },
  tabItem: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 15,
    backgroundColor: Color.white,
    borderRadius: 16,
    marginHorizontal: 2,
  },
  tabText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_base,
    color: Color.color,
    fontWeight: "600",
  },
  scrollViewContent: {
    padding: 24,
  },
  groupParent: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_lg,
    color: Color.black,
    fontWeight: "700",
    marginBottom: 16,
  },
  sectionContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: 119,
    height: 98,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "rgba(137, 137, 142, 0.16)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  cardIcon: {
    width: 44,
    height: 44,
    marginBottom: 8,
  },
  cardText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_smi,
    color: Color.text1,
    fontWeight: "600",
    textAlign: "center",
  },
  voiceContentGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  voiceContentTitle: {
    top: 278,
    fontSize: 40,
    letterSpacing: -1.2,
    lineHeight: 72,
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.pretendard,
    position: "absolute",
  },
  voiceContentSubtitle: {
    top: 352,
    fontSize: 20,
    letterSpacing: -0.6,
    lineHeight: 30,
    fontWeight: "500",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.pretendard,
    position: "absolute",
  },
  voiceButton: {
    top: 414,
    borderRadius: 100,
    backgroundColor: Color.black,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 44,
    paddingVertical: 14,
    position: "absolute",
  },
  voiceButtonText: {
    fontSize: 30,
    letterSpacing: -0.9,
    lineHeight: 40,
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.pretendard,
  },
  voiceIcon: {
    height: "28.04%",
    width: "44.17%",
    top: "19.38%",
    right: "27.91%",
    bottom: "52.58%",
    left: "27.92%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
});

export default Home;