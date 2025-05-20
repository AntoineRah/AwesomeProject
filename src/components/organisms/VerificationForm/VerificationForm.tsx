import {View, Text, Alert, TextInput} from 'react-native';
import React from 'react';
import {VerificationFormData} from './VerificationForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './VerificationForm.type';
import {useForm, Controller} from 'react-hook-form';
import {getstyles} from './VerificationForm.style';
import {Error} from '../../atoms/Error';
import {CustomPress} from '../../atoms/CustomPress';
import {useAuth} from '../../../hooks/authentication';
import {useTheme} from '../../../hooks/theme';
import {verifyOtp} from '../../../api/auth';
import {useRoute} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';

const VerificationForm = () => {
  const {login} = useAuth();
  const {colors} = useTheme();
  const styles = getstyles(colors);
  const route = useRoute();
  const {email} = route.params as {email: string};

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<VerificationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {otp: ''},
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (data: VerificationFormData) => verifyOtp(email, data.otp),
    onSuccess: () => {
      login();
    },
    onError: (err: any) => {
      Alert.alert('Error', err?.response?.data?.message || 'Incorrect OTP');
    },
  });

  const onSubmit = (data: VerificationFormData) => {
    mutate(data);
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
        text={isPending ? 'Verifying...' : 'Verify'}
        disabled={isPending}
      />
    </View>
  );
};

export {VerificationForm};
