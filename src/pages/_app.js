import Main from '@/Components/Layouts/Main/Main'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Main> <Component {...pageProps} /></Main>
}
