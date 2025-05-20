import {axiosInstance} from './axios';

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/api/auth/login', {
    email,
    password,
  });
  return response.data;
};

export const signup = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage?: {
    uri: string;
    name: string;
    type: string;
  };
}) => {
  const formData = new FormData();

  formData.append('firstName', data.firstName);
  formData.append('lastName', data.lastName);
  formData.append('email', data.email);
  formData.append('password', data.password);
  if (data.profileImage) {
    formData.append('profileImage', {
      uri: data.profileImage.uri,
      name: data.profileImage.name,
      type: data.profileImage.type,
    } as any);
  }
  const response = await axiosInstance.post('/api/auth/signup', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const verifyOtp = async (email: string, otp: string) => {
  const response = await axiosInstance.post('/api/auth/verify-otp', {
    email,
    otp,
  });
  return response.data;
};
