import '../utils/styles/globals.scss'
import { AppPropsWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //Checks if the page is nullish , returns page if true
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp
