import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';

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
      backgroundColor: colors.background,
      justifyContent: 'space-between',
      paddingVertical: scale(60),
      paddingHorizontal: scale(24),
    },
  });

export {getstyles};
