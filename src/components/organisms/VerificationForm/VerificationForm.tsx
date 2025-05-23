import {View, Text, Alert, TextInput} from 'react-native';
import React from 'react';
import {VerificationFormData} from './VerificationForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './VerificationForm.type';
import {useForm, Controller} from 'react-hook-form';
import {getstyles} from './VerificationForm.style';
import {Error} from '../../atoms/Error';
import {CustomPress} from '../../atoms/CustomPress';
import {useTheme} from '../../../hooks/theme';
import {verifyOtp, login} from '../../../api/auth';
import {useRoute} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {useAuthStore} from '../../../hooks/authentication/AuthStore';

const VerificationForm = () => {
  const {colors} = useTheme();
  const styles = getstyles(colors);
  const route = useRoute();
  const {email, password} = route.params as {email: string; password: string};
  const {setTokens} = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<VerificationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {otp: ''},
  });

  const loginMutation = useMutation({
    mutationFn: (formData: {email: string; password: string}) =>
      login(formData.email, formData.password, '3m'),
    onSuccess: data => {
      if (data.success) {
        const {accessToken, refreshToken} = data.data;
        setTokens(accessToken, refreshToken, '3m');
        console.log('Login successful');
      } else {
        Alert.alert('Login Failed', 'Unexpected error');
      }
      console.log(data);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (data: VerificationFormData) => verifyOtp(email, data.otp),
    onSuccess: response => {
      if (response.success) {
         loginMutation.mutate({email, password});
      } else {
        Alert.alert('OTP verification failed', 'Please try again');
      }
      console.log(response);
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  const onSubmit = (data: VerificationFormData) => {
    verifyOtpMutation.mutate(data);
    console.log('Verifying OTP for:', email, 'with code:', data.otp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <Controller
        control={control}
        name="otp"
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={onChange}
              value={value}
            />
            {errors.otp && <Error message={errors.otp.message} />}
          </>
        )}
      />

      <CustomPress
        onPress={handleSubmit(onSubmit)}
        text={verifyOtpMutation.isPending ? 'Verifying...' : 'Verify'}
        disabled={verifyOtpMutation.isPending}
      />
    </View>
  );
};

export {VerificationForm};
