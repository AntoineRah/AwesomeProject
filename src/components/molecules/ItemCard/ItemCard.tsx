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

const ItemCard = ({id, title, price, imageUrl, style}: ItemCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList, 'ItemList'>>();
  const {colors} = useTheme();
  const styles = getstyles(colors);
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => navigation.navigate('Details', {id: id})}>
      <Image style={styles.imagestyle} source={{uri: Config.BASE_URL + imageUrl}} />
      <View style={styles.textcontainer}>
        <Text style={[styles.fontstyle, fonts.heading]}>{title}</Text>
        <Text style={[styles.pricestyle, fonts.small]}>Price: {price}$</Text>
      </View>
    </Pressable>
  );
};

export {ItemCard};
