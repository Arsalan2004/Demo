import * as React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  NavigationProp,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamsList} from './NavigationModals';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavigationProp<any>>>();
export const nRef = createNavigationContainerRef<RootStackParamsList>();
export const navigate = (name: keyof RootStackParamsList, params?: any) => {
  navigationRef.current?.navigate(name as any, params as any);
};

export const push = (name: keyof RootStackParamsList, params?: any) => {
  navigationRef.current?.dispatch(StackActions.push(name, params));
};

export const replace = (name: keyof RootStackParamsList, params?: any) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const reset = (name: string) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: name}],
    }),
  );
};

export const handleResetScreen = (name: keyof RootStackParamsList) => {
  if (navigationRef.current) {
    navigationRef.current.reset({
      index: 0,
      routes: [{name: name}],
    });
  }
};
