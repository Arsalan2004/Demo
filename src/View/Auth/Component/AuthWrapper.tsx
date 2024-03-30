import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {F_SIZE, MT, SQUARE} from '../../../constants/Utils';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

type Props = {
  image: ImageSourcePropType;
  title: string;
  second?: boolean;
};

const AuthWrapper = ({image, title, second}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
      }}>
      <Image
        source={image}
        style={[SQUARE(147), MT(50)]}
        resizeMode="contain"
      />
      <Text style={[{color: Colors.black}, F_SIZE(25)]}>{title}</Text>
    </View>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({});
