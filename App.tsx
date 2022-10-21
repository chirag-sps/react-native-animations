import {SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import AppButton from './app/Components/AppButton';
import Popup from './app/Components/Popup';
import PopupTwo from './app/Components/PopupTwo';
import PopupThree from './app/Components/PopupThree';
import PopupFour from './app/Components/PopupFour';
import PopupFive from './app/Components/PopupFive';
import PopUpSix from './app/Components/PopupSix';
import SkaletonLoading from './app/Components/SkaletonComponent';

const App = () => {
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);
  const [isModalVisibleThree, setIsModalVisibleThree] = useState(false);
  const [isModalVisibleFour, setIsModalVisibleFour] = useState(false);
  const [isModalVisibleFive, setIsModalVisibleFive] = useState(false);
  const [isModalVisibleSix, setIsModalVisibleSix] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#9DA2AB',
        opacity: isModalVisibleSix ? 0.5 : 1,
      }}>
      <AppButton
        title="Animation 1"
        onpress={() => {
          setIsModalVisibleTwo(true);
        }}
      />
      <AppButton
        title="Animation 2"
        onpress={() => {
          setIsModalVisibleTwo(true);
        }}
      />
      <AppButton
        title="Animation 3"
        onpress={() => {
          setIsModalVisibleTwo(true);
          setZoomOut(true);
        }}
      />

      <AppButton
        title="Animation 4"
        onpress={() => {
          setIsModalVisibleThree(true);
        }}
      />
      <AppButton
        title="Animation 5"
        onpress={() => {
          setIsModalVisibleSix(true);
        }}
      />
      <AppButton
        title="Animation 6"
        onpress={() => {
          setIsModalVisibleFour(true);
        }}
      />

      <SkaletonLoading />
      <PopupTwo
        show={isModalVisibleTwo}
        onpress={setIsModalVisibleTwo}
        zoomOut={zoomOut}
      />

      <PopupThree show={isModalVisibleThree} onpress={setIsModalVisibleThree} />
      <PopupFour show={isModalVisibleFour} onpress={setIsModalVisibleFour} />
      <PopupFive show={isModalVisibleFive} onpress={setIsModalVisibleFive} />
      <PopUpSix show={isModalVisibleSix} onpress={setIsModalVisibleSix} />
    </SafeAreaView>
  );
};

export default App;
