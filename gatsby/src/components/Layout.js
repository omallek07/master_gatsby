import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <div>
    <Typography />
    <GlobalStyles />

    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
