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
      alignItems: 'center',
      backgroundColor: colors.background,
      paddingHorizontal: 30,
    },
    form: {
      width: '100%',
      maxWidth: 400,
    },
    title: {
      fontSize: 24,
      marginBottom: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      height: 30,
      marginTop: 80,
    },
  });

export {getstyles};
