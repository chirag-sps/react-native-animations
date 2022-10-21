import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');
const SkaletonLoading = () => {
  const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);
  const animatedValue = new Animated.Value(0);
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-1, width / 4],
  });
  return (
    <Animated.View style={[styles.linearGradient]}>
      <AnimatedLG
        colors={['#F15156', '#FFC07F', '#F15156']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          styles.linearGradient,
          {transform: [{translateX}], width: width / 2},
        ]}
      />
      <Text
        style={{
          alignSelf: 'center',
          position: 'absolute',
          color: 'white',
          fontWeight: '900',
        }}>
        SPIN
      </Text>
    </Animated.View>
  );
};

export default SkaletonLoading;
const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 50,
    backgroundColor: '#F15156',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
