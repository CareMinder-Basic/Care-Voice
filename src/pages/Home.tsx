import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, FontFamily, Padding, Border, Color } from "../styles/GlobalStyles";

const Home = () => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/images/home/ajou_logo.png")} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>아주대학교병원</Text>
          <Text style={styles.subHeaderText}>Ajou University Hospital</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.sideMenu}>
          <Image style={styles.sideMenuIcon} source={require("../assets/images/home/home.png")} />
          <Text style={styles.sideMenuText}>홈</Text>
          <Image style={styles.sideMenuIcon} source={require("../assets/images/home/request.png")} />
          <Text style={styles.sideMenuText}>요청 내역</Text>
          <Image style={styles.sideMenuIcon} source={require("../assets/images/home/mypage.png")} />
          <Text style={styles.sideMenuText}>마이페이지</Text>
          <Image style={styles.sideMenuIcon} source={require("../assets/images/home/settings.png")} />
          <Text style={styles.sideMenuText}>설정</Text>
        </View>

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

      <View style={styles.footer}>
        <Image style={styles.footerIcon} source={require("../assets/images/home/info.png")} />
        <Text style={styles.footerText}>사용방법</Text>
        <Image style={styles.alertIcon} source={require("../assets/images/home/alert.png")} />
        <Text style={styles.alertText}>
             현재 응급환자가 몰려 지연이 발생하고 있습니다. 환자분들의 시급함을 충분히 인지하고 있으나 응급실이라는 특성상 우선순위에 맞추어 진료중이오니 현재 응급환자가 몰려 지연이 발생하고 있습니다.
        </Text>
            

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: Color.white,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  headerText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.main1,
  },
  subHeaderText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.main1,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  sideMenu: {
    width: 100,
    backgroundColor: Color.white,
    borderRightWidth: 1,
    borderRightColor: Color.disable,
    alignItems: "center",
    paddingVertical: 20,
  },
  sideMenuIcon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  sideMenuText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    color: Color.disable,
    textAlign: "center",
    marginBottom: 20,
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  statusItem: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_106xl,
    marginLeft: 15,
  },
  waiting: {
    backgroundColor: "rgba(48, 180, 255, 0.1)",
  },
  inProgress: {
    backgroundColor: "rgba(242, 70, 121, 0.1)",
  },
  completed: {
    backgroundColor: Color.background1,
  },
  statusText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.5,
    color: Color.text1,
  },
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    padding: 16,
    shadowColor: "rgba(137, 137, 142, 0.16)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  alertText: {
    flex: 1,
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.text1,
    textAlign: "left",
    marginRight: 8,
  },
  alertIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Color.disable,
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  footerText: {
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    color: Color.disable,
  },
});

export default Home;