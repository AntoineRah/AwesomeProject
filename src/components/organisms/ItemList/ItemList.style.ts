import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/scale';

const getstyles = (
  colors: {
    firstcolor: string;
    secondcolor: string;
    thirdcolor: string;
    textcolor: string;
    background: string;
  },
  topInset: number,
) =>
  StyleSheet.create({
    container: {
      marginTop: scale(10),
      color: colors.background,
      marginHorizontal: scale(10),
    },
    titlestyle: {
      color: colors.textcolor,
      fontSize: scale(34),
      fontWeight: 'bold',
    },
    header: {
      minHeight: scale(100),
      paddingTop: topInset,
      backgroundColor: colors.secondcolor,
      paddingHorizontal: scale(20),
      paddingBottom: scale(10),
    },
    searchbar: {
      height: scale(40),
      borderColor: colors.textcolor,
      borderWidth: 1,
      borderRadius: scale(8),
      paddingHorizontal: scale(10),
      paddingVertical: scale(8),
      marginBottom: scale(10),
      color: colors.textcolor,
      marginTop: scale(9),
    },
  });

export {getstyles};
