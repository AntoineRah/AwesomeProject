import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/scale';

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
      borderRadius: scale(8),
      paddingHorizontal: scale(12),
      paddingVertical: scale(10),
      marginBottom: scale(16),
      fontSize: scale(16),
      backgroundColor: colors.firstcolor,
      height: scale(60),
      color:colors.textcolor,
    },
  });

export { getCustomTextInput };
