import {StyleSheet} from 'react-native';

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
      padding: 24,
      backgroundColor: colors.background,
    },
    title: {fontSize: 20, textAlign: 'center', marginBottom: 16},
    input: {
      borderWidth: 1,
      borderColor: colors.secondcolor,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 12,
    },
  });

export {getstyles};
