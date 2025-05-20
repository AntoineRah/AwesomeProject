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
      justifyContent: 'space-between',
      paddingVertical: scale(60),
      paddingHorizontal: scale(24),
    },
    profileSection: {
      alignItems: 'center',
      marginTop: scale(60),
    },
    avatar: {
      width: scale(120),
      height: scale(120),
      borderRadius: scale(60),
      marginBottom: scale(20),
      backgroundColor: colors.secondcolor,
    },
    username: {
      fontSize: scale(24),
      fontWeight: 'bold',
      color: colors.textcolor,
    },
    logoutButton: {
      backgroundColor: '#210F37',
      paddingVertical: scale(14),
      borderRadius: scale(12),
      alignItems: 'center',
    },
    logoutText: {
      color: colors.textcolor,
      fontSize: scale(16),
      fontWeight: '600',
    },
    toggleThemeText: {
      marginTop: scale(12),
      color: colors.textcolor,
      fontSize: scale(16),
      fontWeight: '600',
    },
  });

export {getstyles};
