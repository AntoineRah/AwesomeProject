import {StyleSheet} from 'react-native';

const pressableStyle = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    height:60,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const getPressableStyle = (pressed: boolean) => [
  {
    backgroundColor: pressed ? '#3251D0' : '#263D9C',
  },
  pressableStyle.button,
];

export {pressableStyle, getPressableStyle};
