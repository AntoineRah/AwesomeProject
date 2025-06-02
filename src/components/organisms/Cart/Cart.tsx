import {View, Text} from 'react-native';
import React from 'react';
import {getstyles} from './Cart.style';
import {useTheme} from '../../../hooks/theme';
import {CartItem} from '../../molecules/CartItem/CartItem';
import {useCartStore} from '../../../hooks/CartStore';
import {CustomPress} from '../../atoms/CustomPress';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SafeAreaView} from 'react-native-safe-area-context';
const Cart = () => {
  const {colors} = useTheme();
  const styles = getstyles(colors);
  const products = useCartStore(state => state.products);
  const {clear, remove} = useCartStore();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topBar}>
          <Text style={styles.title}>CART</Text>
          <CustomPress text="Clear" onPress={() => clear()} />
        </View>
        <SwipeListView
          data={products}
          keyExtractor={(_, index) => index.toString()}
          rightOpenValue={-80}
          stopRightSwipe={-80}
          renderHiddenItem={item => (
            <CustomPress text="Delete" onPress={() => remove(item.item.id)} />
          )}
          renderItem={item => (
            <CartItem
              name={item.item.name}
              price={item.item.price}
              quantity={item.item.quantity}
              id={item.item.id}
            />
          )}
          contentContainerStyle={{paddingHorizontal: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

export {Cart};
