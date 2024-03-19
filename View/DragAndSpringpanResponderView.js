import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        Animated.event(
            [
                null,
                {   dx: pan.x, 
                    dy: pan.y 
                }
            ],{ useNativeDriver: false }
        )(event, gesture);
      },
      onPanResponderRelease: (event, gesture) => {
        pan.extractOffset();
        console.log('Dragged to:', { x: gesture.moveX, y: gesture.moveY });
      },
    }),
  ).current;
  console.log(pan);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default App;