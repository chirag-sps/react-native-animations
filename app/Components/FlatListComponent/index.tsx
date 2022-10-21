import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from './style';

interface listComponent {
  item: any;
  index: number;
}

const FlatListComponent = (data: listComponent) => {
  const {item, index} = data;
  return (
    <View style={{marginHorizontal: 5, marginTop: 5}}>
      <Image style={Styles.imageStyle} source={item.imgUrl} />
    </View>
  );
};

export default FlatListComponent;
