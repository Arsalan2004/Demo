import Toast from 'react-native-simple-toast';
import axios from 'axios';
import {store} from '../Store/Store';
import {CheckNet} from './Validations';
import {logOut} from '../Store/Data/Auth/AuthSlice';

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const ErrorHandling = (error: any, reject: any) => {
  if (error?.data?.message) {
    setTimeout(() => {
      Toast.show(error?.data?.message ?? 'Something went wrong!', Toast.SHORT);
    }, 500);
  }
  reject(error);
};

export const apiWithLoader = async (
  url: string,
  method: keyof typeof METHODS,
  data: any,
  setLoader: any,
  isRaw = true,
  imgs = [{name: '', data: []}] as {name: string; data?: {uri?: string}[]}[],
) => {
  return new Promise(
    async (resolve: (arg0: any) => void, reject: () => any) => {
      if (await CheckNet()) return reject();
      else {
        try {
          let param = new FormData();
          if (!isRaw) {
            for (const key in data) {
              if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                param.append(key, element);
              }
            }
          } else {
            param = data as FormData;
          }
          {
            imgs.map((item, index) => {
              if (item?.data?.length != 0) {
                item?.data?.forEach((element: {uri?: string}, index) => {
                  param.append(item.name, {
                    uri: element.uri,
                    type: 'image/jpeg',
                    name: 'image.jpg',
                  });
                });
              }
            });
          }
          setLoader((prev: any) => !prev);
          let requestData: any = {
            url: url,
            method,
            headers: {
              'Content-Type': isRaw
                ? 'application/json'
                : 'multipart/form-data',
            },
          };
          if (param) {
            requestData.data = param;
          }
          const response: any = await axios(requestData);
          if (
            response?.data?.Status != 1 &&
            response?.data?.Status != undefined &&
            response?.data?.Status == 0
          ) {
            ErrorHandling(response, reject);
          } else {
            resolve(response?.data);
          }
          setLoader((prev: any) => !prev);
        } catch (error: any) {
          if (error?.response?.status == 401) {
            store.dispatch(logOut());
          }
          setLoader((prev: any) => !prev);
          ErrorHandling(error?.response, reject);
        }
      }
    },
  );
};
