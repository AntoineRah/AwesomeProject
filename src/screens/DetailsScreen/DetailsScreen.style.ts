import {StyleSheet, Dimensions} from 'react-native';
import {scale} from '../../utils/scale';

const {width} = Dimensions.get('window');

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
      paddingBottom: scale(20),
    },
    layer: {
      backgroundColor: colors.background,
    },
    carousel: {
      width: '100%',
      height: scale(250),
    },
    image: {
      width: width,
      height: scale(250),
    },
    title: {
      fontSize: scale(24),
      fontWeight: 'bold',
      marginVertical: scale(12),
      marginHorizontal: scale(16),
      color: colors.textcolor,
    },
    description: {
      fontSize: scale(14),
      color: colors.textcolor,
      lineHeight: scale(20),
      marginHorizontal: scale(16),
      marginBottom: scale(24),
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: scale(16),
      marginTop: scale(12),
    },
    button: {
      backgroundColor: colors.secondcolor,
      paddingVertical: scale(10),
      paddingHorizontal: scale(20),
      borderRadius: scale(8),
      flex: 1,
      marginHorizontal: scale(4),
      alignItems: 'center',
    },
    buttonText: {
      color: colors.textcolor,
      fontWeight: '600',
    },
  });

export {getstyles};
