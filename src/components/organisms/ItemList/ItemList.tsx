import {FlatList} from 'react-native';
import React from 'react';
import phoneData from '../../../assets/Products.json';
import {ItemCard} from '../../molecules/ItemCard';
import {styles} from './ItemList.style';

const ItemList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={phoneData.data}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return (
          <ItemCard
            id={item._id}
            title={item.title}
            price={item.price}
            imageUrl={item.images[0].url}
          />
        );
      }}
    />
  );
};

export default ItemList;
