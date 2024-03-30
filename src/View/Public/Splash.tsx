import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Flex1 from '../../Components/Layouts/Flex1';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import {SQUARE} from '../../constants/Utils';

type Props = {};

const Splash = (props: Props) => {
  return (
    <Flex1
      style={{
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <Image source={Images.Demo} resizeMode="contain" style={SQUARE(132)} />
    </Flex1>
  );
};

export default Splash;

const styles = StyleSheet.create({});
