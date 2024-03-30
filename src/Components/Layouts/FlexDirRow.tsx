import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  justContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
};

const FlexDirRow: React.FC<Props> = ({children, style, justContent}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: justContent,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default FlexDirRow;
