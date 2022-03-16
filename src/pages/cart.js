import React from 'react';
import Cart from '../components/Cart';
import Content from '../components/Content';
import Header from '../components/Header';
import Seo from '../components/Seo';

const CartPage = () => (
  <>
    <Seo noIndex title="Your Cart" />
    <Header hero="Your Cart" />
    <Content pb={4} pt={5}>
      <Cart />
    </Content>
  </>
);

export default CartPage;
