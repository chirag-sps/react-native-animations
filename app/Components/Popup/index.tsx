import {
  View,
  Modal,
  Animated,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './style';

interface popup {
  show: boolean;
  onpress: any;
  anim: number | string;
}

const Popup = (data: popup) => {
  const {show, onpress, anim} = data;
  const animation = new Animated.Value(1);
  const an = new Animated.Value(0);
  const titleAnim = new Animated.Value(-100);

  React.useEffect(() => {
    bounceImages();
    titleAnimation();
  }, [show]);

  const bounceImages = () => {
    Animated.loop(
      Animated.spring(animation, {
        toValue: 1.3,
        friction: 1,
        useNativeDriver: true,
      }),
    ).start();
  };

  const titleAnimation = () => {
    Animated.spring(titleAnim, {
      toValue: 1.5,
      useNativeDriver: true,
    }).start();
  };

  const trans = {
    transform: [
      {
        translateY: titleAnim,
      },
    ],
  };

  const faddIn = () => {
    Animated.spring(an, {
      toValue: 4.5,
      useNativeDriver: true,
    }).start();
    setTimeout(function () {
      onpress(false);
    }, 500);
  };

  const scale = an.interpolate({inputRange: [0, 1], outputRange: [1, 0.8]});

  const animationStyles = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ],
  };

  return (
    <Modal
      transparent={true}
      visible={show}
      animationType={anim == 0 ? 'fade' : 'slide'}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Animated.View style={[Styles.button, {transform: [{scale}]}]}>
          <TouchableOpacity
            style={Styles.internalButton}
            onPress={() => faddIn()}>
            <Text style={Styles.textStyle}>X</Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={Styles.constainer}>
          <Animated.Text style={[Styles.title, trans]}>
            Hello Animation
          </Animated.Text>
          <View style={Styles.containerTwo}>
            <Animated.View style={animationStyles}>
              <Image
                source={require('../../Images/lion.png')}
                style={Styles.imageStyle}
              />
            </Animated.View>
            <Animated.View style={animationStyles}>
              <Image
                source={require('../../Images/bear.png')}
                style={Styles.imageStyle}
              />
            </Animated.View>
            <Animated.View style={animationStyles}>
              <Image
                source={require('../../Images/picachu.png')}
                style={Styles.imageStyle}
              />
            </Animated.View>
            <Animated.View style={animationStyles}>
              <Image
                source={require('../../Images/lion_s.png')}
                style={Styles.imageStyle}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
