import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {LogInFormData, schema} from './LoginForm.type';
import {CustomTextInput} from '../../atoms/CustomTextInput';
import {Error} from '../../atoms/Error';
import {CustomPress} from '../../atoms/CustomPress/CustomPress';
import {getstyles} from './LoginForm.style';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from './LoginForm.type';
import {fonts} from '../../../globalSyles/fontTheme';
import {useTheme} from '../../../hooks/theme';
import {useMutation} from '@tanstack/react-query';
import {login} from '../../../api/auth';
import {useAuthStore} from '../../../hooks/authentication/AuthStore';

const LoginForm = () => {
  const {setTokens} = useAuthStore();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const {colors} = useTheme();
  const styles = getstyles(colors);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LogInFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: ({email, password}: LogInFormData) =>
      login(email, password, '1y'),
    onSuccess: data => {
      if (data.success) {
        const {accessToken, refreshToken} = data.data;
        setTokens(accessToken, refreshToken, '1y');
      } else {
        Alert.alert('Login Failed', 'Unexpected error');
      }
    },

    onError: (error: any) => {
      console.log(error);
      // Alert.alert(
      //   'Login Failed',
      //   error,
      // );
    },
  });

  const onSubmit = (data: LogInFormData) => {
    mutate(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={[styles.title, fonts.heading]}>Log In</Text>

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <CustomTextInput
              placeholder="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Error message={errors.email.message} />}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <CustomTextInput
              placeholder="Password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(prev => !prev)}>
              <Text style={[styles.showpassword, fonts.small]}>
                {showPassword ? 'Hide Password' : 'Show Password'}
              </Text>
            </Pressable>
            {errors.password && <Error message={errors.password.message} />}
          </View>
        )}
      />

      <CustomPress
        onPress={handleSubmit(onSubmit)}
        text={isPending ? 'Logging in...' : 'Log In'}
        disabled={isPending}
      />

      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={[styles.link, fonts.small]}>
          Don't have an account? Sign Up
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export {LoginForm};
