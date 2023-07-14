import AppDrawer from '../components/Drawer'
import { UIProvider } from '../context/uiContext'
import '../styles/globals.css'
import Layout from './layout'

function MyApp({ Component, pageProps }) {


  return <UIProvider>
    <Layout>
      <AppDrawer />
      <Component {...pageProps} />
    </Layout>
  </UIProvider>
}

export default MyApp
