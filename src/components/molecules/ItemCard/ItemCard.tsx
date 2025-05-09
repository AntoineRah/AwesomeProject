import {Text, Pressable, Image} from 'react-native';
import React from 'react';
import {ItemCardProps} from './ItemCard.type';
import {styles} from './ItemCard.style';
import {View} from 'react-native';

const ItemCard = ({id, title, price, imageUrl}: ItemCardProps) => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.imagestyle} source={{uri: imageUrl}} />
      <View style={styles.textcontainer}>
      <Text style={styles.fontstyle}>{title}</Text>
      <Text style={styles.pricestyle}>Price: {price}$</Text>
      </View>
    </Pressable>
  );
};

export {ItemCard};
