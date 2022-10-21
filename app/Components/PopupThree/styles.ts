import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginRight: 35,
    marginBottom: 10,
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
  constainer: {
    height: '60%',
    width: '80%',
    backgroundColor: '#D1FFC6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 25,
    color: 'red',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  divider: {
    borderWidth: 1,
    borderColor: 'red',
    width: 90,
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#6F1A07',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
  shadow: {
    shadowColor: '#8b0000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
