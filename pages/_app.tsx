import '../styles/styles.css'
import '../styles/theme.css'
import '../styles/globals.css'
import '../styles/range-slider.css'
import '../styles/toggle-switch.css'
import '../styles/utility-patterns.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store, wrapper } from '../store'
import { getObj } from '../db/LocalStorage'
import '../styles/console.scss'
import { initialConfig, SET_DARK_MODE } from '../store/reducers/sampleReducer'
import { setDarkMode } from '../store/actions/sampleAction'

const initConfig = (store: any) => {
  store.dispatch(setDarkMode(false))
  getObj(SET_DARK_MODE).then((darkMode) => {
    let dm = initialConfig.darkMode
    if (darkMode) {
      dm = darkMode
    }
    console.log(dm)
  })
}

const initApp = () => {
  initConfig(store)
}
initApp()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
        <Toaster />
      </Provider>
    </>
  )
}
export default wrapper.withRedux(MyApp);
