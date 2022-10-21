import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Styles} from './styles';
import Lottie from 'lottie-react-native';
interface popup {
  show: boolean;
  onpress: any;
}

const PopupThree = (data: popup) => {
  const {show, onpress} = data;
  const titleAnim = new Animated.Value(-100);
  const an = new Animated.Value(0);
  const anim = new Animated.Value(5);
  const animTwo = new Animated.Value(5);
  const animThree = new Animated.Value(5);
  const animFour = new Animated.Value(5);
  const animFive = new Animated.Value(5);
  const animSix = new Animated.Value(5);
  const animSeven = new Animated.Value(5);
  const animEight = new Animated.Value(5);
  const animNine = new Animated.Value(5);
  const scaleing = an.interpolate({inputRange: [0, 1], outputRange: [1, 0.8]});
  const rotateModalValue = new Animated.Value(0);

  const trans = {
    transform: [
      {
        translateY: titleAnim,
      },
    ],
  };

  const imagePoping = () => {
    Animated.spring(anim, {
      toValue: -2,
      friction: 3,
      useNativeDriver: true,
    }).start();

    Animated.spring(animTwo, {
      toValue: -2,
      delay: 300,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animThree, {
      toValue: -2,
      delay: 400,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animFour, {
      toValue: -2,
      delay: 550,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animFive, {
      toValue: -2,
      delay: 650,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animSix, {
      toValue: -2,
      delay: 750,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animSeven, {
      toValue: -2,
      delay: 850,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animEight, {
      toValue: -2,
      delay: 950,
      friction: 3,
      useNativeDriver: true,
    }).start();
    Animated.spring(animNine, {
      toValue: -2,
      delay: 1150,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleTwo = animTwo.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleThree = animThree.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const scaleFour = animFour.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleFive = animFive.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleSix = animSix.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const scaleSeven = animSeven.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleEight = animEight.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const scaleNine = animNine.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const titleAnimation = () => {
    Animated.spring(titleAnim, {
      toValue: 1.5,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const inOutAnimation = (Value: number, frictionValue: boolean) => {
    Animated.spring(an, {
      toValue: Value,
      friction: frictionValue ? 4 : 7,
      useNativeDriver: true,
    }).start();
  };

  const onCloseHandler = () => {
    inOutAnimation(5, false);
    setTimeout(function () {
      onpress(false);
    }, 500);
  };
  useEffect(() => {
    setTimeout(function () {
      titleAnimation();
      imagePoping();
    }, 1100);
    // inOutAnimation(-0.5, true);
  }, [show]);
  return (
    <Modal visible={show} transparent={true}>
      <Animated.View style={[Styles.mainContainer]}>
        <Animated.View style={[Styles.button, {...Styles.shadow}]}>
          <TouchableOpacity
            style={[Styles.internalButton]}
            onPress={() => onCloseHandler()}>
            <Text style={Styles.textStyle}>X</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={[Styles.constainer, {...Styles.shadow}]}>
          <Animated.Text style={[Styles.title, trans]}>Cartoon</Animated.Text>
          <View
            style={[
              Styles.divider,
              {
                alignSelf: 'center',
                width: 100,
                marginTop: 10,
              },
            ]}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 40,
            }}>
            <View style={{alignItems: 'center'}}>
              <Animated.Image
                source={require('../../Images/picachu.png')}
                style={[Styles.imageStyle, {transform: [{scale}]}]}
              />
              <View style={Styles.divider} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Animated.Image
                source={require('../../Images/lion.png')}
                style={[Styles.imageStyle, {transform: [{scale: scaleTwo}]}]}
              />
              <View style={Styles.divider} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Animated.Image
                source={require('../../Images/bear.png')}
                style={[Styles.imageStyle, {transform: [{scale: scaleThree}]}]}
              />
              <View style={Styles.divider} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 40,
            }}>
            <View style={{alignItems: 'center'}}>
              <Animated.Image
                source={require('../../Images/lion_s.png')}
                style={[Styles.imageStyle, {transform: [{scale: scaleFour}]}]}
              />
              <View style={Styles.divider} />
            </View>

            <View style={{alignItems: 'center'}}>
              <Animated.Image
                source={require('../../Images/lion.png')}
                style={[Styles.imageStyle, {transform: [{scale: scaleFive}]}]}
              />
              <View style={Styles.divider} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Animated.Image
                source={require('../../Images/bear.png')}
                style={[Styles.imageStyle, {transform: [{scale: scaleSix}]}]}
              />
              <View style={Styles.divider} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 40,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Animated.View
                style={[
                  {alignItems: 'center'},
                  {transform: [{scale: scaleSeven}]},
                ]}>
                <Lottie
                  style={{height: 60, width: 100}}
                  source={require('../../Images/treasure-box.json')}
                  autoPlay
                />
              </Animated.View>
              <View style={Styles.divider} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Animated.View
                style={[
                  {alignItems: 'center'},
                  {transform: [{scale: scaleEight}]},
                ]}>
                <Lottie
                  style={{height: 60, width: 100}}
                  source={require('../../Images/boxLoading.json')}
                  autoPlay
                />
              </Animated.View>
              <View style={Styles.divider} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Animated.View
                style={[
                  {alignItems: 'center'},
                  {transform: [{scale: scaleNine}]},
                ]}>
                <Lottie
                  style={{height: 60, width: 100}}
                  source={require('../../Images/treasuryBox.json')}
                  autoPlay
                />
              </Animated.View>
              <View style={Styles.divider} />
            </View>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default PopupThree;
