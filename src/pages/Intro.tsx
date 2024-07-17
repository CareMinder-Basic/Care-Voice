import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from "../styles/GlobalStyles";

const { width: viewportWidth } = Dimensions.get('window');

interface ImageItem {
  key: string;
  source: number;
}

const images: ImageItem[] = [
  { key: '1', source: require('../assets/images/cv_intro_1.png') },
  { key: '2', source: require('../assets/images/cv_intro_2.png') },
  { key: '3', source: require('../assets/images/cv_intro_3.png') },
  { key: '4', source: require('../assets/images/cv_intro_4.png') },
  { key: '5', source: require('../assets/images/cv_intro_5.png') },
  { key: '6', source: require('../assets/images/cv_intro_6.png') },
];

const Intro = () => {
  const flatListRef = useRef<FlatList<ImageItem> | null>(null);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= images.length) {
          clearInterval(timer);
          return prevIndex;
        }
        flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const renderItem = ({ item }: { item: ImageItem }) => (
    <View style={styles.slide}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
      />
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('PatiLogin')}>
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: viewportWidth,
  },
  image: {
    width: viewportWidth,
    height: viewportWidth * 0.75,
    resizeMode: 'contain',
  },
  nextButton: {
    position: 'absolute',
    top: 20, // 상단으로부터의 거리
    right: 20, // 오른쪽으로부터의 거리
    backgroundColor: Color.main1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  nextButtonText: {
    color: Color.white,
    fontFamily: FontFamily.pretendard,
    fontSize: FontSize.size_lg,
  },
});

export default Intro;