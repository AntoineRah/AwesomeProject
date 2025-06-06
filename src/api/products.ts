import {AddProductFormData} from '../components/organisms/AddProductForm/AddProductForm.type';
import {axiosInstance} from './axios';

const fetchProducts = async (accessToken: string, page = 1) => {
  const response = await axiosInstance.get(`/api/products?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const addProduct = async (data: AddProductFormData, accessToken: string) => {
  const formData = new FormData();

  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('price', data.price);

  if (!data.location) {
    formData.append(
      'location',
      JSON.stringify({
        name: 'kaslik',
        latitude: 35,
        longitude: 35,
      }),
    );
  }

  data.images.forEach(image => {
    formData.append('images', {
      uri: image.uri,
      type: image.type || 'image/jpeg',
      name: image.name || 'photo.jpg',
    } as any);
  });

  const response = await axiosInstance.post('/api/products', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// const sendPush = async (productName: string, productId: string) => {
//   console.log('Sending push notification...');
//   console.log('Product Name:', productName);
//   console.log('Product ID:', productId);
//   const deviceState = await OneSignal.getDeviceState();
//   console.log('User ID:', deviceState.userId);
//   if (!deviceState.userId) {
//     console.warn('No OneSignal player ID available');
//     return;
//   }

//   try {
//     await axiosInstance.post(
//       'https://onesignal.com/api/v1/notifications',
//       {
//         app_id: Config.ONE_SIGNAL_ID,
//         include_player_ids: [userId],
//         headings: {en: 'New Product Added!'},
//         contents: {en: `Product added: ${productName}`},
//         url: `awesomeproject://Details/${productId}`,
//       },
//       {
//         headers: {
//           Authorization: Config.ONE_SIGNAL_KEY,
//           'Content-Type': 'application/json',
//         },
//       },
//     );

//     console.log('Notification sent!');
//   } catch (err) {
//     console.error('Failed to send notification:', err);
//   }
// };

// import axios from 'axios';

// const sendPush = async (
//   productName: string,
//   productId: string
// ) => {
//   try {
//     await axios.post(
//       'https://onesignal.com/api/v1/notifications',
//       {
//         app_id: Config.ONE_SIGNAL_ID,
//         included_segments: ['All'], // sends to all users
//         headings: { en: 'New Product Added!' },
//         contents: { en: `Check out: ${productName}` },
//         data: {
//           productId,
//         },
//         url: `awesomeproject://Details/${productId}`,
//       },
//       {
//         headers: {
//           Authorization: `Basic ${Config.ONE_SIGNAL_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     console.log('Notification sent to all users');
//   } catch (error) {
//     console.error('Error sending push:', error);
//   }
// };

const fetchProductDetails = async (id: string) => {
  const response = await axiosInstance.get(`/api/products/${id}`);
  return response.data;
};

const searchProducts = async (query: string) => {
  const response = await axiosInstance.get(`/api/products/search?query=${query}`,   );
  return response.data;
};

export {fetchProducts, addProduct, fetchProductDetails,searchProducts};
