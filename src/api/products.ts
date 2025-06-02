import {AddProductFormData} from '../components/organisms/AddProductForm/AddProductForm.type';
import {axiosInstance} from './axios';

export const fetchProducts = async (accessToken: string, page = 1) => {
  const response = await axiosInstance.get(`/api/products?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const addProduct = async (
  data: AddProductFormData,
  accessToken: string,
) => {
  const formData = new FormData();

  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('price', data.price);

  if (data.location) {
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
      name: image.name || 'photo.jpg',
      type: image.type || 'image/jpeg',
    } as any);
  });

  const response = await axiosInstance.post('/api/products', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const fetchProductDetails = async (id: string) => {
  const response = await axiosInstance.get(`/api/products/${id}`);
  return response.data;
};
