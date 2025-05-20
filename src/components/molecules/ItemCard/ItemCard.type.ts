import {StyleProp, ViewStyle} from 'react-native';

type ItemCardProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  style: StyleProp<ViewStyle>;
};

export type {ItemCardProps};
