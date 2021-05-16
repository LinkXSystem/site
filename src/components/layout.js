import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Application from './application/app';

import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  header = !isRootPath ?
    (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    ) : (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Fragment>
        <Header>{header}</Header>
        <Main>
          {children}
        </Main>
        <Footer />
      </Fragment>

      <Fragment>
        <Application />
      </Fragment>
    </div>
  )
}

export default Layout
