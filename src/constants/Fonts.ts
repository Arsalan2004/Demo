import {RFValue} from 'react-native-responsive-fontsize';

export default {
  Bold: 'BeVietnamPro-Bold',
  SemiBold: 'BeVietnamPro-SemiBold',
  Regular: 'BeVietnamPro-Regular',
  Medium: 'BeVietnamPro-Medium',
  Light: 'BeVietnamPro-Light',
};

export const F = (size: number) => {
  return RFValue(size);
};

export const FSIZE = (size: number) => {
  return RFValue(size);
};
