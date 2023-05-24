import '@/styles/globals.css'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify'
import { StoreProvider } from '../../utils/Store'

const Layout = dynamic(()=> import('../../components/Layout'), {
  ssr: false
})

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
