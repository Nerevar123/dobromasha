import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';

import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </StyleSheetManager>
  </React.StrictMode>,
);
