import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginRight: 35,
    marginBottom: 10,
  },
  internalButton: {
    height: 25,
    width: 25,
    borderRadius: 30 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: '#ffff',
  },
  textStyle: {textAlign: 'center', color: '#ffff'},
  constainer: {
    height: '50%',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    margin: 40,
  },
  innerViewStyle: {
    width: 70,
    borderWidth: 5,
    borderColor: 'gold',
    borderRadius: 10,
    marginHorizontal: 0,
    backgroundColor: '#F15156',
  },
  text: {textAlign: 'center', color: 'green', marginTop: 10, fontWeight: '900'},
});
