import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/scale';

const getstyles = (colors: {
  firstcolor: string;
  secondcolor: string;
  thirdcolor: string;
  textcolor: string;
  background: string;
}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: scale(24),
      backgroundColor: colors.background,
    },
    title: {
      fontSize: scale(20),
      textAlign: 'center',
      marginBottom: scale(16),
      color:colors.textcolor,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.secondcolor,
      borderRadius: scale(8),
      paddingHorizontal: scale(16),
      paddingVertical: scale(12),
      fontSize: scale(18),
      textAlign: 'center',
      marginBottom: scale(12),
      color:colors.textcolor,
    },
  });

export {getstyles};
