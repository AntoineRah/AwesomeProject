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
      gap: scale(10),
      padding: scale(10),
    },
    titlestyle: {
      color: colors.textcolor,
      fontSize: scale(24),
    },
    searchbar: {
      height: scale(40),
      borderColor: colors.firstcolor,
      borderWidth: 3,
      borderRadius: scale(8),
      paddingHorizontal: scale(10),
      paddingVertical:scale(8),
      marginBottom: scale(10),
      color: colors.textcolor,
      marginTop: scale(9),
    },
  });

export {getstyles};
