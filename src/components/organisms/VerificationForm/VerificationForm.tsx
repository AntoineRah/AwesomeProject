import {View, Text, Alert, TextInput} from 'react-native';
import React from 'react';
import {VerificationFormData} from './VerificationForm.type';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './VerificationForm.type';
import {useForm, Controller} from 'react-hook-form';
import {styles} from './VerificationForm.style';
import {Error} from '../../atoms/Error';
import {CustomPress} from '../../atoms/CustomPress';
import {useAuth} from '../../../hooks/authentication';

const VerificationForm = () => {
  const {login} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<VerificationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {otp: ''},
  });
  const onSubmit = (data: VerificationFormData) => {
    if (data.otp === '1234') {
      login();
    } else {
      Alert.alert('Error', 'Incorrect OTP');
    }
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
              maxLength={4}
              placeholder="1234"
              onChangeText={onChange}
              value={value}
            />
            {errors.otp && <Error message={errors.otp.message} />}
          </>
        )}
      />

      <CustomPress onPress={handleSubmit(onSubmit)} text="Verify" />
    </View>
  );
};

export {VerificationForm};
