import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../Store/Store';
import {rootReducerType} from '../Store/rootReducer';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useGetStore = () =>
  useSelector<rootReducerType, rootReducerType>(state => state);
