import React, { useRef } from 'react';
import { Animated, Image, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  const moveUp = () => {
    Animated.timing(translateYAnim, {
      toValue: -200, // Adjust the translation distance as needed
      duration: 2000,
    }).start();
  };

  const moveDown = () => {
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };

  const getBackgroundColor = () => {
    return fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(213, 121, 4, 1)', 'rgba(255, 192, 203, 1)'],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View // fade
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
      <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://random.imagecdn.app/500/150' }}
      />
      </Animated.View>
      <Animated.View // scale
        style={[
          styles.scalingContainer,
          {
            transform: [{ scale: fadeAnim }],
          },
        ]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://random.imagecdn.app/500/150' }}
        />
      </Animated.View>
      <Animated.View // color
        style={[
          styles.fadingContainer,
          {
            backgroundColor: getBackgroundColor(),
          },
        ]}>
        <View style={styles.innerContainer}>
          Hello
        </View>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In Image" onPress={fadeIn} />
        <Button title="Fade Out Image" onPress={fadeOut} />
      </View>
      <Animated.View //moving bot or top
        style={[
          styles.movingContainer,
          {
            transform: [{ translateY: translateYAnim }],
          },
        ]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://random.imagecdn.app/500/150' }}
        />
      </Animated.View>
      <Animated.View //moving left or right
        style={[
          styles.movingContainer,
          {
            transform: [{ translateX: translateYAnim }],
          },
        ]}>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://random.imagecdn.app/500/150' }}
        />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Move Up / Left" onPress={moveUp} />
        <Button title="Move Down / Right" onPress={moveDown} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  innerContainer: {
    width: 100,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default App;