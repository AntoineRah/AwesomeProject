import {StyleSheet} from 'react-native';

const getPressableStyle = (colors: {
  firstcolor: string;
  secondcolor: string;
  thirdcolor: string;
  textcolor: string;
  background: string;
}) =>
  StyleSheet.create({
    button: {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      paddingHorizontal: 24,
      height: 60,
    },
    text: {
      color: colors.textcolor,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

const getPressedStyle = (
  pressed: boolean,
  colors: {
    firstcolor: string;
    secondcolor: string;
    thirdcolor: string;
    textcolor: string;
    background: string;
  },
) => [
  {
    backgroundColor: pressed ? '#096B68' : '#90C67C',
  },
  getPressableStyle(colors).button,
];

export {getPressedStyle, getPressableStyle};
