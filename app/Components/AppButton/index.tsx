import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './style';

interface button {
  title: String;
  onpress: any;
  style?: any;
}

const AppButton = (data: button) => {
  const {title, onpress, style} = data;

  return (
    <View style={[Styles.container, style]}>
      <TouchableOpacity style={Styles.buttonContaine} onPress={onpress}>
        <Text style={Styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
