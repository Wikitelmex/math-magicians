import React, { lazy, Suspense } from 'react';

const LazyCalculator = lazy(() => import('./Calculator'));

const Calculator = () => (
  <Suspense fallback="Loading calculator...">
    <LazyCalculator />
  </Suspense>
);

export default Calculator;
