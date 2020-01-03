import React from "react";

import Header from './header';
import Footer from './footer';

export default ({ children }) => (
  <>
    <Header />
    <main className="page-wrapper">
      {children}
    </main>
    <Footer />
  </>
);