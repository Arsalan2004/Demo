import {
  View,
  ScrollView,
  ScrollViewProps,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {DEVICE_TYPE, FLEX} from '../../constants/Utils';
import {useGetStatusBarHeight} from '../../hooks/dimentionHook';

interface Props extends ScrollViewProps {
  children: React.ReactNode;
  styles?: any;
}

const KeyboardScrollView = (Props: Props) => {
  const children = (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1}}
      {...Props}>
      {Props.children}
    </ScrollView>
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={DEVICE_TYPE == 'ios' ? 'padding' : undefined}>
        {
          <View style={FLEX}>
            <View
              style={{
                height:
                  (DEVICE_TYPE == 'android' ? 10 : 0) + useGetStatusBarHeight(),
                ...Props.styles,
              }}
            />
            {children}
          </View>
        }
      </KeyboardAvoidingView>
    </>
  );
};

export default KeyboardScrollView;

export const MyScrollViewWithoutKeyB = (Props: Props) => {
  const children = (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{flexGrow: 1}}
      {...Props}>
      {Props.children}
    </ScrollView>
  );
  return (
    <>
      <View style={FLEX}>
        <View
          style={{
            height:
              (DEVICE_TYPE == 'android' ? 10 : 0) + useGetStatusBarHeight(),
            ...Props.styles,
          }}
        />
        {children}
      </View>
    </>
  );
};
