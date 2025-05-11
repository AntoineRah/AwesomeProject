import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {LogInFormData, schema} from './LoginForm.type';
import {CustomTextInput} from '../../atoms/CustomTextInput';
import {Error} from '../../atoms/Error';
import {CustomPress} from '../../atoms/CustomPress/CustomPress';
import {styles} from './LoginForm.style';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenNavigationProp} from './LoginForm.type';

const LoginForm = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [error, setError] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LogInFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LogInFormData) => {
    if (data.email === 'academy@gmail.com' && data.password === 'academy2025') {
      navigation.navigate('OTP');
      reset();
      setError(undefined);
    } else {
      setError('invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

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
              <View>
                <Text style={styles.showpassword}>
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </Text>
              </View>
            </Pressable>
            {errors.password && <Error message={errors.password.message} />}
          </View>
        )}
      />
      {error && <Error message={error} />}

      <CustomPress onPress={handleSubmit(onSubmit)} text="Log In" />

      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </Pressable>
    </View>
  );
};

export {LoginForm};
