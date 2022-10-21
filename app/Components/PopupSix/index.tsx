import {View, Text, Modal, Animated, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from './style';

interface Popup {
  show: boolean;
  onpress: any;
}
const PopUpSix = (data: Popup) => {
  const {show, onpress} = data;
  const anim = new Animated.Value(0);
  const imageAnim = new Animated.Value(0);
  const viewAnim = new Animated.Value(0);
  useEffect(() => {
    inOutAnimation(-2, true);
  }, [show]);

  const scale = anim.interpolate({inputRange: [0, 1], outputRange: [1, 0.8]});
  const scaleImage = imageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const viewScale = viewAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  const inOutAnimation = (Value: number, frictionValue: boolean) => {
    Animated.spring(imageAnim, {
      toValue: Value,
      friction: frictionValue ? 4 : 7,
      useNativeDriver: true,
    }).start();
    Animated.spring(anim, {
      toValue: Value,
      friction: frictionValue ? 4 : 7,
      delay: 200,
      useNativeDriver: true,
    }).start();
    Animated.spring(viewAnim, {
      toValue: Value,
      friction: frictionValue ? 2 : 7,
      delay: 400,
      useNativeDriver: true,
    }).start();
  };

  const onCloseHandler = () => {
    inOutAnimation(5, false);
    setTimeout(function () {
      onpress(false);
    }, 800);
  };

  return (
    <Modal visible={show} transparent={true}>
      <View
        style={[
          {
            flex: 1,
          },
        ]}>
        <View style={{marginTop: 60, alignItems: 'center'}}>
          <Animated.View style={[Styles.button, {transform: [{scale}]}]}>
            <TouchableOpacity
              style={Styles.internalButton}
              onPress={() => {
                onCloseHandler();
              }}>
              <Text style={Styles.textStyle}>X</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Image
            source={require('../../Images/jungle.jpeg')}
            style={{
              height: 90,
              width: 90,
              borderRadius: 10,
              marginBottom: 30,
              transform: [{scale: scaleImage}],
            }}
          />
        </View>

        <Animated.View
          style={[Styles.constainer, {transform: [{scale: viewScale}]}]}>
          <View style={Styles.innerViewStyle}></View>
          <View style={Styles.innerViewStyle}></View>
          <View style={Styles.innerViewStyle}></View>
        </Animated.View>
        <Text style={Styles.text}>*You Can Purchase Only one pack</Text>
      </View>
    </Modal>
  );
};

export default PopUpSix;
