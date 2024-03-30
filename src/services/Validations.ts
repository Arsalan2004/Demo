import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
import * as yup from 'yup';

export const CheckNet = async () => {
  const state = await NetInfo.fetch();
  if (state.isConnected) return false;
  else {
    Toast.show('Check Your Internet Connection', Toast.SHORT);
    return true;
  }
};

export const stringValidation = (name: string, min = 1, max = 255) => {
  return yup
    .string()
    .required(`${name as any} ${'is required'}`)
    .min(
      min,
      `${name as any} ${'must be at least'} ${min} ${'characters long'}`,
    )
    .max(max, `${name as any} ${'must be at most'} ${max} ${'characters long'}`)
    .trim();
};
const Password = {
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short'),
};

export const loginSchema = yup.object().shape({
  username: stringValidation('Username', 3, 255),
  ...Password,
});
