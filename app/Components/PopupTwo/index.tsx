import {
  View,
  Modal,
  Animated,
  TouchableOpacity,
  Text,
  Easing,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Styles} from './style';
import {images} from '../../Constants/staticData';
import FlatListComponent from '../FlatListComponent';
interface popup {
  show: boolean;
  onpress: any;
  zoomOut?: boolean;
}

const PopupTwo = (data: popup) => {
  const {show, onpress, zoomOut} = data;
  const an = new Animated.Value(0);
  const scale = an.interpolate({inputRange: [0, 1], outputRange: [1, 0.8]});

  useEffect(() => {
    inOutAnimation(-2, true);
  }, [show]);

  const faddIn = () => {
    if (zoomOut == true) {
      inOutAnimation(5, false);
      setTimeout(function () {
        onpress(false);
      }, 500);
    } else {
      onpress(false);
    }
  };

  const inOutAnimation = (Value: number, frictionValue: boolean) => {
    Animated.spring(an, {
      toValue: Value,
      friction: frictionValue ? 4 : 7,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal transparent={true} visible={show}>
      <Animated.View style={[Styles.mainContainer, {transform: [{scale}]}]}>
        <View style={[Styles.button]}>
          <TouchableOpacity
            style={Styles.internalButton}
            onPress={() => faddIn()}>
            <Text style={Styles.textStyle}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.container, {overflow: 'hidden'}]}>
          <Image
            source={require('../../Images/wall_three.jpeg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </Animated.View>
    </Modal>
  );
};

export default PopupTwo;
