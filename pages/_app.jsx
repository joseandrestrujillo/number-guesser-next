
import '../styles/global.css'
import AppProvider from "../components/AppProvider"
import Header from '../components/Header'
import Head from 'next/head'



export default function MyApp({ Component, pageProps } ) {
  return (
      <>
        <Head>
          <title>Adivinador de numeros</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link  rel="icon"   href="/icono.ico" type="image/png" />
        </Head>
        <Header/>
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
      </>
)
}