import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {F_SIZE, MV, Styles, medium} from '../../constants/Utils';

type Props = {
  title?: string;
  isVisible?: boolean;
};

const NoResult = ({title, isVisible}: Props) => {
  return (
    <>
      {isVisible && (
        <View style={[Styles.centerDivWithFlex, MV(25)]}>
          <Text style={[medium(20)]}>{title}</Text>
        </View>
      )}
    </>
  );
};

export default NoResult;

const styles = StyleSheet.create({});
