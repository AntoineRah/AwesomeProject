import {
  Text,
  Image,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {DetailsScreenProp} from './DetailsScreen.type';
import {useRoute} from '@react-navigation/native';
import {data} from '../../assets/Products.json';
import {Error} from '../../components/atoms/Error';
import {getstyles} from './DetailsScreen.style';
import {useTheme} from '../../hooks/theme';

const DetailsScreen = () => {
  const {params} = useRoute<DetailsScreenProp>();
  const product = data.find(item => item._id === params.id);
  const {colors} = useTheme();
  const styles = getstyles(colors);

  const renderImage = ({item}: {item: {url: string}}) => (
    <Image source={{uri: item.url}} style={styles.image} resizeMode="cover" />
  );

  return product ? (
    <ScrollView style={styles.layer}>
      <FlatList
        contentContainerStyle={styles.container}
        data={product.images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderImage}
        style={styles.carousel}
      />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </View>
      </View>
    </ScrollView>
  ) : (
    <Error message="Could not find item" />
  );
};

export {DetailsScreen};
