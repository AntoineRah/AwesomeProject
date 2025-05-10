import {Text, Pressable, Image} from 'react-native';
import React from 'react';
import {ItemCardProps} from './ItemCard.type';
import {getstyles} from './ItemCard.style';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/main/MainStack.type';
import {useTheme} from '../../../hooks/theme';

const ItemCard = ({id, title, price, imageUrl}: ItemCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList, 'ItemList'>>();
  const {colors} = useTheme();
  const styles = getstyles(colors);
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Details', {id: id})}>
      <Image style={styles.imagestyle} source={{uri: imageUrl}} />
      <View style={styles.textcontainer}>
        <Text style={styles.fontstyle}>{title}</Text>
        <Text style={styles.pricestyle}>Price: {price}$</Text>
      </View>
    </Pressable>
  );
};

export {ItemCard};
