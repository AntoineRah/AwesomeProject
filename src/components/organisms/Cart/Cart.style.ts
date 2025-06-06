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
      backgroundColor: colors.background,
      padding: scale(5),
      gap: scale(50),
    },
    title: {
      fontSize: scale(24),
      fontWeight: 'bold',
      marginVertical: scale(12),
      marginHorizontal: scale(16),
      color: colors.textcolor,
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    deletebutton: {
      alignSelf: 'flex-end',
      width: scale(120),
      borderRadius: scale(10),
      height: scale(50),
      marginVertical: scale(5),
    },
  });
export {getstyles};
