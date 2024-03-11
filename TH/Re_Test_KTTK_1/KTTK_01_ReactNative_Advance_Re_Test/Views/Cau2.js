import React, { useRef } from 'react';
import { Animated, Image, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const translateYAnim = useRef(new Animated.Value(0)).current;

  const moveUp = () => {
    Animated.timing(translateYAnim, {
      toValue: -200,
      duration: 2000,
    }).start();
  };

  const stop = () => {
    translateYAnim.stopAnimation(value => {translateYAnim.setValue(value);});
  };

  const moveDown = () => {
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.movingContainer,
          {
            transform: [{ translateY: translateYAnim }],
          },
        ]}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../demo/ball.png")}
        />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Start" onPress={moveUp}/>
        <Button title="Stop" onPress={stop}/>
        <Button title="Restart" onPress={moveDown}/>
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