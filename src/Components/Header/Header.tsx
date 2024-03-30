import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {useGetStatusBarHeight} from '../../hooks/dimentionHook';
import FlexDirRow from '../Layouts/FlexDirRow';
import Images from '../../constants/Images';
import {SQUARE, Styles} from '../../constants/Utils';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';

interface Props {
  title?: string;
  secondImage?: ImageSourcePropType;
  thirdImage?: ImageSourcePropType;
  lastImage?: ImageSourcePropType;
  firstImage?: boolean;
  onLastImage?: () => void;
  onImage2?: () => void;
  onImage3?: () => void;
  onFirstImage?: () => void;
  tintColor2?: string;
  tintColor3?: string;
  tintColor?: string;
  whiteBg?: boolean;
  titleStyle?: ViewStyle;
  Clear?: boolean;
  tintColor4?: string;
  hideFirstImage?: boolean;
}

const Header = ({
  title,
  secondImage,
  lastImage,
  onImage2,
  onImage3,
  tintColor = 'black',
  tintColor2 = 'black',
  tintColor3 = 'black',
  onLastImage,
  thirdImage,
  Clear,
  firstImage,
  onFirstImage,
  hideFirstImage,
  tintColor4,
  titleStyle,
  whiteBg,
}: Props) => {
  const marginTop = useGetStatusBarHeight() + 10;
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: moderateScale(15),
        marginTop,
        marginBottom: moderateScale(10),
      }}>
      <FlexDirRow style={{justifyContent: 'space-between'}}>
        {!hideFirstImage && (
          <NavigationIcon
            image={!firstImage && Images.arrowright1}
            onPress={onFirstImage ? onFirstImage : () => navigation.goBack()}
            {...{tintColor, whiteBg}}
          />
        )}

        <Text
          style={{
            color: tintColor,
            position: 'absolute',
            width: '100%',
            fontSize: RFValue(15),
            fontFamily: Fonts.Medium,
            zIndex: -1,
            textAlign: 'center',
            ...titleStyle,
          }}>
          {title}
        </Text>
        <FlexDirRow style={{gap: 15}}>
          {thirdImage && (
            <NavigationIcon
              image={thirdImage}
              onPress={onImage3}
              {...{tintColor: tintColor3, whiteBg}}
            />
          )}
          {secondImage && (
            <NavigationIcon
              onPress={onImage2}
              image={secondImage}
              {...{tintColor: tintColor2, whiteBg}}
            />
          )}
          {lastImage && (
            <NavigationIcon
              image={lastImage}
              onPress={onLastImage}
              {...{tintColor: tintColor4 ?? tintColor, whiteBg}}
            />
          )}
        </FlexDirRow>
      </FlexDirRow>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  circledIcon: {
    backgroundColor: 'white',
    padding: moderateScale(8),
    borderRadius: moderateScale(6),
    borderWidth: moderateScale(2),
    borderColor: Colors.border,
  },
});

interface NavigationIcon {
  onPress?: () => void;
  image?: ImageSourcePropType;
  tintColor?: string;
  whiteBg?: boolean;
}

export function NavigationIcon({
  image,
  onPress,
  tintColor,
  whiteBg,
}: NavigationIcon) {
  return (
    <TouchableOpacity {...{onPress}} style={[whiteBg && styles.circledIcon]}>
      {image && <Image source={image} style={{...SQUARE(24), tintColor}} />}
    </TouchableOpacity>
  );
}
