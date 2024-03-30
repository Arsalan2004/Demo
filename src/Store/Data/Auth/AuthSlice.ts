import {UserData} from './../../../models/user';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../Store';

const initialState: {isAuthenticated: boolean; userData: UserData} = {
  isAuthenticated: false,
  userData: {},
};

export type userDataType = typeof initialState;

const UserSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    logOut: state => {
      return (state = {...initialState});
    },
    setAuthenticaiton: (
      state,
      action: PayloadAction<userDataType['isAuthenticated']>,
    ) => {
      state.isAuthenticated = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const userDataSelector = (state: RootState) => state.userData;

export const {logOut, setAuthenticaiton, setUserData} = UserSlice.actions;
