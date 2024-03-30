import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {OfferDetailTypes} from '../../models/home';
import Flex1 from '../Layouts/Flex1';
import {moderateScale} from 'react-native-size-matters';
import {MT, PH, bold, h, medium, w} from '../../constants/Utils';
import Colors from '../../constants/Colors';
import {navigate} from '../../services/NavigationServices';

interface Props extends OfferDetailTypes {}

const OfferCard = (props: Props) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigate('OfferDetail', {...props})}>
        <Image
          source={{uri: props.Image}}
          resizeMode="cover"
          style={[h(120), w(100)]}
        />
        <Flex1 style={PH(10)}>
          <Text style={[bold(15)]} numberOfLines={1} ellipsizeMode="tail">
            {props.Title}
          </Text>
          <Text
            style={[medium(13), MT(5)]}
            numberOfLines={3}
            ellipsizeMode="tail">
            {props.Description}
          </Text>
        </Flex1>
      </TouchableOpacity>
    </>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: Colors.border,
    backgroundColor: Colors.lightwhite,
    marginVertical: moderateScale(5),
    borderRadius: moderateScale(6),
    overflow: 'hidden',
  },
});
