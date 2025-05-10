import React from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {CustomPress} from '../../atoms/CustomPress/CustomPress';
import {SignupFormData, schema} from './SignupForm.type';
import {getstyles} from './SignupForm.style';
import {CustomTextInput} from '../../atoms/CustomTextInput';
import {Error} from '../../atoms/Error';
import {useTheme} from '../../../hooks/theme';

const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phonenumber: '',
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log('Form submitted:', data);
  };

  const {colors} = useTheme();
  const styles = getstyles(colors);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.title}>Create Account</Text>

        <Controller
          control={control}
          name="name"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Name"
                onChangeText={onChange}
                value={value}
              />
              {errors.name && <Error message={errors.name.message} />}
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

        <Controller
          control={control}
          name="phonenumber"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Phone Number"
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
              />
              {errors.phonenumber && (
                <Error message={errors.phonenumber.message} />
              )}
            </>
          )}
        />

        <View>
          <CustomPress onPress={handleSubmit(onSubmit)} text="Sign Up" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {SignupForm};
