import React from 'react';
import Layout from './src/components/Layout';

// Any time gatsby renders page it gets wrapped by this
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line
  return <Layout {...props}>{element}</Layout>;
}
