import {OfferDetailTypes} from './../../../models/home';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../Store';

const initialState: {likedOffers: OfferDetailTypes[]} = {
  likedOffers: [],
};

export type offerSliceType = typeof initialState;

const OfferSlice = createSlice({
  name: 'offerData',
  initialState,
  reducers: {
    setLikedOffers: (state, action: PayloadAction<OfferDetailTypes>) => {
      const index = state.likedOffers.findIndex(
        offer => offer.DealID === action.payload.DealID,
      );
      if (index === -1) {
        state.likedOffers.push(action.payload);
      } else {
        state.likedOffers.splice(index, 1);
      }
    },
    clearLikedOffers: state => {
      state.likedOffers = [];
    },
  },
});

export default OfferSlice.reducer;
export const offerDataSelector = (state: RootState) => state.offerData;

export const {setLikedOffers, clearLikedOffers} = OfferSlice.actions;
