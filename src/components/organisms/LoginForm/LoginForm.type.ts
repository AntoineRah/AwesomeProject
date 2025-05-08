import {z} from 'zod';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../screens/type';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const schema = z.object({
  email: z.string().email('Email is invalid'),
  password: z.string().min(7),
});

type LogInFormData = z.infer<typeof schema>;

export {schema};
export type {LogInFormData, LoginScreenNavigationProp};
