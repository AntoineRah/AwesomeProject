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
      padding: scale(20),
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    title: {
      fontSize: scale(24),
      marginBottom: scale(16),
      textAlign: 'center',
      fontWeight: 'bold',
      color:colors.textcolor,
    },
    label: {
      marginTop: scale(12),
      fontSize: scale(16),
      fontWeight: '600',
      height: scale(500),
    },
    link: {
      marginTop: scale(16),
      textAlign: 'center',
      color: '#3251D0',
    },
    showpassword: {
      color: '#3251D0',
      marginBottom: scale(10),
    },
  });
export {getstyles};
