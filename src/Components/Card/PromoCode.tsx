import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlexDirRow from '../Layouts/FlexDirRow';
import {bold, medium} from '../../constants/Utils';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-simple-toast';

type Props = {
  promoCode: string;
};

const PromoCode = (props: Props) => {
  const onPress = async () => {
    Clipboard.setString(props.promoCode);
    Toast.show('Copied', Toast.SHORT);
  };
  return (
    <>
      <FlexDirRow
        style={{
          borderWidth: 1,
          borderRadius: moderateScale(5),
          overflow: 'hidden',
          alignSelf: 'center',
          marginVertical: moderateScale(10),
        }}>
        <View
          style={{
            borderRightWidth: 1,
            padding: 5,
            backgroundColor: Colors.secondary,
          }}>
          <Text style={bold(17)}>Promocode</Text>
        </View>
        <View style={{padding: 5, minWidth: moderateScale(120)}}>
          <Text
            style={[medium(16), {textDecorationLine: 'underline'}]}
            onLongPress={onPress}>
            {props.promoCode}
          </Text>
        </View>
      </FlexDirRow>
    </>
  );
};

export default PromoCode;

const styles = StyleSheet.create({});
