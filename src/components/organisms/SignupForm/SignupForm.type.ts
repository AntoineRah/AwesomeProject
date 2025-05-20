import {z} from 'zod';
import {AuthStackParamList} from '../../../navigation/auth/AuthStack.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

const schema = z.object({
  firstName: z.string().min(1, 'firstname must be at least 1 character'),
  lastName: z.string().min(1, 'lastname must be at least 1 character'),
  email: z.string().email('Email is invalid'),
  password: z.string().min(7, 'Password must be at least 7 characters long '),
  profileImage: z
    .object({
      uri: z.string().url('Photo URI must be a valid URL'),
      type: z.string().min(1, 'Photo type is required'),
      name: z.string().min(1, 'Photo name is required'),
    })
    .optional(),
});

type SignupFormData = z.infer<typeof schema>;

export {schema};
export type {SignupFormData, SignupScreenNavigationProp};
