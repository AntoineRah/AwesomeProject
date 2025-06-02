import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ItemCard} from '../../molecules/ItemCard';
import {getstyles} from './ItemList.style';
import {useTheme} from '../../../hooks/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomTextInput} from '../../atoms/CustomTextInput';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {fetchProducts, searchProducts} from '../../../api/products';
import {SplashScreen} from '../../../screens/SplashScreen';
import {useAuthStore} from '../../../hooks/authentication';
import {useNavigation} from '@react-navigation/native';
import {AddProductNavigationProp} from './ItemList.type';
import {ItemCardSkeleton} from '../../molecules/ItemCard/ItemCardSkeleton';

const ItemList = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const {colors} = useTheme();
  const navigation = useNavigation<AddProductNavigationProp>();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({pageParam = 1}) =>
      fetchProducts(accessToken as string, pageParam),
    getNextPageParam: lastPage => {
      const currentPage = lastPage.pagination.currentPage;
      const totalPages = lastPage.pagination.totalPages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },

    initialPageParam: 1,
  });

  const {data: searchData} = useQuery({
    queryKey: ['searchProducts', searchQuery],
    queryFn: () => searchProducts(searchQuery),
    enabled: searchQuery.trim().length > 0,
  });

  if (isLoading) {
    return <SplashScreen />;
  }
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const products = data?.pages.flatMap(page => page.data) ?? [];
  const searchResults = searchData?.data ?? [];
  const sortedData = searchQuery ? searchResults : products;
  if (sortOrder === 'asc') {
    sortedData.sort(
      (a: {price: number}, b: {price: number}) => a.price - b.price,
    );
  } else if (sortOrder === 'desc') {
    sortedData.sort(
      (a: {price: number}, b: {price: number}) => b.price - a.price,
    );
  }
  const listData = sortedData;

  const styles = getstyles(colors, insets.top);
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.titlestyle}>Home Page</Text>
        <CustomTextInput
          style={styles.searchbar}
          placeholder="Search..."
          placeholderTextColor={colors.textcolor}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          onPress={() => {
            setSortOrder(prev =>
              prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc',
            );
          }}>
          <Text style={styles.sortbutton}>
            Sort By Price{' '}
            {sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <Text>Add Product</Text>
        </TouchableOpacity>
      </View>

      {isLoading || isRefetching ? (
        <FlatList
          data={Array.from({length: 8})}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => <ItemCardSkeleton />}
          contentContainerStyle={{paddingHorizontal: 10}}
        />
      ) : (
        <FlatList
          contentInsetAdjustmentBehavior="never"
          refreshing={refreshing}
          onRefresh={refresh}
          data={listData}
          onEndReached={() => {
            if (!searchQuery && hasNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={0.1}
          keyExtractor={item => item._id}
          ListFooterComponent={isFetchingNextPage ? <SplashScreen /> : null}
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
      )}
    </View>
  );
};
export default ItemList;
