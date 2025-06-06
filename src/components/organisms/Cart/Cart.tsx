import {View, Text} from 'react-native';
import React from 'react';
import {getstyles} from './Cart.style';
import {useTheme} from '../../../hooks/theme';
import {CartItem} from '../../molecules/CartItem/CartItem';
import {useCartStore} from '../../../hooks/CartStore';
import {CustomPress} from '../../atoms/CustomPress';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

const Cart = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getstyles(colors), [colors]);
  const products = useCartStore(state => state.products);
  const {clear, remove} = useCartStore();

  const translateY = useSharedValue(300);

  useFocusEffect(
    React.useCallback(() => {
      translateY.value = withTiming(0, {duration: 500});
      return () => {
        translateY.value = 50;
      };
    }, []),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <SafeAreaView>
        <View style={styles.topBar}>
          <Text style={styles.title}>CART</Text>
          <CustomPress text="Clear" onPress={() => clear()} />
        </View>

        <SwipeListView
          data={products}
          keyExtractor={(_, index) => index.toString()}
          rightOpenValue={-120}
          stopRightSwipe={-200}
          renderHiddenItem={item => (
            <CustomPress
              style={styles.deletebutton}
              text="Delete"
              onPress={() => remove(item.item.id)}
            />
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
      </SafeAreaView>
    </Animated.View>
  );
};

export {Cart};
