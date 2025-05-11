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
      flexDirection: 'row',
      borderRadius: 30,
      backgroundColor: colors.thirdcolor,
      padding: 5,
      gap: 50,
      borderWidth: 2,
      borderColor: colors.secondcolor,
    },
    imagestyle: {
      width: 100,
      height: 100,
      borderRadius: 30,
    },
    fontstyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    pricestyle: {
      fontSize: 14,
      color: 'gray',
    },
    textcontainer: {
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
export {getstyles};
