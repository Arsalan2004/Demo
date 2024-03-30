import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../services/NavigationServices';
import AuthScreen from './AuthScreen';
import {useAppSelector} from '../hooks/reduxHooks';
import {userDataSelector} from '../Store/Data/Auth/AuthSlice';
import Splash from '../View/Public/Splash';
import MainStack from './MainScreen';

type Props = {};

const RootNavigator = (props: Props) => {
  const {isAuthenticated} = useAppSelector(userDataSelector);
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  useEffect(() => {
    const change_screen = setTimeout(() => {
      setIsSplashComplete(true);
    }, 1800);
    return () => clearTimeout(change_screen);
  }, []);
  return (
    <>
      {isSplashComplete ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <MainStack /> : <AuthScreen />}
        </NavigationContainer>
      ) : (
        <Splash />
      )}
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
