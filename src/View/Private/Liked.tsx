import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Flex1 from '../../Components/Layouts/Flex1';
import Colors from '../../constants/Colors';
import {BCOLOR, PV} from '../../constants/Utils';
import Header from '../../Components/Header/Header';
import NoResult from '../../Components/Wrapper/NoResult';
import {useAppSelector} from '../../hooks/reduxHooks';
import {offerDataSelector} from '../../Store/Data/Main/MainSlice';
import OfferCard from '../../Components/Card/OfferCard';

type Props = {};

const Liked = (props: Props) => {
  const {likedOffers} = useAppSelector(offerDataSelector);
  return (
    <>
      <Flex1 style={{backgroundColor: Colors.white}}>
        <StatusBar
          backgroundColor={Colors.secondary}
          barStyle={'dark-content'}
        />
        <View style={[BCOLOR(Colors.secondary), {elevation: 5}]}>
          <Header title="Liked" />
        </View>
        <NoResult
          title="No Offers found"
          isVisible={likedOffers?.length == 0}
        />
        <FlatList
          data={likedOffers}
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

export default Liked;

const styles = StyleSheet.create({});
