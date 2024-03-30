import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import Fonts, {F} from '../../constants/Fonts';
import {moderateScale} from 'react-native-size-matters';
import {SQUARE, regular} from '../../constants/Utils';
import FlexDirRow from '../Layouts/FlexDirRow';
import {RFValue} from 'react-native-responsive-fontsize';
import {useFormik} from 'formik';
import YupError from '../Wrapper/YupError';
import Images from '../../constants/Images';

interface Props extends TextInputProps {
  label?: string;
  leftImage?: ImageSourcePropType;
  rightText?: string;
  isLabelSmall?: boolean;
  marginTop?: number;
  mainContStyle?: ViewStyle;
  rightImage?: ImageSourcePropType;
  rImageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
  formik?: ReturnType<typeof useFormik<any>>;
  second?: boolean;
  name?: string;
  onRightImagePress?: () => void;
  isSecure?: boolean;
  dontshowError?: boolean;
}

const LabeledInput = ({
  label,
  leftImage,
  rightText,
  isLabelSmall,
  marginTop,
  mainContStyle,
  rightImage,
  containerStyle,
  onRightImagePress,
  second,
  formik,
  name,
  rImageStyle,
  value,
  onChangeText,
  onBlur,
  isSecure,
  dontshowError,
  ...props
}: Props) => {
  const [secure, setSecure] = useState(isSecure);
  let istouched = undefined;
  let Err = undefined;
  if (formik && name) {
    const {values, handleBlur, handleChange, touched, errors} = formik;
    (value = values[name]),
      (onChangeText = handleChange(name)),
      (onBlur = handleBlur(name));
    istouched = touched[name];
    Err = errors[name];
  }
  const onVisible = () => {
    setSecure(!secure);
  };
  return (
    <View
      style={[
        marginTop ? {marginTop} : {marginTop: RFValue(10)},
        mainContStyle,
      ]}>
      <Text
        style={[
          regular(14),
          {fontFamily: Fonts.Medium},
          isLabelSmall && {fontSize: F(12.5)},
        ]}>
        {label}
      </Text>
      <FlexDirRow
        style={{
          borderWidth: 1,
          borderColor: Colors.lightGray,
          borderRadius: 6,
          marginTop: moderateScale(10),
          padding: moderateScale(10),
          paddingHorizontal: moderateScale(15),
          gap: 10,
          backgroundColor: 'white',
        }}>
        {leftImage && (
          <Image
            source={leftImage}
            resizeMode="contain"
            style={SQUARE(25)}
            tintColor={'black'}
          />
        )}
        <TextInput
          value={value}
          onChangeText={
            props.keyboardType == 'numeric'
              ? txt => {
                  formik?.handleChange(name)(txt.replace(/[^0-9]/g, ''));
                }
              : onChangeText
          }
          onBlur={onBlur}
          allowFontScaling={false}
          secureTextEntry={isSecure ? secure : false}
          placeholderTextColor={Colors.placeholder}
          {...props}
          style={[
            {
              fontFamily: Fonts.Medium,
              fontSize: RFValue(14),
              color: 'black',
              padding: 0,
              flex: 1,
            },
            props.style,
          ]}
        />
        {(rightImage || isSecure) && (
          <Pressable onPress={isSecure ? onVisible : onRightImagePress}>
            <Image
              source={
                isSecure ? (secure ? Images.eyeclose : Images.eye) : rightImage
              }
              style={{
                ...SQUARE(24),
                marginRight: moderateScale(10),
                tintColor: second ? Colors.primary : 'black',
                ...rImageStyle,
              }}
            />
          </Pressable>
        )}
      </FlexDirRow>
      {istouched && Err && !dontshowError && <YupError err={Err?.toString()} />}
    </View>
  );
};

export default LabeledInput;

const styles = StyleSheet.create({});
