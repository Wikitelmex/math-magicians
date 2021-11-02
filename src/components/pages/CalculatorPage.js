import React, { lazy, Suspense } from 'react';

const LazyCalculator = lazy(() => import('../Calculator/Calculator'));

const CalculatorPage = () => (
  <div className="d-flex justify-content-between flex-wrap">
    <h1>Let&apos;s do some math!</h1>
    <Suspense fallback="Loading calculator...">
      <LazyCalculator />
    </Suspense>
  </div>
);

export default CalculatorPage;
