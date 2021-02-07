import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

// Any time gatsby renders page it gets wrapped by this
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line
  return <Layout {...props}>{element}</Layout>;
}

// Useful for redux or react provider to manage state
export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
