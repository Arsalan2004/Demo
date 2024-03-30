import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CIRCLE, SQUARE, medium} from '../../../constants/Utils';
import Colors from '../../../constants/Colors';
import {navigate} from '../../../services/NavigationServices';
import {F} from '../../../constants/Fonts';
import {store} from '../../../Store/Store';
import {logOut} from '../../../Store/Data/Auth/AuthSlice';
import LogoutModal from '../../../Components/LogoutModal/LogoutModal';
import {moderateScale} from 'react-native-size-matters';
import {clearLikedOffers} from '../../../Store/Data/Main/MainSlice';

type Props = {
  image: ImageSourcePropType;
  title?: string;
  screen?: any;
};
const SettingList = ({image, title, screen}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <LogoutModal
        isVisible={isVisible}
        onLogout={() => {
          setIsVisible(false);
          store.dispatch(logOut());
          store.dispatch(clearLikedOffers());
        }}
        onCancel={() => {
          setIsVisible(false);
        }}
      />
      <Pressable
        onPress={() => (screen ? navigate(screen) : setIsVisible(true))}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={[
            CIRCLE(45),
            {
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: moderateScale(27),
            },
          ]}>
          <Image
            source={image}
            style={{
              ...SQUARE(24),
              tintColor: Colors.primary,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={medium(15)}>{title}</Text>
        </View>
      </Pressable>
    </>
  );
};

export default SettingList;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    paddingVertical: F(15),
  },
});
