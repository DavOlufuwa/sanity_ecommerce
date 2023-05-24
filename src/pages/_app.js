import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import Layout from '../../components/Layout'
import { StoreProvider } from '../../utils/Store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    <ToastContainer/>
    </>
  )
}
