import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './lib/AuthContext';
import PropertyContextProvider from './lib/PropertiesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <html>
    <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PD22S7KPM1"></script>
    <script>
      {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PD22S7KPM1');`
      }
    </script>
    </head>
    <body>
      <AuthContextProvider>
        <PropertyContextProvider>
          <Router>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Router>
        </PropertyContextProvider>
      </AuthContextProvider>
    </body>
  </html>
);
