import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector( state => state.ui.cartIsVisible );
  const cart = useSelector( state => state.cart );
  const notification = useSelector( state => state.ui.notification );

  useEffect( () => {
    dispatch( fetchCartData() );
  }, [ dispatch ] );

  useEffect( () => {
    // const sendCartData = async () => {
    // dispatch( uiActions.showNotification( {
    //   status: 'pending',
    //   title: 'Sending...',
    //   message: 'Sending cart details!',
    // } ) );
    // const response = await fetch( 'https://react-http-a5a7d-default-rtdb.firebaseio.com/cart.json', {
    //   method: 'PUT',
    //   body: JSON.stringify( cart ),
    // } );

    // if ( !response.ok ) {
    //   throw new Error( 'Sending cart data failed!' );
    // }

    // dispatch( uiActions.showNotification( {
    //   status: 'success',
    //   title: 'Success...',
    //   message: 'Sent cart details successfully!',
    // } ) );


    // };

    if ( isInitial ) {
      isInitial = false;
      return;
    }

    // sendCartData().catch( error => {
    // dispatch( uiActions.showNotification( {
    //   status: 'error',
    //   title: 'Error...',
    //   message: 'Sending cart details failed',
    // } ) );
    // } );

    if ( cart.changed ) {
      dispatch( sendCartData( cart ) );
    }


  }, [ cart, dispatch ] );

  return (
    <Fragment>
      { notification && <Notification
        status={ notification.status }
        title={ notification.title }
        message={ notification.message } /> }
      <Layout>
        { showCart && <Cart /> }
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
