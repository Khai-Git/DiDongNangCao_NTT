import React, { useRef, useEffect  } from 'react';
import { Animated, Image, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const wiggleAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  const colorAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, { toValue: 1, duration: 500}),
        Animated.timing(colorAnim, { toValue: 0, duration: 500}),
      ]),
    ).start();
  };

  const fadeAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 3000}),
        Animated.timing(fadeAnim, { toValue: 0, duration: 3000}),
      ]),
    ).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  const wiggleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, { toValue: 10, duration: 1000}),
        Animated.timing(wiggleAnim, { toValue: -10, duration: 1000}),
        Animated.timing(wiggleAnim, { toValue: 0, duration: 1000}),
      ]),
    ).start();
  };

  const spinAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        })
      ]),
    ).start();
  };

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const textColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'green'],
  });

  useEffect(() => {
    wiggleAnimation();
    spinAnimation();
    fadeAnimation();
    colorAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
            styles.absoluteImage,
            {
              transform: [{ translateX: wiggleAnim }],
            },
          ]}>
        <Image
          style={{ width: 50, height: 50, position: 'absolute', top: -50, left: 80, }}
          source={require("../demo/Khoa_Sol.jpg")}
        />
      </Animated.View>
      <Animated.View
        style={[
            styles.absoluteImage,
            {
              transform: [{ translateX: spinAnim }, { rotate: spin }],
            },
          ]}>
        <Image
          style={{ width: 150, height: 150 }}
          source={require("../demo/Dia_Nhac_Than.png")}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
            alignItems: 'center',
          },
        ]}>
        <Animated.Text style={[{ color: textColor, fontSize: 30 }]}>
          CallMeMaybe
        </Animated.Text>
        <Animated.Text style={[{ color: textColor, fontSize: 30 }]}>
          Lalala
        </Animated.Text>
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