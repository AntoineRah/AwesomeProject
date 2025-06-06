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
      justifyContent: 'space-between',
      height:scale(50),
      marginVertical:scale(5)
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
      flex: 3,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    changequantity: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between'
    },
    plusminus:{
      width:scale(20),
      height:scale(20),
      justifyContent:'center',
      alignItems:'center',
      borderRadius:scale(5)
    },

  });

export {getstyles};
