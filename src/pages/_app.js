import Theme from '../styles/theme';
import '../styles/global.css';
import React, {useState} from 'react';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 