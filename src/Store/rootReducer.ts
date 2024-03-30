import OfferSlice, {offerSliceType} from './Data/Main/MainSlice';
import {combineReducers} from '@reduxjs/toolkit';
import UserSlice, {userDataType} from './Data/Auth/AuthSlice';

export type rootReducerType = {
  userData: userDataType;
  offerData: offerSliceType;
};

const rootReducer = combineReducers({
  userData: UserSlice,
  offerData: OfferSlice,
});

export default rootReducer;
