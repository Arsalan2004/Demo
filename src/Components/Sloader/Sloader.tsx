import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../constants/Colors';
import {MV} from '../../constants/Utils';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  isVisible: boolean;
  style?: ViewStyle;
};

const Sloader = ({style, isVisible}: Props) => {
  return (
    <>
      {isVisible && (
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
          showsVerticalScrollIndicator={false}
          renderItem={() => {
            return (
              <>
                <View
                  style={{
                    borderRadius: RFValue(6),
                    alignSelf: 'center',
                    backgroundColor: Colors.imageLoad,
                    ...MV(5),
                    marginTop: moderateScale(15),
                    ...style,
                  }}
                />
              </>
            );
          }}
        />
      )}
    </>
  );
};

export default Sloader;

const styles = StyleSheet.create({});
