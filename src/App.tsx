import {View, Text, LogBox, Platform, UIManager} from 'react-native';
import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import {pStore, store} from './Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

type Props = {};
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;

const App: React.FC<Props> = ({}) => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store} key={'demo'}>
      <PersistGate loading={null} persistor={pStore} key={'demo'}>
        <RootNavigator key={'demo'} />
      </PersistGate>
    </Provider>
  );
};

export default App;
