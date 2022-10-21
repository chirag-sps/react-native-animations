import {View, Text, Modal, TouchableOpacity, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './style';
import {images} from '../../Constants/staticData';

interface Popup {
  show: boolean;
  onpress: any;
}

const PopupFive = (data: Popup) => {
  const {show, onpress} = data;

  const faddIn = () => {
    onpress(false);
  };

  const arr: any = [];
  for (var i = 0; i < 50; i++) {
    arr.push(i);
  }
  const animatedValue: any = [];
  arr.forEach((value: any) => {
    animatedValue[value] = new Animated.Value(0);
  });

  useEffect(() => {
    const animations = arr.map((item: any) => {
      return Animated.timing(animatedValue[item], {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      });
    });
    Animated.sequence(animations).start();
  }, [show]);

  const animations = arr.map((a: any, i: any) => {
    return (
      <Animated.View
        key={i}
        style={{
          opacity: animatedValue[a],
          height: 20,
          width: 20,
          borderRadius: 20 / 2,
          backgroundColor: 'red',
          borderWidth: 1,
          borderColor: 'white',
          marginLeft: 5,
          marginTop: 3,
        }}
      />
    );
  });

  return (
    <Modal visible={show} transparent={true}>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <View style={[Styles.button]}>
          <TouchableOpacity
            style={Styles.internalButton}
            onPress={() => faddIn()}>
            <Text style={Styles.textStyle}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.constainer}>{animations}</View>
      </View>
    </Modal>
  );
};

export default PopupFive;
