import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Provider } from "react-redux";
import { store, wrapper } from '../store'
import { getObj } from '../db/LocalStorage'
import { CONFIG_STORAGE_KEY } from '../constants'
import '../styles/console.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';

const initConfig = (store:any) => {
  console.log('initConfig');

  getObj(CONFIG_STORAGE_KEY).then(config => {

  });
}

const initApp = () => {
  initConfig(store);
};
initApp();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleOAuthProvider clientId="205038597926-6gtue2gddgo021aa36ie9eju119laoo2.apps.googleusercontent.com">
      <Provider store={store}>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
        <Toaster />
      </Provider>
      </GoogleOAuthProvider>
    </>
  )
}
export default wrapper.withRedux(MyApp);
