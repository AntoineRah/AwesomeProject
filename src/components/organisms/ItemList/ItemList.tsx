import {FlatList, View, Text} from 'react-native';
import React from 'react';
import phoneData from '../../../assets/Products.json';
import {ItemCard} from '../../molecules/ItemCard';
import {getstyles} from './ItemList.style';
import {useTheme} from '../../../hooks/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomTextInput} from '../../atoms/CustomTextInput';

const ItemList = () => {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();
  const styles = getstyles(colors, insets.top);

  return (
    <View>
      <FlatList
        contentInsetAdjustmentBehavior="never"
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.titlestyle}>Home Page</Text>
            <CustomTextInput
              style={styles.searchbar}
              placeholder="Search..."
              placeholderTextColor={colors.textcolor}
            />
          </View>
        }
        data={phoneData.data}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <ItemCard
            style={styles.container}
            id={item._id}
            title={item.title}
            price={item.price}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </View>
  );
};

export default ItemList;
