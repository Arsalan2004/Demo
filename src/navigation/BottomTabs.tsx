import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DEVICE_TYPE} from '../constants/Utils';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';
import Colors from '../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {BottomTabsScreenTypes} from '../services/NavigationModals';
import {moderateScale} from 'react-native-size-matters';
import MyProfile from '../View/Private/MyProfile';
import Home from '../View/Private/Home';

type Props = {};

export const Tab = createBottomTabNavigator();

const BottomTabs = (props: Props) => {
  const Screens: BottomTabsScreenTypes = [
    {
      name: 'Home',
      title: 'Offers',
      Component: Home,
      icons: [Images.home, Images.home_h],
    },
    {
      name: 'MyProfile',
      title: 'Profile',
      Component: MyProfile,
      icons: [Images.user, Images.user_h],
    },
  ];

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: '',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height:
              DEVICE_TYPE == 'ios' ? moderateScale(80) : moderateScale(70),
            padding: 10,
            paddingTop: DEVICE_TYPE == 'ios' ? moderateScale(20) : 0,
            backgroundColor: Colors.lightwhite,
            elevation: 0,
          },
        }}
        detachInactiveScreens={false}>
        {Screens.map((item, index) => {
          return (
            <Tab.Screen
              key={item.name}
              name={item.name}
              component={item.Component}
              options={{
                tabBarIcon: ({color, size, focused}) => {
                  return (
                    <BT_Button
                      name={item.title}
                      focused={focused}
                      img={item.icons[0]}
                      activeImg={item.icons[1]}
                    />
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});

type BT_ButtonProps = {
  name: string;
  focused: boolean;
  img: ImageSourcePropType;
  activeImg: ImageSourcePropType;
};

const BT_Button: React.FC<BT_ButtonProps> = ({
  focused,
  img,
  activeImg,
  name,
}) => {
  const size = RFValue(22);
  const color = focused ? 'black' : '#696969';

  return (
    <>
      <Image
        style={[
          {
            width: size,
            height: size,
          },
        ]}
        source={focused ? activeImg : img}
      />
      <Text
        style={{
          fontFamily: Fonts.Regular,
          fontSize: Platform.OS == 'android' ? RFValue(11) : RFValue(10),
          color: color,
        }}>
        {name}
      </Text>
    </>
  );
};
