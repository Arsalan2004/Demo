import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Flex1 from '../../Components/Layouts/Flex1';
import Colors from '../../constants/Colors';
import {BCOLOR, CIRCLE, MT, PV, h, medium, w} from '../../constants/Utils';
import Header from '../../Components/Header/Header';
import Images from '../../constants/Images';
import {moderateScale} from 'react-native-size-matters';
import SettingList from './Components/ProfileList';
import {useAppSelector} from '../../hooks/reduxHooks';
import {userDataSelector} from '../../Store/Data/Auth/AuthSlice';

const MyProfile = () => {
  const {image, firstName, lastName} =
    useAppSelector(userDataSelector).userData;
  const settings = [
    {image: Images.heart, title: 'Liked Offers', screen: 'Liked'},
    {image: Images.logout, title: 'Logout'},
  ];
  return (
    <>
      <Flex1 style={{backgroundColor: Colors.white}}>
        <StatusBar
          backgroundColor={Colors.secondary}
          barStyle={'dark-content'}
        />
        <View style={[BCOLOR(Colors.secondary), PV(10), {elevation: 5}]}>
          <Header title="Profile" hideFirstImage />
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: moderateScale(10),
            alignItems: 'center',
          }}>
          <Image
            source={{uri: image}}
            resizeMode="cover"
            style={[CIRCLE(150), BCOLOR(Colors.lightGray)]}
          />
          <Text style={[medium(16), MT(10)]}>{`${firstName} ${lastName}`}</Text>
        </View>
        <FlatList
          data={settings}
          bounces={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <SettingList {...item} key={index} />;
          }}
        />
      </Flex1>
    </>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
