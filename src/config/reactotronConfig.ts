import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import { Tron } from 'interfaces/reactotron';

declare global {
  interface Console {
    tron: Tron;
  }
}

Reactotron.configure({
  name: 'To-Do App',
  createSocket: path => new ReactotronFlipper(path)
})
  .setAsyncStorageHandler?.(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default Reactotron;
