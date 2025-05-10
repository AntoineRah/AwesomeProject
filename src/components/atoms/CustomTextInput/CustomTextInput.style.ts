import {StyleSheet} from 'react-native';

const getCustomTextInput = (colors: {
  firstcolor: string;
  secondcolor: string;
  thirdcolor: string;
  textcolor: string;
  background: string;
}) =>
  StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginBottom: 16,
      fontSize: 16,
      backgroundColor: colors.background,
      height: 60,
    },
  });

export {getCustomTextInput};
