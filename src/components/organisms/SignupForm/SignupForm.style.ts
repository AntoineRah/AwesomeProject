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
      alignItems: 'center',
      paddingHorizontal: scale(30),
      backgroundColor: colors.background,
    },
    form: {
      width: '100%',
      maxWidth: scale(400),
    },
    title: {
      fontSize: scale(24),
      marginBottom: scale(28),
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: scale(80),
    },
  });

export {getstyles};
