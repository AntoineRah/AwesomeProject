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
      flexDirection: 'row',
      borderRadius: scale(10),
      backgroundColor: colors.secondcolor,
      padding: scale(5),
      gap: scale(50),
      borderWidth: scale(2),
      borderColor: colors.secondcolor,
    },
    imagestyle: {
      width: scale(100),
      height: scale(100),
      borderRadius: scale(20),
    },
    fontstyle: {
      fontSize: scale(16),
      fontWeight: 'bold',
      color: colors.textcolor,
    },
    pricestyle: {
      fontSize: scale(14),
      color: colors.textcolor,
    },
    textcontainer: {
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });

export {getstyles};
