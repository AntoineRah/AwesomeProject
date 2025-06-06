import {View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {getstyles} from './ItemCard.style';
import {useTheme} from '../../../hooks/theme';

const ItemCardSkeleton = React.memo(() => {
  //   const { colors } = useTheme();
  //   const styles = getstyles(colors);

  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        padding={10}
        marginVertical={10}>
        <SkeletonPlaceholder.Item width={100} height={100} borderRadius={20} />
        <SkeletonPlaceholder.Item marginLeft={20} justifyContent="center">
          <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={10}
            width={80}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
});

export {ItemCardSkeleton};
