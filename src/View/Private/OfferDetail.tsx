import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Flex1 from '../../Components/Layouts/Flex1';
import Colors from '../../constants/Colors';
import {BCOLOR, MT, PB, PH, bold, medium} from '../../constants/Utils';
import Header from '../../Components/Header/Header';
import Images from '../../constants/Images';
import {NavigationProps} from '../../services/NavigationModals';
import {moderateScale} from 'react-native-size-matters';
import PromoCode from '../../Components/Card/PromoCode';
import {useAppSelector} from '../../hooks/reduxHooks';
import {
  offerDataSelector,
  setLikedOffers,
} from '../../Store/Data/Main/MainSlice';
import {store} from '../../Store/Store';

const OfferDetail = ({route}: NavigationProps<'OfferDetail'>) => {
  const {likedOffers} = useAppSelector(offerDataSelector);
  const data = route.params;
  return (
    <>
      <Flex1 style={{backgroundColor: Colors.white}}>
        <StatusBar
          backgroundColor={Colors.secondary}
          barStyle={'dark-content'}
        />
        <View style={[BCOLOR(Colors.secondary)]}>
          <Header
            title={data?.StoreName}
            lastImage={
              likedOffers.some(item => item?.DealID == data?.DealID)
                ? Images.heartfill
                : Images.heart
            }
            onLastImage={() => store.dispatch(setLikedOffers(data))}
          />
        </View>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <Image
            source={{uri: data?.Image}}
            style={{width: '100%', height: moderateScale(200)}}
            resizeMode="cover"
          />
          <View
            style={{
              borderWidth: 1,
              padding: 10,
              backgroundColor: Colors.secondary,
            }}>
            <Text style={bold(13)}>{data?.Title}</Text>
          </View>
          <PromoCode promoCode={data?.PromoCode} />
          <View style={[PH(16), PB(30)]}>
            <Text style={bold(13)}>
              Start Date:<Text style={medium(13)}>{data?.ValidityStart}</Text>
            </Text>
            <Text style={[bold(13), MT(10)]}>
              End Date:<Text style={medium(13)}>{data?.ValidityEnd}</Text>
            </Text>
            <Text style={[bold(13), MT(10)]}>
              Category:<Text style={medium(13)}>{data?.CategName}</Text>
            </Text>
            <Text style={[bold(13), MT(10)]}>
              Description:{'\n\n'}
              <Text style={medium(13)}>{data?.Description}</Text>
            </Text>
          </View>
        </ScrollView>
      </Flex1>
    </>
  );
};

export default OfferDetail;

const styles = StyleSheet.create({});
