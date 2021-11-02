import React, { lazy, Suspense } from 'react';

const LazyNavMenu = lazy(() => import('./NavMenu'));

const NavMenu = () => (
  <Suspense fallback="loading menu...">
    <LazyNavMenu />
  </Suspense>
);

export default NavMenu;
