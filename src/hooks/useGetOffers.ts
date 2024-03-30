import {useEffect, useState} from 'react';
import {apiWithLoader} from '../services/HttpsServices';
import {OfferDetailTypes} from '../models/home';

export const useGetOffers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState<OfferDetailTypes[]>([]);
  useEffect(() => {
    apiWithLoader(
      'https://dl.dropboxusercontent.com/s/p57gxwqm84zkp96/demo_api.json',
      'GET',
      '',
      setIsLoading,
    )
      .then(res => {
        console.log('🚀 ~ useEffect ~ res:', res);
        setOffers(res?.Result);
      })
      .catch(err => {
        console.log('🚀 ~ useEffect ~ err:', err);
        setIsLoading(false);
      });
  }, []);
  return {isLoading, offers};
};
