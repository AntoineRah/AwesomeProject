import {FlatList, View, Text} from 'react-native';
import React from 'react';
import phoneData from '../../../assets/Products.json';
import {ItemCard} from '../../molecules/ItemCard';
import {getstyles} from './ItemList.style';
import {useTheme} from '../../../hooks/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomTextInput} from '../../atoms/CustomTextInput';

const ItemList = () => {
  const {colors} = useTheme();
  const styles = getstyles(colors);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text style={styles.titlestyle}>Home Page</Text>
              <CustomTextInput
                style={styles.searchbar}
                placeholder="Search..."
                placeholderTextColor={colors.textcolor}
              />
            </View>
          }
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
      </View>
    </SafeAreaView>
  );
};

export default ItemList;
