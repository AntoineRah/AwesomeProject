import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import {launchImageLibrary} from 'react-native-image-picker';
import {CustomTextInput} from '../../atoms/CustomTextInput';
import {CustomPress} from '../../atoms/CustomPress/CustomPress';
import {Error} from '../../atoms/Error';
import {useTheme} from '../../../hooks/theme';
import {fonts} from '../../../globalSyles/fontTheme';
import {schema, AddProductFormData} from './AddProductForm.type';
import {getstyles} from './AddProductForm.style';
import {addProduct} from '../../../api/products';
import {useAuthStore} from '../../../hooks/authentication';
import notifee, {AndroidImportance} from '@notifee/react-native';

const AddProductForm = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getstyles(colors), [colors]);
  const accessToken = useAuthStore(state => state.accessToken);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<AddProductFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      price: '',
      description: '',
      images: [],
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (data: AddProductFormData) =>
      addProduct(data, accessToken as string),
    onSuccess: async response => {
      // sendPush(response.data.title, response.data._id);
      await displayNotification(response.data._id, response.data.title);
      Alert.alert('Success', 'Product added!');
    },

    onError: (error: any) => {
      Alert.alert('Error', error?.message || 'Failed to add product');
      console.log(error);
    },
  });

  const onSubmit = React.useCallback(
    (data: AddProductFormData) => {
      console.log('Form data:', data);
      mutate(data);
    },
    [mutate],
  );

  const pickImage = React.useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 0,
    });

    if (result.assets && result.assets.length > 0) {
      const formattedImages = result.assets.map(image => ({
        uri: image.uri!,
        name: image.fileName || 'image.jpg',
        type: image.type || 'image/jpeg',
      }));
      setValue('images', formattedImages, {shouldValidate: true});
    }
  }, [setValue]);

  const selectedImages = watch('images');
  const displayNotification = React.useCallback(
    async (productId: string, productTitle: string) => {
      await notifee.requestPermission();

      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      await notifee.displayNotification({
        title: 'Product Added!',
        body: `Your product "${productTitle}" was added successfully.`,
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
        data: {
          url: `awesomeproject://details/${productId}`,
        },
      });
    },
    [],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.form}>
        <Text style={[styles.title, fonts.heading]}>Add Product</Text>

        <Controller
          control={control}
          name="title"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Title"
                onChangeText={onChange}
                value={value}
              />
              {errors.title && <Error message={errors.title.message} />}
            </>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Description"
                onChangeText={onChange}
                value={value}
                multiline
                numberOfLines={4}
              />
              {errors.description && (
                <Error message={errors.description.message} />
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="price"
          render={({field: {onChange, value}}) => (
            <>
              <CustomTextInput
                placeholder="Price"
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
              />
              {errors.price && <Error message={errors.price.message} />}
            </>
          )}
        />

        <CustomPress onPress={pickImage} text="Pick Image from Library" />
        {errors.images && <Error message={errors.images.message} />}

        {selectedImages?.length > 0 && (
          <Image
            source={{uri: selectedImages[0].uri}}
            style={{
              width: 100,
              height: 100,
              marginVertical: 10,
              borderRadius: 10,
            }}
          />
        )}

        <CustomPress
          onPress={handleSubmit(onSubmit)}
          text={isPending ? 'Saving...' : 'Add Product'}
          disabled={isPending}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export {AddProductForm};
