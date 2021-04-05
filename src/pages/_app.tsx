import { AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    //ResetCss vem por padrão como true = todo css resetado
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
 )
}

export default MyApp
