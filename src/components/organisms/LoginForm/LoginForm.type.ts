import {z} from 'zod';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/auth/AuthStack.type';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

const schema = z.object({
  email: z.string().email('Email is invalid'),
  password: z.string().min(1, 'please enter a password'),
});

type LogInFormData = z.infer<typeof schema>;

export {schema};
export type {LogInFormData, LoginScreenNavigationProp};
