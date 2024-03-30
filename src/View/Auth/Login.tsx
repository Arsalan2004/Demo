import {StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Flex1 from '../../Components/Layouts/Flex1';
import KeyboardScrollView from '../../Components/KeyboardScrollView/KeyboardScrollView';
import {PH} from '../../constants/Utils';
import AuthWrapper from './Component/AuthWrapper';
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';
import LabeledInput from '../../Components/InputText/LabeledInput';
import {useFormik} from 'formik';
import {loginSchema} from '../../services/Validations';
import {store} from '../../Store/Store';
import {setAuthenticaiton, setUserData} from '../../Store/Data/Auth/AuthSlice';
import PrimaryBtn from '../../Components/Button/PrimaryBtn';
import {apiWithLoader} from '../../services/HttpsServices';

type Props = {};
const Login = (props: Props) => {
  const [isloading, setIsLoading] = useState(false);
  const initialValues = {username: '', password: ''};
  const onSubmit = async (value: typeof initialValues) => {
    apiWithLoader(
      'https://dummyjson.com/auth/login',
      'POST',
      value,
      setIsLoading,
    )
      .then(res => {
        store.dispatch(setAuthenticaiton(true));
        store.dispatch(setUserData(res));
      })
      .catch(err => {
        setIsLoading(false);
      });
  };
  const formik = useFormik<typeof initialValues>({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  });
  return (
    <>
      <Flex1 style={{...PH(16), backgroundColor: Colors.white}}>
        <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
        <KeyboardScrollView>
          <AuthWrapper image={Images.Demo} title="Login" />
          <LabeledInput
            {...{formik}}
            name="username"
            placeholder="User Name"
            label="User Name"
            leftImage={Images.user}
          />
          <LabeledInput
            {...{formik}}
            name="password"
            placeholder="Password"
            label="Password"
            leftImage={Images.Password}
            isSecure
          />
          <PrimaryBtn
            title="Login"
            onPress={() => formik.handleSubmit()}
            isDisabled={isloading}
            isLoading={isloading}
            mrVr={20}
          />
        </KeyboardScrollView>
      </Flex1>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
