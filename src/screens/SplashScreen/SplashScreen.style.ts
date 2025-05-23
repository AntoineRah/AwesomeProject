import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scale(24),
    marginBottom: scale(20),
  },
});

export {styles};
