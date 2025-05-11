import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/scale';

const errorStyles = StyleSheet.create({
  message: {color: 'red', marginBottom: scale(8), height: scale(30)},
});

export {errorStyles};
