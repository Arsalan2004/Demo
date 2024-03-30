import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Flex1 from '../../Components/Layouts/Flex1';
import Colors from '../../constants/Colors';
import Header from '../../Components/Header/Header';
import {BCOLOR, PV} from '../../constants/Utils';
import OfferCard from '../../Components/Card/OfferCard';
import {useGetOffers} from '../../hooks/useGetOffers';
import Sloader from '../../Components/Sloader/Sloader';
import {moderateScale} from 'react-native-size-matters';
import NoResult from '../../Components/Wrapper/NoResult';

type Props = {};

const Home = (props: Props) => {
  const {isLoading, offers} = useGetOffers();
  return (
    <>
      <Flex1 style={{backgroundColor: Colors.white}}>
        <StatusBar
          backgroundColor={Colors.secondary}
          barStyle={'dark-content'}
        />
        <View style={[BCOLOR(Colors.secondary), PV(10), {elevation: 5}]}>
          <Header title="Offer List" hideFirstImage />
        </View>
        <Sloader
          style={{height: moderateScale(120), width: '90%'}}
          isVisible={isLoading}
        />
        <NoResult
          title="No Offers found"
          isVisible={offers?.length == 0 && !isLoading}
        />
        <FlatList
          data={offers}
          keyExtractor={item => item.DealID}
          contentContainerStyle={PV(10)}
          renderItem={({item}) => {
            return (
              <>
                <OfferCard {...item} />
              </>
            );
          }}
        />
      </Flex1>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
