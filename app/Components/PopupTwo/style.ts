import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 80,
    marginBottom: 10,
  },
  container: {
    height: '40%',
    width: '60%',
    backgroundColor: '#D1FFC6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'red',
  },
  containerTwo: {
    alignItems: 'center',
  },
  internalButton: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: '#ffff',
  },
  textStyle: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 45,
    width: 45,
  },
});
