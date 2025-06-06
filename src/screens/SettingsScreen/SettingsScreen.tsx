import React, {useMemo} from 'react';
import {SettingsForm} from '../../components/organisms/SettingsForm';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {useTheme} from '../../hooks/theme';
import { getstyles } from './SettingsScreen.style';
const SettingsScreen = () => {
  const {colors} = useTheme();
  const opacity = useSharedValue(0);
  useFocusEffect(
    React.useCallback(() => {
      opacity.value = withTiming(1, {duration: 1000});
      return () => {
        opacity.value = 0;
      };
    }, [opacity]),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  const styles = useMemo(() => getstyles(colors),[colors]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <SettingsForm />
    </Animated.View>
  );
};

export {SettingsScreen};
