import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {RootStackParamsList, ScreenTypes} from '../services/NavigationModals';
import Home from '../View/Private/Home';
import MyProfile from '../View/Private/MyProfile';
import BottomTabs from './BottomTabs';
import OfferDetail from '../View/Private/OfferDetail';
import Liked from '../View/Private/Liked';

const Stack = createStackNavigator<RootStackParamsList>();

const MainStack = () => {
  const Screens: ScreenTypes = [
    {
      name: 'BottomTabs',
      title: 'BottomTabs',
      Component: BottomTabs,
    },
    {
      name: 'Home',
      title: 'Home',
      Component: Home,
    },
    {
      name: 'MyProfile',
      title: 'MyProfile',
      Component: MyProfile,
    },
    {
      name: 'OfferDetail',
      title: 'OfferDetail',
      Component: OfferDetail,
    },
    {
      name: 'Liked',
      title: 'Liked',
      Component: Liked,
    },
  ];
  return (
    <>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={({navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          headerTitleAlign: 'center',
        })}>
        {Screens.map(screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.Component}
              options={({navigation}) => {
                return {
                  ...screen?.options,
                  headerShown: false,
                };
              }}
            />
          );
        })}
      </Stack.Navigator>
    </>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
