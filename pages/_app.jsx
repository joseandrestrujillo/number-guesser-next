
import '../styles/reset.css'
import AppProvider from "../components/AppProvider"
import Header from '../components/Header'



export default function MyApp({ Component, pageProps } ) {
  return (
      <>
        <Header/>
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
      </>
)
}