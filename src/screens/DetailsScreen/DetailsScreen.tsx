import React, {useCallback} from 'react';
import {
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import RNFS from 'react-native-fs';

import Config from 'react-native-config';
import {DetailsScreenProp} from './DetailsScreen.type';
import {Error} from '../../components/atoms/Error';
import {getstyles} from './DetailsScreen.style';
import {useTheme} from '../../hooks/theme';
import {fetchProductDetails} from '../../api/products';
import {SplashScreen} from '../SplashScreen';

const DetailsScreen = () => {
  const {params} = useRoute<DetailsScreenProp>();
  const {colors} = useTheme();
  const {data, isError, isLoading, error} = useQuery({
    queryKey: ['productdetail', params.id],
    queryFn: () => fetchProductDetails(params.id),
  });

  const requestAndroidPermission = useCallback(async () => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to save photos',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  }, []);

  const saveImageToCameraRoll = useCallback(
    async (uri: string) => {
      const hasPermission = await requestAndroidPermission();
      if (!hasPermission) {
        Alert.alert(
          'Permission denied',
          'Cannot save image without storage permission.',
        );
        return;
      }

      try {
        const fileName = `image_${Date.now()}.jpg`;
        const localPath = `${RNFS.CachesDirectoryPath}/${fileName}`;

        const downloadResult = await RNFS.downloadFile({
          fromUrl: uri,
          toFile: localPath,
        }).promise;

        if (downloadResult.statusCode === 200) {
          const savedUri = await CameraRoll.saveAsset(localPath, {
            type: 'photo',
            album: 'Downloads',
          });
          Alert.alert('Success', 'Image saved to camera roll!');
          console.log('Saved to camera roll:', savedUri);
        } else {
          Alert.alert('Download failed', 'Could not download image.');
        }
      } catch (err) {
        console.error('Error saving image:', err);
        Alert.alert('Error', 'Failed to save image.');
      }
    },
    [requestAndroidPermission],
  );

  if (isError) {
    console.log(error);
    return <Error message={error.message} />;
  }
  if (isLoading) {
    return <SplashScreen />;
  }

  const styles = getstyles(colors);
  const product = data?.data;

  const renderImage = (item: {url: string; _id: string}) => (
    <TouchableOpacity
      key={item._id}
      onLongPress={() => saveImageToCameraRoll(`${Config.BASE_URL}${item.url}`)}
      activeOpacity={0.7}>
      <Image
        source={{uri: `${Config.BASE_URL}${item.url}`}}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return product ? (
    <ScrollView style={styles.layer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}>
        {product.images.map(renderImage)}
      </ScrollView>

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </View>
      </View>

      <Text>Contact seller at: {product.user.email}</Text>
    </ScrollView>
  ) : (
    <Error message="Could not find item" />
  );
};

export {DetailsScreen};
