import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {CustomPress} from '../../atoms/CustomPress/CustomPress';
import {
  SignupFormData,
  SignupScreenNavigationProp,
  schema,
} from './SignupForm.type';
import {getstyles} from './SignupForm.style';
import {CustomTextInput} from '../../atoms/CustomTextInput';
import {Error} from '../../atoms/Error';
import {useTheme} from '../../../hooks/theme';
import {fonts} from '../../../globalSyles/fontTheme';
import {useMutation} from '@tanstack/react-query';
import {signup} from '../../../api/auth';
import {useNavigation} from '@react-navigation/native';

const SignupForm = () => {
  const {colors} = useTheme();
  const {navigate} = useNavigation<SignupScreenNavigationProp>();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profileImage: undefined,
    },
  });

  console.log(`is it valid? ${isValid}`);

  const {mutate, isPending} = useMutation({
    mutationFn: (data: SignupFormData) => {
      const response = signup(data);
      console.log(response);
      return response;
    },
    onSuccess: (_, variables) => {
      navigate('OTP',{email:variables.email});
    },
    onError: (error: any) => {
      Alert.alert('Error', error?.message || 'Something went wrong');
    },
  });

  const onSubmit = (data: SignupFormData) => {
    mutate(data);
  };

  const styles = getstyles(colors);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.form}>
        <Text style={[styles.title, fonts.heading]}>Create Account</Text>

        <Controller
          control={control}
          name="firstName"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="First Name"
                onChangeText={onChange}
                value={value}
              />
              {errors.firstName && <Error message={errors.firstName.message} />}
            </>
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Last Name"
                onChangeText={onChange}
                value={value}
              />
              {errors.lastName && <Error message={errors.lastName.message} />}
            </>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Email"
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email && <Error message={errors.email.message} />}
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Password"
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
              {errors.password && <Error message={errors.password.message} />}
            </>
          )}
        />

        {/* TODO: Add UI + logic to pick photo and set photo field */}

        <View>
          <CustomPress
            onPress={handleSubmit(onSubmit)}
            text={isPending ? 'Loading...' : 'Sign Up'}
            disabled={isPending}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {SignupForm};
