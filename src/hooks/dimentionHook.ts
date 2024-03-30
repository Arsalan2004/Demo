import {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useGetStatusBarHeight = () => {
  const insets = useSafeAreaInsets();
  const [navigationBarHeight, setNavigationBarHeight] = useState(0);

  useEffect(() => {
    setNavigationBarHeight(insets.top);
  }, [insets]);

  return navigationBarHeight;
};
