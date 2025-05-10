import {View, Text} from 'react-native';
import React from 'react';
import {DetailsScreenProp} from './DetailsScreen.type';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  const {params} = useRoute<DetailsScreenProp>();
  return (
    <View>
      <Text>{params.id}</Text>
    </View>
  );
};

export {DetailsScreen};
