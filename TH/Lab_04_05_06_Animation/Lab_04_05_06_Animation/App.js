import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const colorAnim = useRef(new Animated.Value(0)).current;
  const wiggleAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const scalePictureAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;

  const colorAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(colorAnim, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ]),
    ).start();
  };

  const wiggleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, { toValue: -150, duration: 1000, useNativeDriver: true }),
        Animated.timing(wiggleAnim, { toValue: 150, duration: 1000, useNativeDriver: true }),
        Animated.timing(wiggleAnim, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ]),
    ).start();
  };

  const scaleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: -1, duration: 3000, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 0, duration: 3000, useNativeDriver: true })
      ]),
    ).start();
  };

  const scalePictureAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scalePictureAnim, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(scalePictureAnim, { toValue: -1, duration: 3000, useNativeDriver: true }),
        Animated.timing(scalePictureAnim, { toValue: 0, duration: 3000, useNativeDriver: true })
      ]),
    ).start();
  };

  const spinAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinAnim, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(spinAnim, { toValue: -1, duration: 3000, useNativeDriver: true }),
        Animated.timing(spinAnim, { toValue: 1, duration: 3000, useNativeDriver: true })
      ]),
    ).start();
  };

  const scale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 40],
  });

  const scalePicture = scalePictureAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const textColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'green'],
  });

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  useEffect(() => {
    wiggleAnimation();
    scaleAnimation();
    scalePictureAnimation();
    colorAnimation();
    spinAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.absoluteImage,
          {
            transform: [{ 
              translateX: wiggleAnim,
            },
            {rotate: spin}],
          },
        ]}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../Lab_04_05_06_Animation/Pic/Shipper.png")}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            alignItems: 'center',
          },
        ]}>
        <Animated.Text style={[{ color: textColor, fontSize: scale }]}>
          Shopee cái gì cũng có ...
        </Animated.Text>
      </Animated.View>
      <Animated.View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[
            styles.absoluteImage,
            {transform: [{scale: scalePicture}],}
          ]}>
          <Image
            style={[{ 
              width: 100,
              height: 100,
            }]}
            source={require("../Lab_04_05_06_Animation/Pic/MyTom.png")}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.absoluteImage,
            {transform: [{scale: scalePicture}],}
          ]}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../Lab_04_05_06_Animation/Pic/Coca.png")}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.absoluteImage,
            {transform: [{scale: scalePicture}],}
          ]}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../Lab_04_05_06_Animation/Pic/Snack.png")}
          />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: 100,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  sol: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default App;