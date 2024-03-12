import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const wiggleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 3000 }),
        Animated.timing(fadeAnim, { toValue: 0, duration: 3000 }),
      ]),
    ).start();
  };

  const wiggleAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, { toValue: 100, duration: 1000, useNativeDriver: false }),
        Animated.timing(wiggleAnim, { toValue: -100, duration: 1000, useNativeDriver: false }),
        Animated.timing(wiggleAnim, { toValue: 0, duration: 1000, useNativeDriver: false }),
      ]),
    ).start();
  };

  useEffect(() => {
    wiggleAnimation();
    fadeAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.absoluteImage,
          {
            transform: [{ translateY: wiggleAnim }],
            opacity: fadeAnim,
          },
        ]}>
        <Image
          style={{ width: 100, height: 100}}
          source={require("../Lab_04_05_06_Animation/Pic/bongbong.jpg")}
        />
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