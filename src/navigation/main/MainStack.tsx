import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './MainStack.type';
import {ItemListScreen} from '../../screens/ItemListScreen';
import {DetailsScreen} from '../../screens/DetailsScreen';
import AddProductScreen from '../../screens/AddProductScreen/AddProductScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ItemList" component={ItemListScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
    </Stack.Navigator>
  );
};
export {MainStack};
