import {Text, Image, ScrollView, View} from 'react-native';
import React from 'react';
import {DetailsScreenProp} from './DetailsScreen.type';
import {useRoute} from '@react-navigation/native';
import {data} from '../../assets/Products.json';
import {Error} from '../../components/atoms/Error';
import {styles} from './DetailsScreen.style';


const DetailsScreen = () => {
  const {params} = useRoute<DetailsScreenProp>();
  const product = data.find(item => item._id === params.id);

  return product ? (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: product.images[0].url}}
        style={styles.image}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Share</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </View>
    </ScrollView>
  ) : (
    <Error message="Could not find item" />
  );
};

export {DetailsScreen};
