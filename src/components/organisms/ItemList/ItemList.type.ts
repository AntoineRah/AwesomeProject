import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/main/MainStack.type';

type AddProductNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'AddProduct'
>;

export type {AddProductNavigationProp};
