import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const YupError = ({err, mrBtm = 0, mrTop = 0}: any) => {
  return (
    <Text
      style={{
        marginBottom: mrBtm,
        marginTop: mrTop,
        color: Colors.red,
        fontFamily: Fonts.Medium,
        fontSize: RFValue(13),
      }}>
      {err}
    </Text>
  );
};

export default YupError;
