import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D1FFC6',
  },
  containerOne: {
    flex: 1,
  },
  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 18,
  },
  object: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
  },
  image: {
    height: 30,
    width: 30,
  },
  boxes: {
    height: 20,
    width: 80,
    borderWidth: 1,
    borderColor: 'red',
  },
});
