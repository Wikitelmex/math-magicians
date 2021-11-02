import React, { lazy, Suspense } from 'react';

const LazyNavMenu = lazy(() => import('./NavMenu'));

const NavMenu = (props) => (
  <Suspense fallback={null}>
    <LazyNavMenu {...props} />
  </Suspense>
);

export default NavMenu;
