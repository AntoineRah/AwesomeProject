import React from 'react';
import {View} from 'react-native';
import ItemList from '../../components/organisms/ItemList/ItemList';
import { styles } from './ItemListScreen.style';

const ItemListScreen = () => {
  return (
    <View style={styles.container} >
      <ItemList />
    </View>
  );
};

export {ItemListScreen};
