import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Fonts, {F} from './Fonts';
import Colors from './Colors';
import {RFValue} from 'react-native-responsive-fontsize';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const DEVICE_TYPE = Platform.OS;
export const isIOS = DEVICE_TYPE === 'ios';
export default {
  validateEmail(email: string) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
};
export const Styles = StyleSheet.create({
  flex1: {flex: 1},
  flexDirectionRow: {
    flexDirection: 'row',
  },
  centerDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerDivWithFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SpaceBeetween: {
    justifyContent: 'space-between',
  },
  SpaceB_AliCen: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  medium25: {
    fontFamily: Fonts.Medium,
    fontSize: RFValue(25),
    color: Colors.black,
  },
  medium13: {
    fontFamily: Fonts.Medium,
    fontSize: RFValue(13),
    color: Colors.black,
  },
  medium14: {
    fontFamily: Fonts.Medium,
    fontSize: RFValue(14),
    color: Colors.black,
  },
  medium16: {
    fontFamily: Fonts.Medium,
    fontSize: RFValue(16),
    color: Colors.black,
  },
  medium20: {
    fontFamily: Fonts.Medium,
    fontSize: RFValue(20),
    color: Colors.black,
  },
  medium15: {
    fontFamily: Fonts.Medium,
    fontSize: RFValue(15),
    color: Colors.black,
  },
  regular15: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(15),
    color: Colors.black,
  },
  regular12: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(12),
    color: Colors.black,
  },
  regular13: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(13),
    color: Colors.black,
  },
  regular14: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(14),
    color: Colors.black,
  },
  semibold18: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(18),
    color: Colors.black,
  },
  semibold10: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(10),
    color: Colors.black,
  },
  bold25: {
    fontFamily: Fonts.Bold,
    fontSize: RFValue(25),
    color: Colors.black,
  },
  bold20: {
    fontFamily: Fonts.Bold,
    fontSize: RFValue(20),
    color: Colors.black,
  },
  bold15: {
    fontFamily: Fonts.Bold,
    fontSize: RFValue(15),
    color: Colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  RowCommon: {
    gap: 10,
    marginHorizontal: 10,
  },
  FLEX_GROW: {
    flexGrow: 1,
  },
  iconStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  white: {
    backgroundColor: 'white',
  },
});

export const FLEX = Styles.flex1;
export const WHITE = Styles.white;
export const FLEX_GROW = Styles.FLEX_GROW;
export const CENTERED = Styles.centerDiv;
export const F_SIZE = (val: number): any => ({
  fontSize: F(val),
});
export const F_Family = (val: string): any => ({
  fontFamily: val,
});
export const MV = (val: number): any => ({
  marginVertical: moderateScale(val),
});
export const MR = (val: number): any => ({
  marginRight: moderateScale(val),
});
export const ML = (val: number): any => ({
  marginLeft: moderateScale(val),
});
export const MH = (val: number): any => ({
  marginHorizontal: moderateScale(val),
});
export const MT = (val: number): any => ({
  marginTop: moderateScale(val),
});
export const MB = (val: number): any => ({
  marginBottom: moderateScale(val),
});
export const COLOR = (val: string): any => ({
  color: val,
});
export const PV = (val: number): any => ({
  paddingVertical: moderateScale(val),
});
export const PH = (val: number): any => ({
  paddingHorizontal: moderateScale(val),
});
export const PL = (val: number): any => ({
  paddingLeft: moderateScale(val),
});
export const PR = (val: number): any => ({
  paddingRight: moderateScale(val),
});
export const PB = (val: number): any => ({
  paddingBottom: moderateScale(val),
});
export const PT = (val: number): any => ({
  paddingTop: moderateScale(val),
});
export const BCOLOR = (val: string): any => ({
  backgroundColor: val,
});
export const BR = (val: number): any => ({
  borderRadius: moderateScale(val),
});
export const h = (val: any): any => ({
  height: moderateScale(val),
});
export const w = (val: any): any => ({
  width: moderateScale(val),
});

export const SQUARE = (val: any): any => ({
  width: moderateScale(val),
  height: moderateScale(val),
});

export const CIRCLE = (SIZE: number): any => ({
  width: moderateScale(SIZE),
  height: moderateScale(SIZE),
  borderRadius: SIZE,
});

export const light = (SIZE: number, colors?: string): any => ({
  fontFamily: Fonts.Light,
  fontSize: RFValue(SIZE),
  color: colors ? colors : Colors.black,
});
export const medium = (SIZE: number, colors?: string): any => ({
  fontFamily: Fonts.Medium,
  fontSize: RFValue(SIZE),
  color: colors ? colors : Colors.black,
});
export const regular = (SIZE: number, colors?: string): any => ({
  fontFamily: Fonts.Regular,
  fontSize: RFValue(SIZE),
  color: colors ? colors : Colors.black,
});
export const semiBold = (SIZE: number, colors?: string): any => ({
  fontFamily: Fonts.SemiBold,
  fontSize: RFValue(SIZE),
  color: colors ? colors : Colors.black,
});
export const bold = (SIZE: number, colors?: string): any => ({
  fontFamily: Fonts.Bold,
  fontSize: RFValue(SIZE),
  color: colors ? colors : Colors.black,
});
