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
      padding: 16,
      backgroundColor: colors.thirdcolor,
      justifyContent: 'center',
    },
    image: {
      height: 200,
      width: 200,
      borderRadius: 12,
      marginBottom: 16,
      alignSelf: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 12,
      color: colors.textcolor,
    },
    description: {
      fontSize: 16,
      color: '#666',
      lineHeight: 22,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
    },
    buttonText: {
      color: '#3251D0',
      marginLeft: 8,
      fontWeight: '600',
    },

    cartButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#38A169',
      padding: 12,
      borderRadius: 8,
      flex: 1,
      justifyContent: 'center',
    },
  });
export {getstyles};
