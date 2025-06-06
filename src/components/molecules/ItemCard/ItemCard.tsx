import {Text, Pressable, Image} from 'react-native';
import React from 'react';
import {ItemCardProps} from './ItemCard.type';
import {getstyles} from './ItemCard.style';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/main/MainStack.type';
import {useTheme} from '../../../hooks/theme';
import {fonts} from '../../../globalSyles/fontTheme';
import Config from 'react-native-config';
import {useCartStore} from '../../../hooks/CartStore';

const ItemCardComponent = React.memo(
  ({id, title, price, imageUrl, style}: ItemCardProps) => {
    const navigation =
      useNavigation<
        NativeStackNavigationProp<MainStackParamList, 'ItemList'>
      >();
    const {colors} = useTheme();
    const {add} = useCartStore();
    const styles = React.useMemo(() => getstyles(colors), [colors]);

    return (
      <Pressable
        style={[styles.container, style]}
        onPress={() => navigation.navigate('Details', {id})}>
        <Image
          style={styles.imagestyle}
          source={{uri: Config.BASE_URL + imageUrl}}
          testID="item-image"
        />
        <View style={styles.textcontainer}>
          <Text style={[styles.fontstyle, fonts.heading]}>{title}</Text>
          <Text style={[styles.pricestyle, fonts.small]}>Price: {price}$</Text>
        </View>
        <Pressable onPress={() => add({id, name: title, price, quantity: 1})}>
          <Text style={styles.fontstyle}>Add</Text>
        </Pressable>
      </Pressable>
    );
  },
);

export const ItemCard = React.memo(ItemCardComponent);
