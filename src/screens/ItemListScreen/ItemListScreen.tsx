import React from 'react';
import {View} from 'react-native';
import {ItemList} from '../../components/organisms/ItemList/ItemList';
import {getstyles} from './ItemListScreen.style';
import {useTheme} from '../../hooks/theme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

const ItemListScreen = () => {
  const {colors} = useTheme();
  const opacity = useSharedValue(0);
  useFocusEffect(
    React.useCallback(() => {
      opacity.value = withTiming(1, {duration: 1000});
      return () => {
        opacity.value = 0;
      };
    }, []),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  const styles = getstyles(colors);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ItemList />
    </Animated.View>
  );
};

export {ItemListScreen};
