import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import Layout from '../../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer/>
    </>
  )
}
