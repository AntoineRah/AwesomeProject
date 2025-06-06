import React from 'react';
import {View} from 'react-native';
import {ItemList} from '../../components/organisms/ItemList/ItemList';
import {getstyles} from './ItemListScreen.style';
import {useTheme} from '../../hooks/theme';

const ItemListScreen = () => {
  const {colors} = useTheme();
  const styles = getstyles(colors);
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  );
};

export {ItemListScreen};
