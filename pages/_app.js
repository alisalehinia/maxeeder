import { configureStore } from '@reduxjs/toolkit';
import AppDrawer from '../components/Drawer'
import { UIProvider } from '../context/uiContext'
import '../styles/globals.css'
import Layout from './layout'

import { Provider } from 'react-redux';
import cartReducer, { getTotals } from "../features/cartSlice";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }) {

  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });



  return <Provider store={store}>
    <UIProvider>
      <Layout>
        <AppDrawer />
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </UIProvider>
  </Provider>
}

export default MyApp
