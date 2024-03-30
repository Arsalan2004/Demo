import {RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import {ImageSourcePropType} from 'react-native';
import {OfferDetailTypes} from '../models/home';

export type AuthStackParamsList = {
  Login: undefined;
};
export type RootStackScreenProps<T extends keyof AuthStackParamsList> =
  StackScreenProps<AuthStackParamsList, T>;

export type MainStackParamsList = {
  BottomTabs: undefined;
  Home: undefined;
  MyProfile: undefined;
  OfferDetail: OfferDetailTypes;
  Liked: OfferDetailTypes;
};

export type BottomTabStackParamsList = {
  Home: undefined;
  MyProfile: undefined;
};

export type RootStackParamsList = AuthStackParamsList &
  MainStackParamsList &
  BottomTabStackParamsList;

export type ScreenTypes = {
  name: keyof RootStackParamsList;
  title: keyof RootStackParamsList;
  Component: React.FC<any>;
  options?: StackNavigationOptions;
}[];

export type BottomTabsScreenTypes = {
  name: keyof BottomTabStackParamsList;
  title: string;
  Component: React.FC;
  options?: StackNavigationOptions;
  icons: ImageSourcePropType[];
}[];

export interface NavigationProps<
  T extends keyof RootStackParamsList | keyof BottomTabStackParamsList,
> {
  navigation: StackNavigationProp<
    RootStackParamsList & BottomTabStackParamsList,
    T
  >;
  route: RouteProp<RootStackParamsList & BottomTabStackParamsList, T>;
}
