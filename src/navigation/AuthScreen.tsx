import {StyleSheet} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {ScreenTypes} from '../services/NavigationModals';
import Login from '../View/Auth/Login';

type Props = {};

const Stack = createStackNavigator();

const AuthScreen = (props: Props) => {
  const Screens: ScreenTypes = [
    {name: 'Login', Component: Login, title: 'Login'},
  ];
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={({navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleAlign: 'center',
          headerShown: false,
        })}>
        {Screens.map(screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.Component}
              options={({navigation}) => {
                return {
                  ...screen.options,
                };
              }}
            />
          );
        })}
      </Stack.Navigator>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
