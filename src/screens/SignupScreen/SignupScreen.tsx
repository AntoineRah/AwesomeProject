import React from 'react';
import {SignupForm} from '../../components/organisms/SignupForm';
import {useTheme} from '../../hooks/theme';
import {getstyles} from './SignupScreen.style';
import {View} from 'react-native';

const SignupScreen = () => {
  const {colors} = useTheme();
  const styles = getstyles(colors);
  return (
    <View style={styles.container}>
      <SignupForm />
    </View>
  );
};

export {SignupScreen};
