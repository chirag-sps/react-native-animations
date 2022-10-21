import {
  View,
  Text,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from './style';
import Lottie from 'lottie-react-native';
import {spins} from '../../Constants/staticData';

interface Popup {
  show: boolean;
  onpress: any;
}

const PopupFour = (data: Popup) => {
  const {show, onpress} = data;
  const modelAnim = new Animated.Value(400);
  const closeAnim = new Animated.Value(0);

  const onCloseHandler = () => {
    Animated.spring(closeAnim, {
      toValue: 20,
      useNativeDriver: true,
    }).start();
    setTimeout(function () {
      onpress(false);
    }, 300);
  };

  const transformation = {
    transform: [
      {
        translateX: closeAnim,
      },
    ],
  };

  const trans = {
    transform: [
      {
        translateY: modelAnim,
      },
    ],
  };

  const modalAnimation = () => {
    Animated.timing(modelAnim, {
      toValue: 1.5,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    modalAnimation();
  }, [show]);

  return (
    <Modal visible={show}>
      <SafeAreaView style={[Styles.mainContainer]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={Styles.boxes}></View>
          <View style={Styles.boxes}></View>
          <View style={Styles.boxes}></View>
          <Animated.View
            style={[
              {
                marginBottom: 8,
              },
              transformation,
            ]}>
            <TouchableOpacity
              style={[
                Styles.button,
                {
                  backgroundColor: 'red',
                  height: 22,
                  width: 22,
                  borderRadius: 3,
                },
              ]}
              onPress={() => onCloseHandler()}>
              <Text style={[Styles.textStyle]}>X</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View style={[Styles.containerOne, trans]}>
          <Image
            style={{
              borderRadius: 13,
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: 'white',
              height: 100,
              width: 300,
              alignSelf: 'center',
            }}
            source={require('../../Images/bg.jpg')}
          />
          <Text style={{textAlign: 'center', marginTop: 10}}>
            --------------SPINS-----------------
          </Text>
          <FlatList
            data={spins}
            numColumns={3}
            renderItem={(item: any) => {
              return (
                <View
                  style={{
                    flex: 1,
                    borderColor: 'gold',
                    borderWidth: 3,
                    margin: 10,
                    borderRadius: 12,
                    height: 150,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'pink',
                        overflow: 'hidden',
                      }}>
                      <Text style={{textAlign: 'center'}}>
                        US$ {item.item.amount}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};

export default PopupFour;
