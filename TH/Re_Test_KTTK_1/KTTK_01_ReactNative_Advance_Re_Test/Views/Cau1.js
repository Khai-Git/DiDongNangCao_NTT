import React, { useRef } from 'react';
import { Animated, Image, View, StyleSheet, Button, SafeAreaView } from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <View style={styles.innerContainer}>
          Hello 1
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <View style={styles.innerContainer}>
          Hello 2
        </View>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Show" onPress={fadeIn}/>
        <Button title="Hide" onPress={fadeOut}/>
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