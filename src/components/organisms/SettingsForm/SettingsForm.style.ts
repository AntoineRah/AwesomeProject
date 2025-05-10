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
      backgroundColor: colors.background,
      justifyContent: 'space-between',
      paddingVertical: 60,
      paddingHorizontal: 24,
    },
    profileSection: {
      alignItems: 'center',
      marginTop: 60,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 20,
      backgroundColor: 'gray',
    },
    username: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    logoutButton: {
      backgroundColor: '#210F37',
      paddingVertical: 14,
      borderRadius: 12,
      alignItems: 'center',
    },
    logoutText: {
      color: colors.textcolor,
      fontSize: 16,
      fontWeight: '600',
    },
    toggleThemeText: {
      marginTop: 12,
      color: '#3251D0',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export {getstyles};
