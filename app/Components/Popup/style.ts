import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginRight: 35,
    marginBottom: 10,
  },
  constainer: {
    height: '60%',
    width: '80%',
    backgroundColor: '#D1FFC6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'red',
  },
  containerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  internalButton: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: '#ffff',
  },
  textStyle: {textAlign: 'center', color: '#ffff'},
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 25,
    color: 'black',
  },
  imageStyle: {height: 45, width: 45},
});
