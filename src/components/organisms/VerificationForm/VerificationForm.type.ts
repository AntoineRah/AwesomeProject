import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation/auth/AuthStack.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type VerificationScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'OTP'
>;

const schema = z.object({
  otp: z.string().length(6, 'opt must be 4 digits'),
});

type VerificationFormData = z.infer<typeof schema>;
export type {VerificationFormData, VerificationScreenNavigationProp};
export {schema};
