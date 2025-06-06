import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '../../../hooks/theme';
import {getstyles} from './CartItem.style';
import {fonts} from '../../../globalSyles/fontTheme';
import {useCartStore} from '../../../hooks/CartStore';
import {product} from '../../../hooks/CartStore/cartstore.type';

const CartItem = ({id, name, price, quantity}: product) => {
  const {colors} = useTheme();
  const styles = getstyles(colors);
  const {increment, decrement} = useCartStore();
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={[styles.fontstyle, fonts.heading]}>{name}</Text>
        <Text style={[styles.pricestyle, fonts.small]}>{price}$</Text>
      </View>
      <View style={styles.changequantity}>
        <Pressable style={styles.plusminus} onPress={() => increment(id)}>
          <Text style={styles.fontstyle}>+</Text>
        </Pressable>
        <Text style={styles.fontstyle}>{quantity}</Text>
        <Pressable style={styles.plusminus} onPress={() => decrement(id)}>
          <Text style={styles.fontstyle}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

export {CartItem};
