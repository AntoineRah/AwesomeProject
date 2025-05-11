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
      padding: scale(16),
      backgroundColor: colors.background,
      justifyContent: 'center',
    },
    image: {
      height: scale(200),
      width: scale(200),
      borderRadius: scale(12),
      marginBottom: scale(16),
      alignSelf: 'center',
    },
    title: {
      fontSize: scale(24),
      fontWeight: 'bold',
      marginBottom: scale(12),
      color: colors.textcolor,
    },
    description: {
      fontSize: scale(16),
      color: colors.textcolor,
      lineHeight: scale(22),
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: scale(10),
    },
    buttonText: {
      color: colors.textcolor,
      marginLeft: scale(8),
      fontWeight: '600',
    },
    cartButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: scale(12),
      borderRadius: scale(8),
      flex: 1,
      justifyContent: 'center',
    },
  });

export {getstyles};
